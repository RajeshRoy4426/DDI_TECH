# app/services/chat_logic.py
import asyncio
import uuid
from fastapi import BackgroundTasks
import uuid
import json
import logging
from datetime import datetime
import os
from typing import Dict, List
from app.services.models import Program as ProgramModel
from sqlalchemy.orm import Session
from app.services.orchestrator import (
    start_node, field_selector_node, field_collector_node,
    validate_requirements_node, generate_program_node,
    AgentState, ProgramRequirements, fetch_assets_node, extract_topics_node
)

from app.database import Message
from app.services.models import (
    ChatResponse, BasicChatResponse, BasicChatResponseData,
    ProgramChatResponse, ProgramDataWrapper, ProgramDetails,GeneratingChatResponse
)

# from app.models import Program, Topic, Asset  # adjust import based on your model location

from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship, declarative_base

Base = declarative_base()

class Program(Base):
    __tablename__ = 'programs'
    id = Column(String, primary_key=True)
    title = Column(String)
    description = Column(String)
    duration_hours = Column(Integer)

    topics = relationship("Topic", back_populates="program")

class Topic(Base):
    __tablename__ = 'topics'
    id = Column(String, primary_key=True)
    title = Column(String)
    program_id = Column(String, ForeignKey('programs.id'))

    program = relationship("Program", back_populates="topics")
    assets = relationship("Asset", back_populates="topic")

class Asset(Base):
    __tablename__ = 'assets'
    id = Column(String, primary_key=True)
    title = Column(String)
    topic_id = Column(String, ForeignKey('topics.id'))

    topic = relationship("Topic", back_populates="assets")



async def background_generate_program(state, session_id: str, task_id: str, db: Session):
    try:
        print(f"Background generation Started")
        state = await extract_topics_node(state)
        state = await fetch_assets_node(state)
        state = generate_program_node(state)
        raw_json = state["messages"][-1]["content"][0]

        # Use task_id as program_id
        raw_json["program_id"] = task_id
        raw_json = store_program(raw_json)

        # Optionally update task_store

        print(f"Background generation complete for task_id {task_id}")
        persist_message(db, "ai", "Program generation complete.", session_id)
    
    except Exception as e:
        print(f"Background task failed: {e}")

        persist_message(db, "ai", "Program generation failed.", session_id)


def save_program_data(program_json: dict, session_id: str, db: Session):
    program_id = program_json.get("program_id", str(uuid.uuid4()))
    program = Program(
        id=program_id,
        title=program_json.get("title", "Untitled"),
        description=program_json.get("description", ""),
        duration_hours=program_json.get("duration_hours", 0),
        session_id=session_id
    )
    db.add(program)

    for topic_json in program_json.get("program", []):
        topic = Topic(
            id=topic_json.get("topic_id", str(uuid.uuid4())),
            title=topic_json.get("title", "Untitled Topic"),
            program_id=program_id
        )
        db.add(topic)

        for asset_json in topic_json.get("asset", []):
            asset = Asset(
                id=asset_json.get("asset_id", str(uuid.uuid4())),
                title=asset_json.get("title", "Untitled Asset"),
                topic_id=topic.id
            )
            db.add(asset)

    db.commit()

def transform_program_data(input_data):
    return {
        "program": [
            {
                "description": input_data["description"],
                "title" : input_data["title"],
                "totalHours": input_data["duration_hours"],
                "skills": input_data["skills"],
                "id": input_data["program_id"]
            }
        ]
    }
DATA_DIR = "data_store" 
# transformed = transform_program_data(your_input_data
DATA_FILE = os.path.join(DATA_DIR, "programs.json")
os.makedirs(DATA_DIR, exist_ok=True)

if not os.path.exists(DATA_FILE):
    with open(DATA_FILE, "w") as f:
        json.dump([], f)

# def _bg_wrapper(state, session_id, task_id, db):
#     # schedule the coroutine, but return immediately
#     asyncio.create_task(background_generate_program(state, session_id, task_id, db))

def store_program(data):
    program_uuid = data.get("program_id")
    data["program_id"] = program_uuid

    with open(DATA_FILE, "r") as f:
        programs = json.load(f)

    programs.append(data)

    with open(DATA_FILE, "w") as f:
        json.dump(programs, f, indent=2)

    print(f"Program stored with UUID: {program_uuid}")
    return data
logger = logging.getLogger(__name__)

session_store: Dict[str, AgentState] = {}

def persist_message(db: Session, sender: str, content: str, session_id: str):
    message = Message(
        session_id=session_id,
        sender=sender,
        content=content,
        timestamp=datetime.utcnow()
    )
    db.add(message)
    db.commit()
    db.refresh(message)
    return message

async def chat_logic(user_message: str, session_id: str, db: Session, background_tasks: BackgroundTasks) -> ChatResponse:
    if not session_id:
        session_id = str(uuid.uuid4())
        initial_state: AgentState = {
            "messages": [],
            "requirements": ProgramRequirements(),
            "validation_errors": [],
            "step_completed": False,
            "current_field": None,
            "skipped_fields": []
        }
        # initial_input = user_message
        # initial_state['messages'].append({"role": "user", "content": initial_input})
        state = start_node(initial_state, user_message)
        state = field_selector_node(state)
        session_store[session_id] = state
        ai_msg = state["messages"][-1]["content"]
        persist_message(db, "ai", ai_msg, session_id)
        return BasicChatResponse(
            type="basic",
            data=BasicChatResponseData(message=ai_msg),
            session_id=session_id
        )

    state = session_store.get(session_id)
    if not state:
        raise ValueError("Invalid or expired session ID")

    persist_message(db, "user", user_message, session_id)
    state["messages"].append({"role": "user", "content": user_message})
    state = field_collector_node(state, user_message)
    state = validate_requirements_node(state)

    missing = [
        f for f in ["objective", "timeframe", "difficulty_level", "topics"]
        if getattr(state["requirements"], f) is None and f not in state["skipped_fields"]
    ]

    if not missing and not state["validation_errors"]:

        task_id = str(uuid.uuid4())
        session_store[session_id] = state

        background_tasks.add_task(background_generate_program, state, session_id, task_id, db)
        # background_tasks.add_task(_bg_wrapper, state, session_id, task_id, db)
        return GeneratingChatResponse(
            type="generating",
            data={"task_id": task_id, "status": "Program generating is in progress"},
            session_id=session_id)
        # task_id = str(uuid.uuid4())
        # state = await extract_topics_node(state)
        # state = await fetch_assets_node(state)
        # state = generate_program_node(state)
        # raw_json = state["messages"][-1]["content"][0]

        # print (type(raw_json))
        # # try:
        # print("status")
        # raw_json= store_program(raw_json)
        # data = transform_program_data(raw_json)
        # print(data)
        #     # programs = []

        #     # Ensure data is a list
        #     # if isinstance(data, list):
        #     #     programs = data
        #     # elif isinstance(data, dict):
        #     #     programs = [data]

        #     # Now extract only minimal info for ProgramDetails
        #     # details = [
        #     #     ProgramDetails(
        #     #         id=p.get("program_id", str(uuid.uuid4())),
        #     #         description=p.get("description", ""),
        #     #         totalHours=p.get("duration_hours", 0),
        #     #         skills=p.get("skills", [])
        #     #     )
        #     #     for p in programs
        #     # ]

        # # persist_message(db, "ai", json.dump(raw_json), session_id)
        # print("persist_message")
        # return ProgramChatResponse(
        #     type="program",
        #     data=data,
        #     session_id=session_id
        # )
       
        # except Exception:
        #     fallback = "I couldn't generate the program correctly."
        #     persist_message(db, "ai", fallback, session_id)
        #     return BasicChatResponse(
        #         type="basic",
        #         data=BasicChatResponseData(message=fallback),
        #         session_id=session_id
        #     )

    # Still collecting data
    state = field_selector_node(state)
    next_q = state["messages"][-1]["content"]
    persist_message(db, "ai", next_q, session_id)

    session_store[session_id] = state

    return BasicChatResponse(
        type="basic",
        data=BasicChatResponseData(message=next_q),
        session_id=session_id
    )
