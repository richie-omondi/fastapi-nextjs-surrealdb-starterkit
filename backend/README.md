# FastAPI and SurrealDB Backend Boilerplate

A simple starter kit for building RESTful APIs with FastAPI and SurrealDB

## Features

+ Python FastAPI backend.
+ SurrealDB database.

## Backend setup

https://github.com/richie-omondi/fastapi-nextjs-surrealdb-starterkit/assets/97223188/f99ed092-4678-48d5-b7d8-96b6e2555c1d

https://github.com/richie-omondi/fastapi-nextjs-surrealdb-starterkit/assets/97223188/77cc7f7a-da74-4b0d-bb3a-8d1bc2c168c4

To set up the backend, follow the outlined steps:

## Setup Surreal Locally

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

## Setup FastAPI Backend

### Creating a virtual environment in /backend:

1. Switch to the `/backend` directory
```
cd backend
```
2. Create a Virtual Environment in the directory

```console
python -m venv venv
```
3. Activate the Virtual Environment 

* if you are using `Git Bash` : 

```console
source venv/Scripts/activate
```
* Else : 
```console
source venv/bin/activate
```

In case of any other issue in Activating the Virtual Environment, refer to [this](https://stackoverflow.com/questions/8921188/issue-with-virtualenv-cannot-activate) StackOverFlow Answer.

4. Install the modules listed in the `requirements.txt` file:

```console
(venv)$ pip3 install -r requirements.txt
```

### Running the Server :

```console
uvicorn main:app --port 80 --reload
```

The starter listens on port 80 on address [localhost:80](http://localhost:80). Make sure to add the Port flag as `80` for the FastAPI backend. By default uvicorn loads on `port :8000`.
