""" This module demonstrates how to create a FastAPI App,
connect it to SurrealDB
"""
from surrealdb import Surreal
from contextlib import asynccontextmanager
from fastapi import FastAPI

@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    Function that connects to a local database endpont,
    signs this connection in to a specific authentication scope,
    and switches to a specific namespace and database
    """
    
    db = Surreal("http://localhost:8000")
    await db.connect();
    await db.signin({"user": "root", "pass": "root"})
    await db.use("starter", "todo_backend")
    yield
    db.close();

app = FastAPI(lifespan=lifespan)

@app.get("/", tags=["Root"])
async def read_root():
    return {"message": "Welcome to this fantastic app!"}
