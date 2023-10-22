"use client"

import React, { useState } from 'react';

const Todo = () => {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-3xl font-bold mb-8">Surreal Todo App</h1>
            <div className="w-100 bg-gradient-to-r from-pink-300 to-purple-400 rounded-lg shadow-md border border-gray-300 p-4 no-scrollbar min-h-[500px] shadow-gray-700" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                <form onSubmit={handleSubmit} className="mb-4">
                    <input type="text" value={inputValue} onChange={handleInputChange} placeholder='Enter a task...' className="border border-gray-400 rounded py-2 px-4 mr-2 text-black shadow-sm shadow-black" />
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-500 transition-all ease-in-out shadow-sm shadow-black hover:shadow-md">Add Todo</button>
                </form>
                <ul className="list-disc w-full">
                    {todos.map((todo, index) => (
                        <li key={index} className="flex justify-between items-center py-2 px-4 my-2 rounded-lg shadow-xl bg-gradient-to-r from-purple-600 to-purple-800 text-white">
                            <span className="text-lg font-medium">{todo}</span>
                            <button onClick={() => handleDelete(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded duration-500 transition-all ease-in-out">Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todo;

