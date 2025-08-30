import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import TodoItemContext from "./TodoItemContext";

const TodoListContext = () => {
  const { todos } = useContext(TodoContext);

  if (todos.length === 0) {
    return <p style={{ textAlign: "center" }}>No tasks yet 🚀</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <TodoItemContext key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoListContext;
