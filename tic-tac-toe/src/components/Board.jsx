import React from "react";
import Square from "./Square";

const Board = ({ squares, onMove }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 80px)",
        gap: "5px",
        margin: "20px auto",
      }}
    >
      {squares.map((val, idx) => (
        <Square key={idx} value={val} onClick={() => onMove(idx)} />
      ))}
    </div>
  );
};

export default Board;
