import React, { useState } from "react";
import Board from "./Board";
import CalculateWinner from "./CalculateWinner";

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = CalculateWinner(squares);
  const isDraw = !winner && squares.every(Boolean); // when there is no winner and al square are filled

  const handleMove = (idx) => {
    if (squares[idx] || winner) return; // Prevent override & moves after win

    const newSquares = squares.slice();
    newSquares[idx] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    console.log(newSquares);
    setXIsNext(!xIsNext);
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = "It's a Draw!";
  } else {
    status = `Next Player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Tic-Tac-Toe</h2>
      <p>{status}</p>
      <Board squares={squares} onMove={handleMove} />
      {(winner || isDraw) && (
        <button onClick={handleRestart} style={{ marginTop: "1rem" }}>
          Restart Game
        </button>
      )}
    </div>
  );
};

export default TicTacToe;
