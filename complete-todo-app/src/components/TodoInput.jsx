import React, { useCallback, useRef, useState } from "react";

const TodoInput = ({ onAdd, onToggleAll, hasItems }) => {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const submit = useCallback(() => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText("");
    inputRef.current?.focus();
  }, [text, onAdd]);

  return (
    <div style={{ display: "flex", gap: 8 }}>
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task..."
        aria-label="New Todo"
        onKeyDown={(e) => {
          if (e.key === "Enter") submit();
        }}
        style={{
          flex: 1,
          padding: "10px 12px",
          borderRadius: 8,
          border: "1px solid var(--border)",
          background: "var(--inputBg)",
          color: "var(--fg)",
        }}
      />
      <button onClick={submit} style={btn}>
        Add
      </button>
      <button
        onClick={onToggleAll}
        style={{ ...btn, opacity: hasItems ? 1 : 0.6 }}
        disabled={!hasItems}
      >
        Toggle All
      </button>
    </div>
  );
};

const btn = {
  padding: "10px 12px",
  borderRadius: 8,
  border: "1px solid var(--border)",
  background: "var(--btnBg)",
  color: "var(--fg)",
  cursor: "pointer",
};

export default TodoInput;
