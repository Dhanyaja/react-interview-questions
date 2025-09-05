import React, { useMemo, useState } from "react";

const users = [
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Bob Smith" },
  { id: 3, name: "Charlie Davis" },
  { id: 4, name: "Diana Prince" },
];

const App = () => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return users.filter((u) => u.name.toLowerCase().includes(q));
  }, [query]);

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h2>🔎 User Search</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Users..."
        style={{
          padding: "8px 12px",
          width: "100%",
          borderRadius: 6,
          border: "1px solid #ccc",
          marginBottom: 12,
        }}
      />
      {filtered.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul style={{ padding: 0, listStyle: "none" }}>
          {filtered.map((u) => (
            <li
              key={u.id}
              style={{ padding: "8px", borderBottom: "1px solid #eee" }}
            >
              {u.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
