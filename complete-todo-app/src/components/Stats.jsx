import React from "react";

export default function Stats({ stats: { total, completed, active, progress } }) {
  return (
    <div style={{ display: "flex", gap: 12, justifyContent: "space-between", color: "var(--muted)" }}>
      <span>Total: {total}</span>
      <span>Active: {active}</span>
      <span>Completed: {completed}</span>
      <span>Progress: {progress}%</span>
    </div>
  );
}
