# app/routes/chat_routes.py

from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks
from fastapi.responses import JSONResponse
import uuid
from sqlalchemy.orm import Session
from typing import List
from app.database import get_db, Message
from app.services.chat_logic import chat_logic, session_store, persist_message, transform_program_data
from app.services.models import ChatRequest, ChatResponse , Asset, Topic, Program
import json, os

router = APIRouter()


DATA_DIR = "data_store"
DATA_FILE = os.path.join(DATA_DIR, "programs.json")
def fetch_program_by_uuid(program_uuid):
    with open(DATA_FILE, "r") as f:
        programs = json.load(f)
 
    for program in programs:
        if program.get("program_id") == program_uuid:
            return program
    return None

@router.post("/chat", response_model=ChatResponse)
async def chat(chat_request: ChatRequest,background_tasks:BackgroundTasks, db: Session = Depends(get_db)):
    try:
        result = await chat_logic(chat_request.query, chat_request.session_id, db, background_tasks)
        return result
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail=f"Server error: {e}")

# @router.post("/chat")
# async def chat(chat_request: ChatRequest, background_tasks: BackgroundTasks, db: Session = Depends(get_db)):
#     session_id = chat_request.session_id or str(uuid.uuid4())
#     background_tasks.add_task(run_chat_task, session_id, chat_request.query, db)
#     return {"session_id": session_id, "status": "processing"}


@router.get("/program-status/{task_id}")
def check_program_status(task_id: str):
    # Check if the JSON file exists
    if not os.path.exists(DATA_FILE):
        return JSONResponse(
            content={
                "type": "generating",
                "data": {"status": "Program is generating"}
            },
            status_code=202,
            media_type="application/json"
        )

    # Load stored programs
    with open(DATA_FILE, "r") as f:
        programs = json.load(f)

    # Look for matching program_id
    for program in programs:
        if program.get("program_id") == task_id:
            data = transform_program_data(program)
            return JSONResponse(
                content={
                    "type": "program",
                    "data": data
                },
                status_code=200,
                media_type="application/json"
            )

    # If not found
    return JSONResponse(
        content={
            "type": "generating",
            "data": {"status": "Program is generating"}
        },
        status_code=202,
        media_type="application/json"
    )

@router.get("/history/{session_id}")
async def get_history(session_id: str, db: Session = Depends(get_db)):
    messages = db.query(Message).filter(Message.session_id == session_id).all()
    return {"history": [m.to_dict() for m in messages]}

@router.post("/clear_history/{session_id}")
async def clear_history(session_id: str, db: Session = Depends(get_db)):
    db.query(Message).filter(Message.session_id == session_id).delete()
    db.commit()
    session_store.pop(session_id, None)
    return {"message": f"Cleared history for {session_id}"}

@router.get("/program/{program_id}")#response_model=List[Program]
async def get_courses(program_id):
    # for program_data in sample_programs_data:
    #     if program_data["id"] == program_id:
    #         # logger.info(f"Fetching program details for ID: {program_id}")
    #         # Manually create Topic and Asset instances for proper Pydantic validation
    #         topics = []
    #         for topic_dict in program_data["program"]:
    #             assets = [Asset(**asset_dict) for asset_dict in topic_dict["asset"]]
    #             topics.append(Topic(topic_id=topic_dict["topic_id"],
    #                                 title=topic_dict["title"],
    #                                 # description=topic_dict["description"],
    #                                 asset=assets))
            
    #         return Program(
    #             id=program_data["id"], # Pass 'id' if using alias, or 'program_id' if your JSON key is 'program_id'
    #             title=program_data["title"],
    #             description=program_data["description"],
    #             duration_hours=program_data["duration_hours"],
    #             skills=program_data["skills"],
    #             program=topics
    #         )
    result=fetch_program_by_uuid(program_id)
    print(type(result))
    # logger.info("Fetching all courses.")
    return {"data": result}
