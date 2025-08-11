import React, { useState } from 'react'

function Hero() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const handleAdd = () => {
        if (input.trim() !== '') {
            setTodos([...todos, input]);
            setInput('');
        }
    }

    const handleDelete = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    }

    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-md mx-auto bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-xl border border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Todo List</h2>
                <div className="flex gap-4 mb-6">
                    <input 
                        type="text" 
                        placeholder='Enter your task'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
                        className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <button 
                        onClick={handleAdd}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                    >
                        ADD
                    </button>
                </div>
                <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    <ul>
                        {todos.map((todo, index) => (
                            <li 
                                key={index}
                                className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-blue-500"
                            >
                                <span className='text-gray-700 font-medium'>{todo}</span>
                                <button 
                                    onClick={() => handleDelete(index)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all duration-300 hover:shadow-md"
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hero;