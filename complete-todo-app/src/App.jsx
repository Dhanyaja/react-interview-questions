// import React from 'react'
// import TodoApp from './components/TodoApp'

// const App = () => {
//   return (
//     <div>
//       <TodoApp />
//     </div>
//   )
// }

// export default App


import React, { useEffect } from "react";
import { TodoProvider } from "./context/TodoContext";
import { ThemeProvider } from "./context/ThemeContext";
import TodoApp from "./components/TodoApp";

// CSS variables for theme (inline for brevity)
const base = `
:root {
  --bg: #ffffff;
  --fg: #808080;
  --muted: #5b6270;
  --border: #dce1ee;
  --btnBg: #f6f7fb;
  --pillActiveBg: #e9efff;
  --track: #eef1f6;
  --accent: #5b8cff;
  --inputBg: #fff;
  --itemBg: #fff;
}
:root[data-theme="dark"] {
  --bg: #0f1217;
  --fg: #ecf1ff;
  --muted: #9aa3b2;
  --border: #2a2f3a;
  --btnBg: #1a1f28;
  --pillActiveBg: #1b2a49;
  --track: #1a1f28;
  --accent: #6da4ff;
  --inputBg: #12161d;
  --itemBg: #141923;
}
* { box-sizing: border-box; }
body { margin: 0; font-family: Inter, system-ui, Arial, sans-serif; background: var(--bg); color: var(--fg); }
button { color: inherit; }
`;

export default function App() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = base;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <ThemeProvider>
      <TodoProvider>
        <TodoApp />
      </TodoProvider>
    </ThemeProvider>
  );
}
