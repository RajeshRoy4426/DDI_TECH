# # database.py
# #db
# from sqlalchemy import create_engine, Column, Integer, String, DateTime

# from sqlalchemy.ext.declarative import declarative_base
# from sqlalchemy.orm import sessionmaker
# from datetime import datetime

# DATABASE_URL = "sqlite:///./chat.db" # Or your actual database URL

# engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
# SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
# Base = declarative_base()

# class Message(Base):
#     __tablename__ = "messages"

#     id = Column(Integer, primary_key=True, index=True)
#     session_id = Column(String, index=True, nullable=False) # <--- NEW: Add this line for session ID
#     sender = Column(String, nullable=False) # 'user' or 'ai'
#     content = Column(String, nullable=False)
#     timestamp = Column(DateTime, default=datetime.utcnow)

#     def to_dict(self):
#         return {
#             "id": self.id,
#             "session_id": self.session_id, # <--- NEW: Include in to_dict
#             "sender": self.sender,
#             "content": self.content,
#             "timestamp": self.timestamp.isoformat()
#         }

# def create_db_tables():
#     # This will create the 'messages' table if it doesn't exist,
#     # or add the 'session_id' column if it's new (requires SQLite DB file deletion or migration tool for existing DBs)
#     Base.metadata.create_all(bind=engine)

# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()

# database.py
from sqlalchemy import create_engine, Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session # Import Session from sqlalchemy.orm
from datetime import datetime

# Define the database URL. For SQLite, it's a file path.
# "sqlite:///./chat.db" creates a file named chat.db in the same directory as your script.
# For other databases (PostgreSQL, MySQL), this URL would be different.
DATABASE_URL = "sqlite:///./chat.db"

# Create the SQLAlchemy engine.
# connect_args={"check_same_thread": False} is necessary for SQLite when
# using multiple threads/requests, as SQLite typically only allows one writer at a time.
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})

# Configure a SessionLocal class.
# sessionmaker is a factory for Session objects.
# autocommit=False: Do not commit changes to the database automatically.
# autoflush=False: Do not flush changes to the database automatically after each operation.
# bind=engine: Bind this sessionmaker to our engine.
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class for declarative models.
# All your SQLAlchemy models (like Message, Program, Topic, Asset) will inherit from this Base.
Base = declarative_base()

# Define your SQLAlchemy models here or ensure they are imported if defined elsewhere.
# For consistency, I'm including the Message model as it's directly used in chat_logic.
class Message(Base):
    """
    SQLAlchemy model for storing chat messages.
    """
    __tablename__ = "messages" # Name of the table in the database

    id = Column(Integer, primary_key=True, index=True) # Primary key, auto-increments
    session_id = Column(String, index=True, nullable=False) # Foreign key or unique ID for a chat session
    sender = Column(String, nullable=False) # 'user' or 'ai'
    content = Column(String, nullable=False) # The message content
    timestamp = Column(DateTime, default=datetime.utcnow) # Timestamp of when the message was created

    def to_dict(self):
        """
        Converts the Message object to a dictionary, useful for JSON serialization.
        """
        return {
            "id": self.id,
            "session_id": self.session_id,
            "sender": self.sender,
            "content": self.content,
            "timestamp": self.timestamp.isoformat() # Convert datetime object to ISO format string
        }

# Function to create all defined database tables.
# Call this once at your application startup (e.g., in main.py) to set up your database.
def create_db_tables():
    """
    Creates all tables defined in your SQLAlchemy models (inherited from Base)
    in the database associated with the engine.
    """
    print("Creating database tables...")
    Base.metadata.create_all(bind=engine)
    print("Database tables created (if they didn't exist).")

# Dependency for FastAPI routes to get a database session.
# This is a generator function, designed to be used with FastAPI's Depends().
# It ensures the session is properly closed after the request is processed.
def get_db():
    """
    Provides a database session for FastAPI dependencies.
    Yields a session and ensures it's closed afterwards.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Helper function to get a standalone database session.
# This is particularly useful for background tasks or scripts that run
# outside of FastAPI's request-response cycle, where you need to explicitly
# manage the session's lifecycle (opening and closing).
# def get_db_session() -> Session:
#     """
#     Returns a new SQLAlchemy database session instance.
#     The caller is responsible for closing this session using `db.close()`.
#     """
#     return SessionLocal()