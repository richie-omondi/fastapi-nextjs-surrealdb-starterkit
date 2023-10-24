"use client";
import React, { useState, useEffect } from 'react';

const TodoPage = () => {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // Function to fetch todos from the backend and update state
        const fetchTodos = async () => {
            try {
                const response = await fetch('http://127.0.0.1:80/mytodos'); 
                const data = await response.json();
                setTodos(data.todos);
            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        };
        fetchTodos(); // Initial fetch when the component loads
    }, [todos]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(inputValue)
        if (inputValue.trim() !== '') {
            // Send a POST request to add a new todo
            try {
                const response = await fetch('http://127.0.0.1:80/addTodo', { 
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id: todos.length + 1 ,title: inputValue })
                });
                // const data = await response.json();
                // // Update the local state with the newly added todo
                // setTodos([...todos, data.todo]);
                setInputValue(''); // Clear the input field
            } catch (error) {
                console.error("Error adding todo:", error);
            }
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://127.0.0.1:80/deleteTodo/${id}`, {
                method: 'DELETE',
            });
            // setTodos(todos.filter(todo => todo.id !== id)); // Remove the deleted todo from the state
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen ">
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-bl from-indigo-800 via-fuchsia-500 to-rose-500 text-center mb-2">Surreal Todo App</h1>
            <div className="w-100 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-rose-500  rounded-lg shadow-md border border-gray-300 p-4 no-scrollbar min-h-[500px] shadow-gray-700">
                <form onSubmit={handleSubmit} className="mb-4">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Enter a task..."
                        className="border border-gray-400 rounded py-2 px-4 mr-2 text-black shadow-sm shadow-black"
                        
                    />
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-500 transition-all ease-in-out shadow-sm shadow-black hover:shadow-md">Add Todo</button>
                </form>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id} className="bg-white rounded-lg shadow-md p-4 mb-2 flex justify-between">
                            {todo.title}
                            <button onClick={() => handleDelete(todo.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded duration-500 transition-all ease-in-out shadow-sm shadow-black hover:shadow-md ml-2">Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TodoPage;
