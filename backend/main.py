""" This module demonstrates how to create a FastAPI App,
connect it to SurrealDB, and implement routes using FastAPI
"""
from surrealdb import Surreal
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

SURREAL_CONNECTION_URL = "ws://localhost:8000/rpc"


async def add_todo_in_surreal_db(todoTitle):
    """
    Function that connects to a local database endpoint
    and switches to a specific namespace and database
    """
    async with Surreal(SURREAL_CONNECTION_URL) as db:
        await db.use("starter", "todos")

        await db.create(
            "todos",
            {
                "title": todoTitle
            }
        )


class TodoCreateRequest(BaseModel):
    """ Class that inherits from the Pydantic BaseModel
    and defines the structure of the JSON payload that will
    be received by the /addTodo endpoint.

    Attribute:
        title (str): Short description of the task to be done
    """
    title: str


@app.get("/", tags=["Root"])
async def read_root():
    """Route that returns a welcome message when the root URL
    is accessed
    """
    return {"message": "Welcome to this fantastic app!"}


@app.post("/addTodo", tags=["Todos"])
async def create_todo(todo_create_request: TodoCreateRequest):
    """
    Route that receives a POST request with a JSON payload
    containing a "title" field, and stores it in the SurrealDB database
    """
    await add_todo_in_surreal_db(todo_create_request.title)

    return {"message": "Todo created successfully!"}


