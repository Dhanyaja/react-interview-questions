import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoItemContext = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "8px",
        padding: "8px",
        background: "#f4f4f4",
        borderRadius: "4px",
      }}
    >
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
          flex: 1,
        }}
        onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
      >
        {todo.text}
      </span>
      <button
        style={{
          marginLeft: "10px",
        }}
        onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
      >
        ❌
      </button>
    </li>
  );
};

export default TodoItemContext;
