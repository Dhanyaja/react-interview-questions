import React from "react";

const Tab = ({ label, isActive, onClick, index }) => {
  return (
    <button
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${index}`}
      id={`tab-${index}`}
      onClick={onClick}
      style={{
        padding: "8px 16px",
        marginRight: "8px",
        cursor: "pointer",
        borderBottom: isActive ? "2px solid blue" : "2px solid transparent",
        backgroundColor: "transparent",
      }}
    >
      {label}
    </button>
  );
};

export default Tab;
