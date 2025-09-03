import React from "react";

export default function ProgressBar({ progress }) {
  return (
    <div aria-label="Progress" style={{ background: "var(--track)", height: 10, borderRadius: 999 }}>
      <div style={{
        width: `${progress}%`,
        height: "100%",
        borderRadius: 999,
        background: "var(--accent)",
        transition: "width 200ms ease"
      }} />
      <div style={{ marginTop: 6, fontSize: 12, color: "var(--muted)" }}>
        {progress}% complete
      </div>
    </div>
  );
}
