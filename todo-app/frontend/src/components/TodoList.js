import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onToggle }) => {
  const todoArray = Array.isArray(todos) ? todos : [];
  const completedCount = todoArray.filter((todo) => todo.completed).length;

  if (todoArray.length === 0) {
    return <div className="no-todos">No tasks to display. Add one above!</div>;
  }

  return (
    <div className="todo-list-container">
      <div className="tasks-counter">
        {completedCount} of {todoArray.length} tasks completed
      </div>
      <ul className="todo-list">
        {todoArray.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
