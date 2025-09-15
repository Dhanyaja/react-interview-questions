import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: "80px",
        height: "80px",
        fontSize: "2rem",
        fontWeight: "bold",
        cursor: value ? "not-allowed" : "pointer",
      }}
      disabled={!!value}
    >
      {value}
    </button>
  );
};

export default Square;
