# from openai import OpenAI # This import is handled by langchain_openai
# from langgraph.prebuilt import create_react_agent # Not used in current main.py flow
from langchain_openai import ChatOpenAI
from typing import TypedDict, List, Optional, Literal
from langgraph.graph import StateGraph, END
from openai import OpenAI
from dataclasses import dataclass
import json
import time
import re
import ast
import asyncio
from langgraph.prebuilt import create_react_agent
from langchain_openai import ChatOpenAI
from langchain_mcp_adapters.client import MultiServerMCPClient
# from langchain_mcp_adapters.client import MultiServerMCPClient # Not used in current main.py flow

token=""
DATABRICKS_TOKEN =""
BASE_URL = "https://adb-4119546981664644.4.azuredatabricks.net/serving-endpoints"
client = OpenAI(api_key=DATABRICKS_TOKEN, base_url=BASE_URL)

##Change the mcp server url and auth token 
mcp_client = MultiServerMCPClient({
    "mcpstore": {
        "url": "https://ddi-mcp-server-4119546981664644.4.azure.databricksapps.com/api/mcp",
        "transport": "streamable_http",
        "headers": {"Authorization": f"Bearer {token}"}
    }
})
# tools = mcp_client.get_tools()


vector_tool_desc="""This tool retrieves the most relevant learning topics from a vector index based on a user's learning objective or query. It uses semantic search over topic names and descriptions stored in Databricks to identify suitable topics that align with the user's goals. The output is a list of relevant topics with their names and descriptions, which can be used to construct a personalized learning program. Make sure to use this toll always."""

async def get_configured_tools():
    start=time.time()
    tools = await mcp_client.get_tools()
    tools[-1].description = vector_tool_desc
    del tools[4]
    end=time.time()
    # tools = await mcp_client.get_tools()
    print(f"time taken to list tools:{end-start}")
    return tools
# tools= asyncio.run( get_configured_tools())

class TopicIDResponse(TypedDict):
    topic_ids: List[str]

llama_model = ChatOpenAI(
    api_key=DATABRICKS_TOKEN,
    model="databricks-meta-llama-3-1-405b-instruct",
    temperature=0,
    base_url=BASE_URL
)

# # 4. Create the React agent with a blank prompt for now
# react_agent = create_react_agent(
#     llama_model,
#     tools,
#     prompt="You are a professional program generator.Generate a comprehensive learning program by utilizing available tools to extract any needed data based on user requirements"  # we’ll fill this in below inside generate_program_node
# )

def call_llm(messages: List[dict], temperature: float = 0.3, max_tokens: int = 1000) -> str:
    start=time.time()
    """
    Calls the LLM with the given messages and returns the response.
    """
    response = client.chat.completions.create(
        model="databricks-llama-4-maverick", # Ensure this model is available at your BASE_URL
        messages=messages,
        temperature=temperature,
        max_tokens=max_tokens,
        response_format={"type": "json_object"} # Important for structured output
    )
    end=time.time()
    print(f"time taken by call llm: {end-start}")
    return response.choices[0].message.content

@dataclass
class ProgramRequirements:
    objective: Optional[str] = None
    timeframe: Optional[str] = None
    difficulty_level: Optional[str] = None
    topics: Optional[str] = None

class AgentState(TypedDict):
    """Represents the state of the conversational agent."""
    messages: List[dict]
    requirements: ProgramRequirements
    validation_errors: List[str]
    step_completed: bool
    current_field: Optional[str]
    skipped_fields: List[str]
    topic_ids: Optional[List[str]]       
    topic_assets: Optional[List[dict]]
def start_node(state: AgentState,user_message: str) -> AgentState:
    start = time.time()
    state.update({
        "messages": [],
        "requirements": ProgramRequirements(),
        "validation_errors": [],
        "step_completed": False,
        "current_field": None,
        "skipped_fields": [],
        "topic_ids": None,
        "topic_assets": None,
    })
    # initial_input=input().strip()
    state['messages'].append({"role": "user", "content": user_message})
    end=time.time()
    print(f"time taken by start node: {end-start}")
    return state

def field_selector_node(state: AgentState) -> AgentState:
    # Determine next missing field, always include objective
    start = time.time()
    for field in ["objective", "timeframe", "difficulty_level", "topics"]:
        if getattr(state["requirements"], field) is None and field not in state["skipped_fields"]:
            next_field = field
            break
    else:
        state["current_field"] = None
        return state

    history = state["messages"].copy()
    system_prompt = """You are a professional program generation assistant helping gather detailed requirements from the user to generate a personalized learning program.

There are four key fields to collect:
1. 'objective' – What the user wants to achieve with the program (this is mandatory).
2. 'timeframe' – How long the user wants the program to last (e.g., number of weeks or months or flexible). This is optional, but only mark it as skipped if the user explicitly chooses to skip.
3. 'difficulty_level' – The desired difficulty of the program (e.g., beginner, intermediate, advanced). This is optional; if the user does not want to answer or skips it, default to 'medium'.
4. 'topics' – Any specific topics the user wants included. This is optional and can be skipped.

'Objective' must be collected explicitly from the user. For the remaining fields, ask the user appropriately but only skip if they explicitly state they want to skip.

Use the conversation history to frame your next question naturally and professionally."""

    user_prompt = f"""Conversation history so far: {json.dumps(history)}
 
We are now collecting information for the '{next_field}' field.
 
Based on the above conversation, generate a clear, context-aware, and helpful question to ask the user for this field.
Your question should be of Chatty conversation type. Greet the user if he is greeting.
 
Respond ONLY with a valid JSON in the following format:
{{
  "field": "<field>",
  "question": "<your generated question>"
}}"""

    response = call_llm(history + [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": user_prompt}
    ])
    result = json.loads(response)

    state["current_field"] = result["field"]
    # Do not allow skipping objective
    # skip = result.get("skip", False) and state["current_field"] != "objective"
    # if skip:
    #     state["skipped_fields"].append(next_field)
    question = result["question"]
    # Print the question so the user sees it
    print(f"{question}")
    state["messages"].append({"role": "assistant", "content": question})
    end = time.time()
    print(f"time taken by field selector:{end-start}")
    return state

def get_user_input(prompt: str) -> str:
    return input(f"{prompt}\nYour response: ").strip()

def field_collector_node(state: AgentState, user_input: str) -> AgentState:
    """
    Collects and validates user input for the current field.
    """
    field = state.get("current_field")
    if not field:
        # If no current_field, it means we are either done or in an unexpected state.
        # This node shouldn't be called without a current_field set by field_selector_node.
        # We can add a log or return state as is.
        print("Warning: field_collector_node called without a current_field.")
        return state

    # user_input is now passed directly from main.py
    # state["messages"].append({"role": "user", "content": user_input}) # Already added in main.py before calling this node
    
    system_prompt = """You are an intelligent assistant helping to validate user inputs for a learning program setup.

Your job is to:
1. Determine whether the user has provided a valid value for a given field.
2. Identify if the user intends to skip the field.
3. For the 'objective' field:
    - Never allow skipping.
    - If the user objective is clearly defined then Always return the value exactly as the user entered it else mark the input as invalid if objective is not defined.
4. For all other fields ('timeframe', 'difficulty_level', 'topics'):
    - If the user indicates they want to skip (e.g., "skip", "not sure", "don’t want to say"), return skip = true.
    - If the input is vague, incomplete, or invalid, return valid = false with a reason.
    - If the input is clear, clean it if needed and return valid = true.
5. Always respond in the following JSON format:
{
  "skip": <true|false>,
  "valid": <true|false>,
  "value": "<cleaned version of user input or original if valid>",
  "reason": "<brief reason if input is invalid>"
}
"""

    # Validate or skip based on user intent via LLM
    history = state["messages"].copy() # Use the updated history including the user's message
    validation_prompt = (
        f"Previous Q&A history: {json.dumps(history)}\n\n"
        f"You are validating input for the field: '{field}'.\n"
        f"User responded with: \"{user_input}\"\n\n"
        "Decide if they provided a valid value or intended to skip, and reply in the specified JSON format."
    )

    response_content = call_llm(history + [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": validation_prompt}
    ])
    
    try:
        result = json.loads(response_content)
    except json.JSONDecodeError:
        print(f"Error: LLM did not return valid JSON for field_collector_node. Response: {response_content}")
        state["validation_errors"].append(f"Invalid response format for '{field}'. Please try again.")
        state["step_completed"] = False # Indicate collection failed for this step
        return state

    # Apply skip only if not objective
    if result.get("skip") and field != "objective":
        state["skipped_fields"].append(field)
        setattr(state["requirements"], field, None) # Explicitly set to None if skipped
        state["step_completed"] = True
        state["validation_errors"] = [] # Clear any previous validation errors for this field
    elif result.get("valid"):
        setattr(state["requirements"], field, result.get("value"))
        state["step_completed"] = True
        state["validation_errors"] = [] # Clear errors if valid
    else:
        state["validation_errors"].append(result.get("reason", f"Invalid input for {field}."))
        state["step_completed"] = False # Indicate collection failed for this step
    
    return state
async def extract_topics_node(state: AgentState) -> AgentState:
    start=time.time()
    # Build prompt
    tools = await get_configured_tools()
    react_agent=create_react_agent(llama_model, tools,prompt="""
You are an intelligent AI agent responsible for understanding the user’s learning program requirement and identifying all relevant topics using vector search.
Your primary task is:
1. First make the query to be searched on vector search from the user requirement.
2. Strictly make sure that the query you are making is not none or irrelevant and should not contain any special character or brackets
3. Use the vector search tool to retrieve **all topics** that are semantically relevant to the user’s query or requirement.
Guidelines:
- Ensure **no relevant topic is missed**. Be exhaustive in your semantic search.
- **Do not summarize or filter** the topics — include **all exact results** from vector search.
- Output should be a **complete list** of all matching `TopicId`s only exactly same as returned by the vector search in JSON format.
- Do **not** attempt to use or call any other tool (e.g., Genie or SQL) — your sole role is to extract and return relevant `TopicId`s from vector search.

If vector search returns nothing, respond with:
> No matching topics found for the given input.
Make sure the Output contain a dictonary with key topicids

                           """,
                           response_format=TopicIDResponse)

    req=state["requirements"]
    user = f"""Objective: "{json.dumps(req.__dict__)}"
Return JSON: {{"topic_ids":[<all matching IDs>]}}."""
    # Call agent
    response = await react_agent.ainvoke(
        {"messages": user}
    )
    state["topic_ids"] = response['messages'][-1].content
    print(response['messages'][-1].content)
    end=time.time()
    print(f"time taken by extract topic:{end-start}")
    return state

async def fetch_assets_node(state: AgentState) -> AgentState:
    start=time.time()
    tools = await get_configured_tools()
    react_agent=create_react_agent(llama_model, tools,prompt="""
You are an AI agent with access to Genie tools for retrieving topic–asset relationships.
Your task:
1. Given a list of Topic IDs, fetch **all assets** associated with each Topic ID using the Genie tools.
take the below sql query for reference only 
```
SELECT
    t.TopicId,                 -- Unique identifier for the topic
    t.Name AS TopicName,       -- Display name of the topic 
    a.AssetId,                 -- Unique identifier for the associated asset
    a.Name AS AssetName        -- Display name of the asset
FROM Topic AS t
-- Join to link each topic with its related assets
INNER JOIN Topic_Category_Asset AS tca
    ON t.TopicId = tca.TopicId
    AND tca.Deleted = false    -- Only include active (non-deleted) topic-asset links
-- Join to retrieve asset details
INNER JOIN Asset AS a
    ON tca.AssetId = a.AssetId
-- Filter to only include specific topic IDs from the program JSON
WHERE t.TopicId IN (
    '46F2CFBA-F47D-4094-9EB1-08DC438C58DE',
    '51726D06-542C-44A0-A2C3-4200DDD9F32F',
    'FF7D2617-6B46-4E22-8252-674CF4535048',
    '524695EB-A38F-4CCD-3CC9-08DC68528327',
    'D67F21B2-7AB1-451B-A23A-D0003AF013CF'
)
-- Sort the results by TopicId for consistent ordering
ORDER BY t.TopicId;
```
Firsty list the spaces to get the space id "
give me the final result containing all the assets attached with the topics mentioned above in the proper structured manner.

                           """)
    
    ids = state["topic_ids"]
    user = f"""Topic IDs: {ids}
Use the Genie tools and return me the json of all the assets with there connected topics"""
    response = await react_agent.ainvoke(
        {"messages":user}
    )
    # assume resp.content is the JSON string
    resp=json.loads(response['messages'][-2].content)
    columns_info=resp['manifest']['schema']
    data=resp['result']['data_array']
    state["topic_assets"] = f"""Content for the program generation is defined below 
    schema of the columns of the content is ```{columns_info}```
    
    data:
    ```
    {data}
    ```
    
    """
    # print(state["topic_assets"])
    end=time.time()
    print(f"time taken by fetch assets node{end-start}")

    return state

def validate_requirements_node(state: AgentState) -> AgentState:
    start=time.time()
    missing = [f for f in ["objective","timeframe","difficulty_level","topics"]
               if getattr(state["requirements"], f) is None and f not in state["skipped_fields"]]
    state["validation_errors"] = missing
    end=time.time()
    print(f"time taken to validate : {end-start}")
    return state

# def generate_program_node(state: AgentState) -> AgentState:
#     req = state["requirements"]
#     content=state["topic_assets"]
#     system_prompt = """
# You are an expert curriculum designer.  
# Your job is to generate a **full, richly detailed learning program** using only the content provided.  
# - Do not shorten or omit any topic or asset information.  
# - Preserve all provided IDs and descriptions exactly as given.  
# - Order topics and assets logically.  
# - If the provided content doesn't support the user's requirements, respond:  
#   “Sorry, no content found which can fulfill your requirements.”
# Respond **only** with the final program JSON—no extra commentary.
# """

    
#     user_prompt = f"""
# User requirements: {json.dumps(req.__dict__)}  
# Available content: {json.dumps(content)}

# Your output must strictly follow this JSON schema:

# {{
#   "program_id": "<unique program ID>",
#   "title": "<program title>",
#   "description": "<brief program description>",
#   "duration_hours": <total hours as integer>,
#   "skills": [<list of skill strings>],
#   "program": [
#     {{
#       "topic_id": "<TopicId>",
#       "title": "<topic title>",
#       "description": "<topic description>",
#       "asset": [
#         {{
#           "asset_id": "<AssetId>",
#           "title": "<asset title>",
#           "description": "<asset description>"
#         }},
#         ...
#       ]
#     }},
#     ...
#   ]
# }}

# Generate a full program using the **entire relevant content**, ensuring:
# - All topics and assets which are relevant must be included (no skipping).  
# - IDs and descriptions remain unchanged.  
# - Topics and assets are ordered logically.  

# Return **only** the JSON.
# """


#     response = call_llm([
#         {"role": "system", "content": system_prompt},
#         {"role": "user", "content": user_prompt}
#     ], max_tokens=8192)

#     state["messages"].append({"role": "assistant", "content": response})
#     state["step_completed"] = True
#     return state

def decode_json(text):
    start=time.time()
    try:
        decoder = json.JSONDecoder()
        pos = 0
        json_objects = []
 
        while pos < len(text):
            try:
                obj, pos = decoder.raw_decode(text, pos)
                json_objects.append(obj)
            except json.JSONDecodeError:
                pos += 1
 
        if(json_objects!=[] and type(json_objects[0])!=dict):
            text = re.sub(r'```json|```', '', text)
            text = text.strip()
            text = text.replace('"', "'''")
            try:
                return [ast.literal_eval(text)]
            except Exception as e:
                return []
        end=time.time()
        print(f"time taken by decode json{end-start}")    
        return json_objects
    except Exception as e:

        return []

def call_llm_program(messages: List[dict], temperature: float = 0.3, max_tokens: int = 1000) -> str:
    start=time.time()
    response = client.chat.completions.create(
        model="databricks-llama-4-maverick",
        messages=messages,
        temperature=temperature,
        max_tokens=max_tokens,
        # response_format={"type": "json_object"}
        )
    # print(decode_json(response.choices[0].message.content))
    end=time.time()
    print(f"time taken by call llm program:{end-start}")
    return decode_json(response.choices[0].message.content)
    
def generate_program_node(state: AgentState) -> AgentState:
    
    req = state["requirements"]
    content=state["topic_assets"]
    system_prompt = """
You are an expert curriculum designer.  
Your job is to generate a **full, richly detailed learning program** using only the content provided.  
- Do not shorten or omit any topic or asset information.  
- Preserve all provided IDs and descriptions exactly as given.  
- Order topics and assets logically.  
- If the provided content doesn't support the user's requirements, respond:  
  “Sorry, no content found which can fulfill your requirements.”
Respond **only** with the final program JSON—no extra commentary.
"""

    
    user_prompt = f"""
User requirements: {json.dumps(req.__dict__)}  
Available content: {json.dumps(content)}

Your output must strictly follow this JSON schema:

{{
  "program_id": "<unique program ID>",
  "title": "<program title>",
  "description": "<brief program description>",
  "duration_hours": <total hours as integer>,
  "skills": [<list of skill strings>],
  "program": [
    {{
      "topic_id": "<TopicId>",
      "title": "<topic title>",
      "asset": [
        {{
          "asset_id": "<AssetId>",
          "title": "<asset title>",
        }},
        ...
      ]
    }},
    ...
  ]
}}

Generate a full program using the **entire relevant content**, ensuring:
- All topics and assets which are relevant must be included (no skipping).  
- IDs and descriptions remain unchanged.  
- Topics and assets are ordered logically.  

Return **only** the JSON.
"""


    response = call_llm_program([
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": user_prompt}
    ], max_tokens=8192)

    state["messages"].append({"role": "assistant", "content": response})
    state["step_completed"] = True
    return state

def should_continue_collection(state: AgentState) -> Literal["extract_topics", "field_selector"]:
    missing = [f for f in ["objective","timeframe","difficulty_level","topics"]
               if getattr(state["requirements"], f) is None and f not in state["skipped_fields"]]
    return "field_selector" if missing else "extract_topics"

def build_learning_program_graph() -> StateGraph:
    graph = StateGraph(AgentState)
    graph.add_node("start", start_node)
    graph.add_node("field_selector", field_selector_node)
    graph.add_node("field_collector", field_collector_node)
    graph.add_node("validate_requirements", validate_requirements_node)
    graph.add_node("extract_topics", extract_topics_node)
    graph.add_node("fetch_assets", fetch_assets_node)
    graph.add_node("generate_program", generate_program_node)

    graph.set_entry_point("start")
    graph.add_edge("start", "field_selector")
    graph.add_edge("field_selector", "field_collector")
    graph.add_edge("field_collector", "validate_requirements")
    graph.add_conditional_edges(
        "validate_requirements",
        should_continue_collection,
        {"extract_topics": "extract_topics", "field_selector": "field_selector"}
    )
    graph.add_edge("extract_topics", "fetch_assets")
    graph.add_edge("fetch_assets", "generate_program")
    graph.add_edge("generate_program", END)
    return graph


graph = build_learning_program_graph()
compiled_graph = graph.compile()

initial_state: AgentState = {
    "messages": [],
    "requirements": ProgramRequirements(),
    "validation_errors": [],
    "step_completed": False,
    "current_field": None,
    "skipped_fields": []
}

# final_state = compiled_graph.ainvoke(initial_state,{"recursion_limit": 100})