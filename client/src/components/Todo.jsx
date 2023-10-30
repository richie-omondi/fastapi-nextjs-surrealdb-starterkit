"use client";
import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const TodoPage = () => {
    const [inputValue, setInputValue] = useState('');

    const [todos, setTodos] = useState([]);

    const [editId, setEditId] = useState(null);

    const [editValue, setEditValue] = useState('');
    
    const [isLoading, setIsLoading] = useState(false)
    
    // Function to fetch todos from the backend and update state
    const fetchTodos = async () => {
        setIsLoading(true)

        try {
            const response = await fetch('http://127.0.0.1:80/mytodos'); 

            const data = await response.json();

            setTodos(data.todos);

            setIsLoading(false)

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

        var today = new Date();

        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        var get_total_seconds = (today.getHours() * 60 * 60) + (today.getMinutes() * 60) + (today.getSeconds())

        console.log(inputValue)

        setIsLoading(true)

        if(inputValue === "") {
            alert("Please Add a Valid Todo!!")
            setIsLoading(false)
        }

        else if(inputValue.trim() !== '') {
            // Send a POST request to add a new todo
            try {
                const response = await fetch('http://127.0.0.1:80/addTodo', { 
                    method: 'POST',

                    headers: {
                        'Content-Type': 'application/json'
                    },

                    body: JSON.stringify({ title: inputValue, created_at : get_total_seconds })

                });
                setInputValue(''); // Clear the input field

                fetchTodos()

            } catch (error) {
                console.error("Error adding todo:", error);

                alert("Error adding todo :", error)

            }
        }
    };


    // Function to delete a todo
    const handleDelete = async (id) => {
        console.log("Delete Todo with ID : ", id)

        setIsLoading(true)

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
            alert("Error deleting todo :", error)
            console.error("Error deleting todo:", error);
            
        }
    };


    // Function to edit a todo
    const handleEdit = async (id, newTitle) => {
        console.log(id, newTitle)
        setIsLoading(true)
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
                alert("Error editing todo :", error)
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
                alert("Error editing todo :", error)
                console.error("Error editing todo:", error);
            }
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen ">
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-bl from-indigo-800 via-fuchsia-500 to-rose-500 text-center mb-2">Surreal Todo App</h1>
            <div className="w-100 bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-rose-500  rounded-lg shadow-md border border-gray-300 p-4 overflow-scroll no-scrollbar min-h-[500px] max-h-[700] shadow-gray-700">
                <form onSubmit={handleSubmit} className="mb-4">

                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Enter a task..."
                        className="border border-gray-400 rounded py-2 px-4 mr-2 text-black shadow-sm shadow-black outline-none"
                        
                    />
                    
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-500 transition-all ease-in-out shadow-sm shadow-black hover:shadow-md">Add Todo</button>
                </form>


                {isLoading ? (
                <div className='flex justify-center items-center '>
                    <CircularProgress color="inherit" size={70}/>
                </div>
                
    ) :
                (<ul className=''>
                    {todos.map((todo) => (
                        <li key={todo.created_at} className="bg-white rounded-lg shadow-md p-4 mb-2 flex justify-between font-bold items-center">
                            {editId === todo.id ? (
                                <form onSubmit={(event) => handleEditSubmit(event, todo.id)}>
                                    <input
                                        type="text"
                                        value={editValue}
                                        onChange={handleEditInputChange}
                                        placeholder="Enter a new task..."
                                        className="border border-gray-400 rounded py-2 px-4 mr-2 text-black outline-none font-semibold"
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
                            )
                            
                            }
                        </li>
                    ))}
                </ul>) 
                }


            </div>
        </div>
    );
}

export default TodoPage;
