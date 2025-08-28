import React from "react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "8px",
      }}
    >
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)} style={{ marginLeft: "10px" }}>
        ❌
      </button>
    </li>
  );
};

export default TodoItem;
