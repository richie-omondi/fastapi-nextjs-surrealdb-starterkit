# FastAPI and SurrealDB Backend Boilerplate

A simple starter kit for building RESTful APIs with FastAPI and SurrealDB

## Features

+ Python FastAPI backend.
+ SurrealDB database.

## Backend setup

To set up the backend, follow the outlined steps:

1. Ensure you have [installed](https://surrealdb.com/docs/installation) SurrealDB depending on the OS you are using (Linux, MacOS or Windows).

2. Check that you have set up the database correctly. To do so, run:

```console
surreal version
```

3. Start the SurrealDB database server using the command:

    On Windows

```console
surreal.exe start
```

    On MacOS

```console
surreal start
```

This will start an in-memory database server that will lose data when the server is restarted. However, you will have quicker data access times than when you read and write from disk.

4. Clone this repository and create a virtual environment in it:

```console
python -m venv venv
```

5. Install the modules listed in the `requirements.txt` file:

```console
(venv)$ pip3 install -r backend/requirements.txt
```

6. Start the application:

```console
uvicorn backend.main:app --port 80 --reload
```

The starter listens on port 8000 on address [0.0.0.0](0.0.0.0:80).
