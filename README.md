# Starter kit for NextJS + FastAPI + SurrealDB App

This repo provides a starter kit for building applications with [NextJS](https://nextjs.org/) + [FastAPI](https://fastapi.tiangolo.com/) with [SurrealDB](https://surrealdb.com/). It sets up the frontend and backend of building a simple CRUD Todo App with SurrealDB as the database.

## Technologies Used

* [FastAPI](https://fastapi.tiangolo.com/) - Design and build REST APIs for your application in Python.
* [NextJS](https://nextjs.org/) - A React framework, used to create interactive and dynamic user interfaces.
* [Tailwind](https://tailwindcss.com/):  A CSS framework used to style applications.
* [SurrealDB](https://surrealdb.com/) - A multi-model cloud database providing the traditional database/backend layer for our database operations which you can connect your backend to.

This starter kit implements the following endpoints:

* `POST '/addTodo'` - create new Todo task and store it in the SurrealDB database.
* `GET '/mytodos'` - fetches all Todo tasks from the SurrealDB database.
* `GET '/'` - Returns to home/root URL.
* `POST '/editTodo'` - update/edit a Todo task.
* `POST '/deleteTodo'` - deletes a Todo task from the SurrealDB database.

## Requirements

* Ensure you have [SurrealDB](https://surrealdb.com/docs/installation) installed depending on your OS (Linux, MacOS or Windows).
* [Python 3.11.x](https://www.python.org/downloads/).
* [Node.js](https://nodejs.org/en/download) > v18

## Getting Started

1. Clone the repository

```console
git clone git@github.com:richie-omondi/fastapi-nextjs-surrealdb-starterkit.git
```

2. Setup the backend.

Go into to the `/backend` directory and follow the instructions in the `README` to set up the Surreal database client, install all the required dependencies, and start the FastAPI server.

2. Setup the frontend.

Go into the `/client` directory and follow the instructions in the `README` to setup a Next.js project using `create-next-app` then run the development server using `npm run dev`.

## Contributing

If you find any issues or have suggestions for improvements, please feel free to open an issue or create a pull request. Our next priority is to set up middleware for authentication and authorization.
