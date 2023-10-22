""" This module demonstrates how to create a FastAPI App,
connect it to SurrealDB
"""
from surrealdb import Surreal
from contextlib import asynccontextmanager
from fastapi import FastAPI

app = FastAPI()

@asynccontextmanager
async def surreal_db():
    """
    Function that connects to a local database endpoint,
    signs this connection in to a specific authentication scope,
    and switches to a specific namespace and database
    """
    db = Surreal("http://localhost:8000")
    db.connect()
    await db.signin({"user": "root", "pass": "root"})
    await db.use("starter", "todo_backend")
    try:
        yield db
    finally:
        db.close()

@app.get("/", tags=["Root"])
async def read_root():
    return {"message": "Welcome to this fantastic app!"}
