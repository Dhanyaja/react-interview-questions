import React, { useContext, useState } from "react";
import { TodoContext, TodoProvider } from "./TodoContext";
import TodoListContext from "./TodoListContext";

const TodoAppContentContext = () => {
  const { dispatch } = useContext(TodoContext);
  const [input, setInput] = useState("");

  const addTodo = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    dispatch({ type: "ADD_TODO", payload: trimmed });
    setInput("");
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      hello
      <h2 style={{ display: "flex", justifyContent: "center" }}>✅ Todo App</h2>
      <div style={{ display: "flex", marginBottom: "12px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
          style={{ flex: 1, padding: "8px" }}
        />
        <button onClick={addTodo} style={{ marginLeft: "8px" }}>
          Add
        </button>
      </div>
      <TodoListContext />
    </div>
  );
};

const TodoAppContext = () => (
  <TodoProvider>
    <TodoAppContentContext />
  </TodoProvider>
);

export default TodoAppContext;
