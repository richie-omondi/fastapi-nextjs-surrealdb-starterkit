# Starter kit for NextJS + FastAPI + SurrealDB App

This repo provides a starter kit for building applications with [NextJS](https://nextjs.org/) + [FastAPI](https://fastapi.tiangolo.com/) with [SurrealDB](https://surrealdb.com/). It sets up the frontend and backend of building a simple CRUD Todo App with SurrealDB as the database.

## Frontend Preview

![Frontend Image](https://res.cloudinary.com/dza2rilni/image/upload/v1698238371/vikjfyjnsbex3hlu8ebq.png)

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
git clone richie-omondi/fastapi-nextjs-surrealdb-starterkit.git
```

2. Setup the backend.

Go into to the `/backend` directory and follow the instructions in the [README](./backend/README.md) to set up the Surreal database client, install all the required dependencies, and start the FastAPI server.
 
https://github.com/richie-omondi/fastapi-nextjs-surrealdb-starterkit/assets/97223188/bb9402fa-018c-4e03-87d3-f4e300c86b8b


3. Setup Surreal in Windows Powershell

https://github.com/richie-omondi/fastapi-nextjs-surrealdb-starterkit/assets/97223188/8c238d35-f57d-4f2a-97b2-7e6ac7f8706d


4. Setup the frontend.

Go into the `/client` directory and follow the instructions in the [README](./client/README.md) to setup a Next.js project using `npm install` then run the development server using `npm run dev`.

https://github.com/richie-omondi/fastapi-nextjs-surrealdb-starterkit/assets/97223188/f9641d40-c7cd-4a2d-bb60-47fe41abda94




## Contributing

If you find any issues or have suggestions for improvements, please feel free to open an issue or create a pull request. Our next priority is to set up middleware for authentication and authorization.

### Steps to Contribute 
* Clone this repo - `git clone richie-omondi/fastapi-nextjs-surrealdb-starterkit.git`
* Follow the Backend Setup from [here](./backend/README.md)
* Follow the Frontend Setup from [here](./client/README.md)
