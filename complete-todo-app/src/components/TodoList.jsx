import React, { useMemo } from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle, onDelete, onEdit }) {
  const empty = todos.length === 0;
  const ordered = useMemo(
    () => [...todos].sort((a, b) => b.createdAt - a.createdAt),
    [todos]
  );

  if (empty)
    return (
      <p style={{ color: "var(--muted)", margin: "8px 0" }}>
        No matching todos.
      </p>
    );

  return (
    <ul
      style={{
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "grid",
        gap: 8,
      }}
    >
      {ordered.map((t) => (
        <TodoItem
          key={t.id}
          todo={t}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
