import { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { fetchTodos, createTodo, updateTodo, deleteTodo } from "../utils/api";
import { v4 as uuidv4 } from "uuid";
import {
  getTodosFromLocalStorage,
  saveTodosToLocalStorage,
} from "../utils/localStorage";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const loadTodos = async () => {
      const todos = await fetchTodos();
      setTodos(todos);
    };
    loadTodos();

    // Apply dark mode class on mount if darkMode is true
    if (darkMode) {
      document.documentElement.classList.add("dark");
    }
  }, [darkMode]);

  
   const addTodo = async (todo) => {
     const newTodo = await createTodo(todo); // Create and save the todo
     setTodos((prevTodos) => [newTodo, ...prevTodos]); // Add the new todo to the existing list
   };

    const handleUpdateTodo = async (id, updatedTodo) => {
      const updated = await updateTodo(id, updatedTodo); // Update in API
      const todos = getTodosFromLocalStorage(); // Update localStorage
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? updated : todo
      );
      saveTodosToLocalStorage(updatedTodos);
      setTodos(updatedTodos); // Update state with the latest list
    };

   const handleDeleteTodo = async (id) => {
     await deleteTodo(id); // Remove from API
     const todos = getTodosFromLocalStorage(); // Update localStorage
     const updatedTodos = todos.filter((todo) => todo.id !== id);
     saveTodosToLocalStorage(updatedTodos);
     setTodos(updatedTodos); // Update state with the latest list
   };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } min-h-screen bg-gray-200 dark:bg-gray-900`}
    >
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-950 dark:text-white">
            Todo List
          </h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white rounded flex items-center"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>
        </div>
        <TodoForm
          onSubmit={addTodo}
          className="text-gray-950 dark:text-gray-200 mb-4"
        />
        <div className="mt-4 space-y-4">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={handleDeleteTodo}
              onUpdate={handleUpdateTodo}
              className="text-gray-950 dark:text-gray-200"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
