"""
This module demonstrates how to create a FastAPI App,
connect it to SurrealDB, and implement routes using FastAPI
"""
from surrealdb import Surreal
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

SURREAL_CONNECTION_URL = "ws://localhost:8000/rpc"


class Todo(BaseModel):
    """
    Class that inherits from the Pydantic BaseModel
    and defines the structure of the JSON payload that will
    be received by the /addTodo endpoint.

    Attributes:
        id (int): Unique identifier for the to do item
        task (str): Task to be done
    """
    id: int
    task: str


@app.get("/", tags=["Root"])
async def home():
    """
    Route that returns a welcome message when the root URL
    is accessed
    """
    return {"message": "Welcome to this fantastic app!"}


async def create_db(id, task):
    """
    Function that connects to a local database endpoint,
    switches to a specific namespace and database,
    and creates a table with one field
    """
    async with Surreal(SURREAL_CONNECTION_URL) as db:
        await db.use("starter", "todos")
        await db.create(
            "tasks",
            {
                "id": id,
                "task": task
            }
        )


@app.post("/addTodo", tags=["Todos"])
async def add_todo(todo: Todo):
    """
    Route that receives a POST request with a JSON payload
    containing the task, and stores it in the SurrealDB database
    """
    await create_db(todo.id, todo.task)
    return {"To do task added succesfully! "}


@app.get("/mytodos", tags=["Todos"])
async def get_todos():
    """
    Route that sends a GET request that fetches all the To Do
    tasks stored in the SurrealDB database
    """
    async with Surreal(SURREAL_CONNECTION_URL) as db:
        await db.use("starter", "todos")
        todos = await db.query("select task from tasks")
        return {"todos": todos}


async def update_todo(id, new_task):
    async with Surreal(SURREAL_CONNECTION_URL) as db:
        await db.use("starter", "todos")
        update_query = f"update tasks set task = '{new_task}' where id = '{id}'"
        await db.query(update_query)

@app.put("/update_todos", tags=["Todos"])
async def update_todos(todo: Todo):
    todos = await update_todo(todo.id, todo.task)
    return {"todos": todos}


@app.delete("/delete_todos/", tags=["Todos"])
async def delete_todo(id):
    async with Surreal(SURREAL_CONNECTION_URL) as db:
        await db.use("starter", "todos")
        delete_query = f"delete from tasks where id = '{id}'"
        await db.query(delete_query)
        return {"Task deleted successfully"}