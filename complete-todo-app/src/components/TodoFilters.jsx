import React from "react";

const group = {
  display: "flex",
  gap: 8,
  alignItems: "center",
  flexWrap: "wrap",
};
const pill = (active) => ({
  padding: "8px 12px",
  borderRadius: 999,
  border: "1px solid var(--border)",
  background: active ? "var(--pillActiveBg)" : "var(--btnBg)",
  color: "var(--fg)",
  cursor: "pointer",
});

export default function TodoFilters({
  filter,
  onChange,
  onClearCompleted,
  hasCompleted,
}) {
  return (
    <div style={{ ...group, justifyContent: "space-between" }}>
      <div style={group} role="tablist" aria-label="Filters">
        {["all", "active", "completed"].map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            onClick={() => onChange(f)}
            style={pill(filter === f)}
          >
            {f[0].toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      <button
        onClick={onClearCompleted}
        disabled={!hasCompleted}
        style={{ ...pill(false), opacity: hasCompleted ? 1 : 0.6 }}
      >
        Clear Completed
      </button>
    </div>
  );
}
