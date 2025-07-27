from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from dotenv import load_dotenv
import os
from app.database import create_db_tables
from app.routes import chat


load_dotenv()

app = FastAPI()

# CORS for Angular frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
#hi
# Include chat router
app.include_router(chat.router, prefix="/api", tags=["Chat"])

# # Serve frontend
ANGULAR_BUILD_DIR = os.path.join(os.path.dirname(__file__), "..", "frontend", "browser")
app.mount("/", StaticFiles(directory=ANGULAR_BUILD_DIR, html=True), name="static")

@app.on_event("startup")
async def startup():
    create_db_tables()

@app.get("/{full_path:path}", include_in_schema=False)
async def serve_spa():
    return FileResponse(os.path.join(ANGULAR_BUILD_DIR, "index.html"))







