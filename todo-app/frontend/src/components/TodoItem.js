import React, { useState } from "react";
import "./TodoItem.css";

/**
 * TodoItem component - Renders an individual todo item with toggle, delete, and expand functionality
 * @param {Object} todo - The todo item object containing text, description, dueDate, completed status, and _id
 * @param {Function} onDelete - Callback function to delete the todo item
 * @param {Function} onToggle - Callback function to toggle the completed status
 */
const TodoItem = ({ todo, onDelete, onToggle }) => {
  // State to track whether the description is expanded or collapsed
  const [expanded, setExpanded] = useState(true);

  // Check if the todo has a description to determine whether to show expand/collapse button
  const hasDescription = todo.description && todo.description.length > 0;

  const formatDueDate = (dateString) => {
    if (!dateString) return null;

    // Convert string date to Date object
    const dueDate = new Date(dateString);

    // Create Date objects for today and tomorrow (with time set to midnight)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Determine if the date is today, tomorrow, or past due
    const isToday = dueDate.toDateString() === today.toDateString();
    const isTomorrow = dueDate.toDateString() === tomorrow.toDateString();
    const isPastDue = dueDate < today;

    // Format the date in a human-readable format (e.g., "Jan 1, 2025")
    const formattedDate = dueDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    return {
      text: isToday ? "Today" : isTomorrow ? "Tomorrow" : formattedDate,
      isPastDue,
    };
  };

  // Get formatted date information if the todo has a due date
  const dueDateInfo = todo.dueDate ? formatDueDate(todo.dueDate) : null;

  return (
    <li
      className={`todo-item ${todo.completed ? "completed" : ""} ${
        dueDateInfo?.isPastDue && !todo.completed ? "past-due" : ""
      }`}
    >
      {/* Main todo item row containing checkbox, text, and delete button */}
      <div className="todo-item-main">
        {/* Checkbox to toggle completion status */}
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo._id)}
        />

        {/* Content container for todo text and metadata */}
        <div className="todo-content">
          <span className="todo-text">{todo.text}</span>

          {/* Show expand/collapse button only if there's a description */}
          {hasDescription && (
            <button
              className="expand-description"
              onClick={() => setExpanded(!expanded)}
              aria-label={expanded ? "Hide description" : "Show description"}
            >
              {expanded ? "▼" : "►"}
            </button>
          )}

          {/* Metadata section for due date */}
          <div className="todo-meta">
            {dueDateInfo && (
              <span
                className={`due-date-badge ${
                  dueDateInfo.isPastDue && !todo.completed ? "overdue" : ""
                }`}
              >
                {dueDateInfo.text}
              </span>
            )}
          </div>
        </div>

        {/* Delete button */}
        <button
          className="delete-btn"
          onClick={() => onDelete(todo._id)}
          aria-label="Delete task"
        >
          ✕
        </button>
      </div>

      {/* Expandable description section */}
      {hasDescription && expanded && (
        <div className="todo-description">{todo.description}</div>
      )}
    </li>
  );
};

export default TodoItem;
