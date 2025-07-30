import os

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from app.database import create_db_tables
from app.routes import chat

# Load environment variables
load_dotenv()

# Create FastAPI application
app = FastAPI(title="Chat Backend API")

# Configure CORS for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Consider using specific domains in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routers
app.include_router(chat.router, prefix="/api", tags=["Chat"])

# Serve Angular frontend
ANGULAR_BUILD_DIR = os.path.join(
    os.path.dirname(__file__),
    "..", "frontend", "browser"
)

app.mount("/", StaticFiles(directory=ANGULAR_BUILD_DIR, html=True), name="static")


@app.on_event("startup")
async def on_startup():
    """
    Startup event to initialize database tables.
    """
    create_db_tables()


@app.get("/{full_path:path}", include_in_schema=False)
async def serve_spa():
    """
    Serve Angular single-page application.
    """
    index_file = os.path.join(ANGULAR_BUILD_DIR, "index.html")
    return FileResponse(index_file)
