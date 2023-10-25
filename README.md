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

Go into to the `/backend` directory and follow the instructions in the `README` to set up the Surreal database client, install all the required dependencies, and start the FastAPI server.
 

<video width="630" height="300" src="https://res.cloudinary.com/dza2rilni/video/upload/v1698237888/cbyzitcejkxmu0mkirxn.mp4"></video>

3. Setup Surreal in Windows Powershell

<video width="630" height="300" src="https://res.cloudinary.com/dza2rilni/video/upload/v1698237888/a7fjhqpheu2iuuojzidu.mp4"></video>
<video width="630" height="300" src="https://res.cloudinary.com/dza2rilni/video/upload/v1698237888/cbyzitcejkxmu0mkirxn.mp4"></video>

3. Setup Surreal in Windows Powershell

<video width="630" height="300" src="https://res.cloudinary.com/dza2rilni/video/upload/v1698237888/a7fjhqpheu2iuuojzidu.mp4"></video>

4. Setup the frontend.

Go into the `/client` directory and follow the instructions in the `README` to setup a Next.js project using `npm install` then run the development server using `npm run dev`.

<video width="630" height="300" src="https://res.cloudinary.com/dza2rilni/video/upload/v1698237888/j3uhcysezktyxrmth79b.mp4"></video>

## Contributing

If you find any issues or have suggestions for improvements, please feel free to open an issue or create a pull request. Our next priority is to set up middleware for authentication and authorization.

### Steps to Contribute 
* Clone this repo - `git clone richie-omondi/fastapi-nextjs-surrealdb-starterkit.git`
* Follow the Backend Setup from [here](./backend/README.md)
* Follow the Frontend Setup from [here](./client/README.md)
