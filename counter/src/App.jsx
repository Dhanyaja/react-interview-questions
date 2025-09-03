import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const sub = () => {
    setCount((c) => c - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const add = () => {
    setCount((c) => c + 1);
  };

  return (
    <div className="count">
      <h1>{count}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          gap: 4,
        }}
      >
        <button onClick={sub}>Subtract</button>
        <button onClick={reset}>Reset</button>
        <button onClick={add}>Add</button>
      </div>
    </div>
  );
};

export default App;
