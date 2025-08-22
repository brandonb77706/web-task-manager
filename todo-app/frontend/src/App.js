import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { fetchTodos, addTodo, updateTodo, deleteTodo } from "./services/api";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Gets todo items
  useEffect(() => {
    const getTodos = async () => {
      try {
        const data = await fetchTodos();
        setTodos(data || []);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching todos:", err);
        setError("Failed to load tasks");
        setLoading(false);
      }
    };

    getTodos();
  }, []);

  //Adds todo item
  const handleAddTodo = async (todoData) => {
    try {
      setError(null);
      const newTodo = await addTodo(todoData);
      setTodos([...todos, newTodo]);
    } catch (err) {
      console.error("Error adding todo:", err);
      setError("Failed to add task");
    }
  };
  //Handles toggle for todo item
  const handleToggleTodo = async (id) => {
    try {
      const todoToToggle = todos.find((todo) => todo._id === id);
      if (!todoToToggle) return;

      const updatedTodo = await updateTodo(id, {
        completed: !todoToToggle.completed,
      });

      setTodos(todos.map((todo) => (todo._id === id ? updatedTodo : todo)));
    } catch (err) {
      console.error("Error toggling todo:", err);
      setError("Failed to update task");
    }
  };
  //Handles deltion of todo item
  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (err) {
      console.error("Error deleting todo:", err);
      setError("Failed to delete task");
    }
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <p className="app-description">
        Keep track of your daily tasks and boost your productivity
      </p>

      <TodoForm addTodo={handleAddTodo} />

      {error && <div className="error">{error}</div>}

      {loading ? (
        <div className="loading">Loading your tasks...</div>
      ) : (
        <TodoList
          todos={todos}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
        />
      )}
    </div>
  );
}

export default App;
