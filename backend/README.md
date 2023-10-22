# FastAPI and SurrealDB Backend Boilerplate

A simple starter kit for building RESTful APIs with FastAPI and SurrealDB

## Features

+ Python FastAPI backend.
+ SurrealDB database.

## Backend setup

To set up the backend, follow the outlined steps:

1. Clone this repository and create a virtual environment in it:

```console
python -m venv venv
```

2. Install the modules listed in the `requirements.txt` file:

```console
(venv)$ pip3 install -r backend/requirements.txt
```

3. Start the application:

```console
uvicorn backend.main:app --reload
```

The starter listens on port 8000 on address [0.0.0.0](0.0.0.0:8080).
