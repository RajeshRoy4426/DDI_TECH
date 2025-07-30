
# from sqlalchemy import create_engine, Column, Integer, String, DateTime
# from sqlalchemy.ext.declarative import declarative_base
# from sqlalchemy.orm import sessionmaker, Session 
# from datetime import datetime


# DATABASE_URL = "sqlite:///./chat.db"


# engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})


# SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


# Base = declarative_base()


# class Message(Base):
#     """
#     SQLAlchemy model for storing chat messages.
#     """
#     __tablename__ = "messages" # Name of the table in the database

#     id = Column(Integer, primary_key=True, index=True) # Primary key, auto-increments
#     session_id = Column(String, index=True, nullable=False) # Foreign key or unique ID for a chat session
#     sender = Column(String, nullable=False) # 'user' or 'ai'
#     content = Column(String, nullable=False) # The message content
#     timestamp = Column(DateTime, default=datetime.utcnow) # Timestamp of when the message was created

#     def to_dict(self):
#         """
#         Converts the Message object to a dictionary, useful for JSON serialization.
#         """
#         return {
#             "id": self.id,
#             "session_id": self.session_id,
#             "sender": self.sender,
#             "content": self.content,
#             "timestamp": self.timestamp.isoformat() 
#         }

# def create_db_tables():
#     """
#     Creates all tables defined in your SQLAlchemy models (inherited from Base)
#     in the database associated with the engine.
#     """
#     print("Creating database tables...")
#     Base.metadata.create_all(bind=engine)
#     print("Database tables created (if they didn't exist).")

# def get_db():
#     """
#     Provides a database session for FastAPI dependencies.
#     Yields a session and ensures it's closed afterwards.
#     """
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()


from datetime import datetime
from typing import Generator

from sqlalchemy import create_engine, Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session

# Database Configuration
DATABASE_URL = "sqlite:///./chat.db"

engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False}  # Required for SQLite threading
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


# ORM Model
class Message(Base):
    """
    SQLAlchemy model for chat messages.
    """
    __tablename__ = "messages"

    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(String, index=True, nullable=False)
    sender = Column(String, nullable=False)
    content = Column(String, nullable=False)
    timestamp = Column(DateTime, default=datetime.utcnow)

    def to_dict(self) -> dict:
        """
        Convert the Message instance into a serializable dictionary.
        """
        return {
            "id": self.id,
            "session_id": self.session_id,
            "sender": self.sender,
            "content": self.content,
            "timestamp": self.timestamp.isoformat()
        }


# Database Utility Functions
def create_db_tables() -> None:
    """
    Create all database tables defined in SQLAlchemy models.
    """
    print("Creating database tables...")
    Base.metadata.create_all(bind=engine)
    print("Database tables created.")


def get_db() -> Generator[Session, None, None]:
    """
    Dependency injection for FastAPI to get a DB session.
    Yields:
        A SQLAlchemy session that will be closed after use.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()



