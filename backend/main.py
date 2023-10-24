"""
This module demonstrates how to create a FastAPI App,
connect it to SurrealDB, and implement routes using FastAPI
"""
from surrealdb import Surreal
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

SURREAL_CONNECTION_URL = "ws://localhost:8000/rpc"


async def create_db(id, title, description):
    """
    Function that connects to a local database endpoint,
    switches to a specific namespace and database,
    and creates a table with fields
    """
    async with Surreal(SURREAL_CONNECTION_URL) as db:
        await db.use("starter", "todos")
        await db.create(
            "todos",
            {
                "id": id,
                "title": title,
                "description": description
            }
        )


class Todo(BaseModel):
    """
    Class that inherits from the Pydantic BaseModel
    and defines the structure of the JSON payload that will
    be received by the /addTodo endpoint.

    Attribute:
        id: Unique identifier of the todo item
        title (str): Title of the task to be done
        description: Short description of the task to be done
    """
    id: int
    title: str
    description: str


@app.get("/", tags=["Root"])
async def home():
    """
    Route that returns a welcome message when the root URL
    is accessed
    """
    return {"message": "Welcome to this fantastic app!"}


@app.post("/addTodo", tags=["Todos"])
async def create_todo(todo: Todo):
    """
    Route that receives a POST request with a JSON payload
    containing an id, title, and description,
    and stores it in the SurrealDB database
    """
    await create_db(todo.id, todo.title, todo.description)
    return {"To do task added succesfully! "}


@app.get("/mytodos", tags=["Todos"])
async def get_todos():
    """
    Route that sends a GET request that fetches all the To Do
    tasks stored in the SurrealDB database
    """
    async with Surreal(SURREAL_CONNECTION_URL) as db:
        await db.use("starter", "todos")
        todos = await db.query("select * from todos")
        return {"todos": todos}
