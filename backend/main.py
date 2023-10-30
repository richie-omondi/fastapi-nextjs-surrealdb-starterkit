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


async def create_db(title, created_at):
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
                "title": title,
                "created_at" : created_at
            }
        )


class Todo(BaseModel):
    """
    Class that inherits from the Pydantic BaseModel
    and defines the structure of the JSON payload that will
    be received by the /addTodo endpoint.
    Attribute:
        title (str): Title of the task to be done
    """

    title: str
    created_at : str
    


class DeleteTodoRequest(BaseModel):
    """
    Class that inherits from the Pydantic BaseModel
    and defines the structure of the JSON payload that will
    be received by the /deleteTodo endpoint.
    Attribute:
        toDelete: string representing the id to be deleted
    """
    toDelete: str


class EditTodoRequest(BaseModel):
    """
    Class that inherits from the Pydantic BaseModel
    and defines the structure of the JSON payload that will
    be received by the /editTodo endpoint.
    Attribute:
        id: Unique identifier of the todo item to be edited
        newTitle: New title of the todo item
    """
    id: str
    newTitle: str


@app.get("/", tags=["Root"])
async def home():
    """
    Route that returns a welcome message when the root URL
    is accessed
    """
    return {"message": "Welcome to this fantastic app!"}


@app.post("/addTodo", tags=["Todos"])
async def add_todo(todo: Todo):
    """
    Route that receives a POST request with a JSON payload
    containing the task, and stores it in the SurrealDB database
    """
    print(todo.created_at)
    await create_db(todo.title, todo.created_at)
    return {"To do task added succesfully! "}


@app.get("/mytodos", tags=["Todos"])
async def get_todos():
    """
    Route that sends a GET request that fetches all the To Do
    tasks stored in the SurrealDB database
    """
    async with Surreal(SURREAL_CONNECTION_URL) as db:
        await db.use("starter", "todos")
        todos = await db.select("todos")
        sorted_todos = sorted(todos, key=lambda k: k['created_at'])
        print(sorted_todos)
        return {"todos": sorted_todos}


@app.post("/deleteTodo", tags=["Todos"])
async def delete_todo(req: DeleteTodoRequest):
    """
    Route that receives a DELETE request with an id parameter
    and deletes the corresponding To Do task from the SurrealDB database
    """
    id = req.toDelete
    async with Surreal(SURREAL_CONNECTION_URL) as db:
        await db.use("starter", "todos")
        await db.query(f"DELETE {id}")
        return {"message": f"To do task with id {id} deleted successfully!"}


@app.post("/editTodo", tags=["Todos"])
async def edit_todo(req: EditTodoRequest):
    """
    Route that receives a POST request with an id parameter
    and newTitle parameter and updates the corresponding To Do task
    in the SurrealDB database
    """
    id = req.id
    new_title = req.newTitle
    async with Surreal(SURREAL_CONNECTION_URL) as db:
        await db.use("starter", "todos")
        await db.query(f"UPDATE todos SET title='{new_title}' where id='{id}'")
        return {"message": f"To do task with id {id} updated successfully!"}
