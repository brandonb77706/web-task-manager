import axios from "axios";

// Base API URL for all todo-related requests
const API_URL = "http://localhost:8000/api/todos";

// Fetches all todo items from the server

export const fetchTodos = async () => {
  try {
    // Make GET request to fetch all todos
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch todos: ", error);
    throw error; // Re-throw to allow caller to handle the error
  }
};

// Creates a new todo item on the server

export const addTodo = async (todo) => {
  try {
    // Handle both string inputs and object inputs
    // If a string is provided, convert it to a todo object with just text property
    const todoData = typeof todo === "string" ? { text: todo } : todo;

    console.log("Sending data to server:", todoData);
    // Make POST request to create a new todo
    const response = await axios.post(API_URL, todoData);
    return response.data;
  } catch (error) {
    console.error("Failed to add todo: ", error);
    throw error; // Re-throw to allow caller to handle the error
  }
};

//Updates an existing todo item on the server

export const updateTodo = async (id, updatedTodo) => {
  try {
    // Make PUT request to update the specified todo
    const response = await axios.put(`${API_URL}/${id}`, updatedTodo);
    return response.data;
  } catch (error) {
    console.error("Failed to update todo: ", error);
    throw error; // Re-throw to allow caller to handle the error
  }
};

//Deletes a todo item from the server

export const deleteTodo = async (id) => {
  try {
    // Make DELETE request to remove the specified todo
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to delete todo: ", error);
    throw error; // Re-throw to allow caller to handle the error
  }
};
