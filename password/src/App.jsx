import React, { useState } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const toggleVisibility = () => setShow((prev) => !prev);

  return (
    <div>
      <input
        type={show ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button
        type="button"
        onClick={toggleVisibility}
        aria-label={show ? "Hide password" : "Show password"}
      >{show ? " 🙈 Hide" : " 👁 Show "}</button>
    </div>
  );
};

export default App;
