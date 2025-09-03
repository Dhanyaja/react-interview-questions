import React, { memo, useCallback, useState } from "react";

const itemStyle = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid var(--border)",
  background: "var(--itemBg)",
};

function Row({ todo, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(todo.text);

  const save = useCallback(() => {
    const trimmed = draft.trim();
    if (trimmed && trimmed !== todo.text) onEdit(todo.id, trimmed);
    setEditing(false);
  }, [draft, onEdit, todo.id, todo.text]);

  return (
    <li style={itemStyle}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        aria-label={`Toggle ${todo.text}`}
      />
      {editing ? (
        <input
          autoFocus
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={save}
          onKeyDown={(e) => {
            if (e.key === "Enter") save();
            if (e.key === "Escape") {
              setDraft(todo.text);
              setEditing(false);
            }
          }}
          style={{
            flex: 1,
            padding: "6px 8px",
            borderRadius: 8,
            border: "1px solid var(--border)",
            background: "var(--inputBg)",
            color: "var(--fg)",
          }}
        />
      ) : (
        <span
          onDoubleClick={() => setEditing(true)}
          style={{
            flex: 1,
            textDecoration: todo.completed ? "line-through" : "none",
            opacity: todo.completed ? 0.7 : 1,
            cursor: "text",
          }}
        >
          {todo.text}
        </span>
      )}
      <button
        onClick={() => setEditing((v) => !v)}
        style={iconBtn}
        aria-label="Edit"
      >
        ✏️
      </button>
      <button
        onClick={() => onDelete(todo.id)}
        style={iconBtn}
        aria-label="Delete"
      >
        🗑️
      </button>
    </li>
  );
}

const iconBtn = {
  padding: "6px 8px",
  borderRadius: 8,
  border: "1px solid var(--border)",
  background: "var(--btnBg)",
  cursor: "pointer",
};

export default memo(Row);
