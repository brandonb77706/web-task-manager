import React, { useState } from "react";
import "./TodoForm.css";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  //Handles submit for adding task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo({
        text: title,
        description: description.trim() || "",
        dueDate: dueDate || null,
      });
      setTitle("");
      setDescription("");
      setDueDate("");
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="todo-form-container">
      <form onSubmit={handleSubmit} className="todo-form">
        <div className="form-row">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a new task"
            className="title-input"
            required
          />
          <button type="submit" className="submit-btn">
            Add Task
          </button>
        </div>

        <div className="expanded-form">
          <div className="description-container">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add a description (optional)"
              className="description-input"
              rows="1"
            />
          </div>
          <div className="date-selector">
            <label htmlFor="due-date">Due Date:</label>
            <input
              type="date"
              id="due-date"
              className="date-input"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              min={today}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
