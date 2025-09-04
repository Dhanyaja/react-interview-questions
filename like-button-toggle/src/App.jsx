import React, { useState } from "react";

const App = () => {
  const [like, setLike] = useState(false);

  const likeToggle = () => setLike((prev) => !prev);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button
        style={{ padding: "10px", border: "none", fontSize: "60px" }}
        onClick={likeToggle}
      >
        {like ? " ❤️ " : " 🤍 "}
      </button>
    </div>
  );
};

export default App;
