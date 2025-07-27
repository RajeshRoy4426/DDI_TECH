
from typing import List, Literal, Optional, Union
from pydantic import BaseModel, Field

class ChatRequest(BaseModel):
    query: str
    session_id: Optional[str] = None

class BasicChatResponseData(BaseModel):
    message: str

class BasicChatResponse(BaseModel):
    type: Literal["basic"] = "basic"
    data: BasicChatResponseData
    session_id: str

class ProgramDetails(BaseModel):
    description: str
    totalHours: int
    skills: List[str]
    id: str

class ProgramDataWrapper(BaseModel):
    program: List[ProgramDetails]

class ProgramChatResponse(BaseModel):
    type: Literal["program"] = "program"
    data: dict
    session_id: str

# class TaskChatResponse(BaseModel):
#     type: Literal["generating"] = "generating"
#     data: dict


class GeneratingResponseData(BaseModel):
    task_id: str
    status: str

class GeneratingChatResponse(BaseModel):
    type: str  # should always be "generating"
    data: GeneratingResponseData
    session_id: str

class Asset(BaseModel):
    asset_id: str
    title: str
    # description: str

class Topic(BaseModel):
    topic_id: str
    title: str
    # description: str
    asset: List[Asset]

class Program(BaseModel):
    program_id: Optional[str] = Field(..., alias="id")
    title: str
    description: str
    duration_hours: int
    skills: List[str]
    program: List[Topic]

ChatResponse = Union[BasicChatResponse, ProgramChatResponse,GeneratingChatResponse]