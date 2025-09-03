import React, { useContext } from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      style={{
        padding: "8px 10px",
        borderRadius: 8,
        border: "1px solid var(--border)",
        background: "var(--fg)",
        color: "var(--bg)",
        cursor: "pointer",
      }}
    >
      {theme === "light" ? "🌙 Dark" : "☀ light"}
    </button>
  );
};

export default ThemeToggle;
