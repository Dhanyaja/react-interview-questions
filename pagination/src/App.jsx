import React, { useMemo, useState } from "react";

const data = Array.from({ length: 57 }, (_, i) => `Item ${i + 1}`);

const App = () => {
  const [page, setPage] = useState(1);
  const perPage = 10;

  const totalPages = Math.ceil(data.length / perPage);

  const currentData = useMemo(() => {
    const start = (page - 1) * perPage;
    return data.slice(start, start + perPage);
  }, [page]);

  const next = () => setPage((p) => Math.min(p + 1, totalPages));
  const prev = () => setPage((p) => Math.min(p - 1, 1));

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>📃 Pagination Demo</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {currentData.map((item, idx) => (
          <li
            key={idx}
            style={{
              padding: "8px",
              borderBottom: "1px solid #eee",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
        <button onClick={prev} disabled={page === 1}>
          ⬅ Prev
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button onClick={next} disabled={page === totalPages}>
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default App;
