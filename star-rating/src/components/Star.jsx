import React from "react";

const Star = ({ filled, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <span
      role="button"
      tabIndex={0}
      aria-label={filled ? "Filled star" : "Empty star"}
      style={{
        cursor: "pointer",
        color: filled ? "gold" : "gray",
        fontSize: "32px",
        transition: "color 0.2s ease",
        userSelect: "none",
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
    >
      ★
    </span>
  );
};

export default Star;
