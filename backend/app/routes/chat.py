# # app/routes/chat_routes.py

from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks
from fastapi.responses import JSONResponse
import uuid
from sqlalchemy.orm import Session
from typing import List
from app.database import get_db, Message
from app.services.chat_logic import chat_logic, session_store, persist_message, transform_program_data #PROGRAM_STATUSES_FILE #PROGRAMS_DATA_FILE 
from app.services.models import ChatRequest, ChatResponse , Asset, Topic, Program
import json, os

router = APIRouter()


DATA_DIR = "data_store"
STATUS_FILE = os.path.join(DATA_DIR, "program_status.json")
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

@router.get("/program-status/{task_id}")
def check_program_status(task_id: str):
    # 1. Check if program is already completed
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, "r") as f:
            programs = json.load(f)
        for program in programs:
            if program.get("program_id") == task_id:
                data = transform_program_data(program)
                return JSONResponse(
                    content={
                        "type": "program",
                        "data": data
                    },
                    status_code=200
                )

    # 2. Check if it has failed
    if os.path.exists(STATUS_FILE):
        with open(STATUS_FILE, "r") as f:
            statuses = json.load(f)
        task_status = statuses.get(task_id)

        if task_status and task_status.get("status") == "error":
            return JSONResponse(
                content={
                    "type": "error",
                    "data": {
                        "error": "Sorry, I was unable to generate the program due to an error. Please try again."
                    }
                },
                status_code=500
            )

    # 3. Still generating
    return JSONResponse(
        content={
            "type": "generating",
            "data": {
                "status": "Program is generating"
            }
        },
        status_code=202
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
    result=fetch_program_by_uuid(program_id)
    print(type(result))
    # logger.info("Fetching all courses.")
    return {"data": result}