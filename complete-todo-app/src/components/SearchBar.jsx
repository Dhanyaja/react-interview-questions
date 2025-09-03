import React, { useEffect, useState } from "react";
import useDebouncedValue from "../hooks/useDebouncedValue";

const SearchBar = ({ value, onChange }) => {
  const [q, setQ] = useState(value);
  const debounced = useDebouncedValue(q, 250);

  useEffect(() => {
    onChange(debounced);
  }, [debounced, value]);
  useEffect(() => {
    setQ(value);
  }, [value]);

  return (
    <input
      value={q}
      onChange={(e) => setQ(e.target.value)}
      placeholder="Search Todos..."
      aria-label="Search"
      style={{
        padding: "10px 12px",
        borderRadius: 8,
        border: "1px solid var(--border)",
        background: "var(--inputBg)",
        color: "var(--fg)",
      }}
    />
  );
};

export default SearchBar;