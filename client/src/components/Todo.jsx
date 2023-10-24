"use client";
import React, { useState, useEffect } from 'react';

const TodoPage = () => {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(null);
    const [editValue, setEditValue] = useState('');
    
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

    // Fetch todos from the backend when the component loads
    useEffect(() => {
        fetchTodos();
    }, []);


    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };



    const handleEditInputChange = (event) => {
        setEditValue(event.target.value);
    };

    // Function to add a new todo
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
                    body: JSON.stringify({ title: inputValue })
                });
                setInputValue(''); // Clear the input field
                fetchTodos()
            } catch (error) {
                console.error("Error adding todo:", error);
            }
        }
    };


    // Function to delete a todo
    const handleDelete = async (id) => {
        console.log(id)
        try {
            const response = await fetch('http://127.0.0.1:80/deleteTodo', { 
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ toDelete : id })
                });
            
            fetchTodos()
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };


    // Function to edit a todo
    const handleEdit = async (id, newTitle) => {
        console.log(id, newTitle)
        try {
            const response = await fetch('http://127.0.0.1:80/editTodo', { 
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id: id, newTitle: newTitle })
                });
                fetchTodos()
            } catch (error) {
                console.error("Error editing todo:", error);
            }
        };
        

        // Function to submit the edited todo
        const handleEditSubmit = async (event, id) => {
            event.preventDefault();
            console.log(editValue)
            if (editValue.trim() !== '') {
                // Send a POST request to edit the todo
                try {
                    handleEdit(id, editValue);
                    setEditId(null); // Clear the edit state
                    setEditValue(''); // Clear the input field
                    fetchTodos()
            } catch (error) {
                console.error("Error editing todo:", error);
            }
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
                        <li key={todo.length + 1} className="bg-white rounded-lg shadow-md p-4 mb-2 flex justify-between">
                            {editId === todo.id ? (
                                <form onSubmit={(event) => handleEditSubmit(event, todo.id)}>
                                    <input
                                        type="text"
                                        value={editValue}
                                        onChange={handleEditInputChange}
                                        placeholder="Enter a new task..."
                                        className="border border-gray-400 rounded py-2 px-4 mr-2 text-black shadow-sm shadow-black"
                                    />
                                    <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded duration-500 transition-all ease-in-out shadow-sm shadow-black hover:shadow-md">Save</button>
                                    <button onClick={() => setEditId(todo.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded duration-500 transition-all ease-in-out shadow-sm shadow-black hover:shadow-md ml-2">Cancel</button>
                                </form>
                            ) : (
                                <>
                                    {todo.title}
                                    <div>
                                        <button onClick={() => setEditId(todo.id)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded duration-500 transition-all ease-in-out shadow-sm shadow-black hover:shadow-md">Edit</button>
                                        <button onClick={() => handleDelete(todo.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded duration-500 transition-all ease-in-out shadow-sm shadow-black hover:shadow-md ml-2">Delete</button>
                                    </div>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TodoPage;