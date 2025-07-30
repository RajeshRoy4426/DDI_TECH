from typing import List, Literal, Optional, Union
from pydantic import BaseModel, Field


# Request Models
class ChatRequest(BaseModel):
    query: str
    session_id: Optional[str] = None


# Response Data Models
class BasicChatResponseData(BaseModel):
    message: str


class GeneratingResponseData(BaseModel):
    task_id: str
    status: str


class ProgramDetails(BaseModel):
    description: str
    totalHours: int
    skills: List[str]
    id: str


class ProgramDataWrapper(BaseModel):
    program: List[ProgramDetails]


# Response Wrapper Models
class BasicChatResponse(BaseModel):
    type: Literal["basic"] = "basic"
    data: BasicChatResponseData
    session_id: str


class GeneratingChatResponse(BaseModel):
    type: Literal["generating"] = "generating"
    data: GeneratingResponseData
    session_id: str


class ProgramChatResponse(BaseModel):
    type: Literal["program"] = "program"
    data: dict  # Consider changing to ProgramDataWrapper if structure is fixed
    session_id: str


# Domain Models
class Asset(BaseModel):
    asset_id: str
    title: str


class Topic(BaseModel):
    topic_id: str
    title: str
    asset: List[Asset]


class Program(BaseModel):
    program_id: Optional[str] = Field(..., alias="id")
    title: str
    description: str
    duration_hours: int
    skills: List[str]
    program: List[Topic]


# Response Union
ChatResponse = Union[
    BasicChatResponse,
    ProgramChatResponse,
    GeneratingChatResponse
]