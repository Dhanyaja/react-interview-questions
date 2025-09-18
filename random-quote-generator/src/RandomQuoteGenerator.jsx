import React, { useEffect, useState } from "react";

// const API_URL = "https://api.quotable.io/random";
const API_URL = "https://api.api-ninjas.com/v1/quotes";

const RandomQuoteGenerator = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //   fetch new quote

  const fetchQuote = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error(`API error: ${res.status}`);
      const data = await res.json();
      setQuote({ content: data.content, author: data.author });
    } catch (error) {
      setError(error.message || "Something went wrong");
      setQuote(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={styles.container}>
      <h2>Random Quote Generator</h2>

      {loading && <p>Loading quote...</p>}
      {error && (
        <p style={styles.error}>
          ❌{error}{" "}
          <button onClick={fetchQuote} style={styles.retryBtn}>
            Retry
          </button>
        </p>
      )}
      {quote && !loading && !error && (
        <blockquote style={styles.quote}>
          “{quote.content}”
          <footer style={styles.author}>— {quote.author}</footer>
        </blockquote>
      )}
      <button onClick={fetchQuote} style={styles.button} disabled={loading}>
        {loading ? "Fetching..." : "New Quote"}
      </button>
    </div>
  );
};

export default RandomQuoteGenerator;

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    background: "#f9f9f9",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  quote: {
    fontSize: "1.2rem",
    fontStyle: "italic",
    margin: "20px 0",
  },
  author: {
    marginTop: "10px",
    fontWeight: "bold",
  },
  button: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    background: "#007bff",
    color: "#fff",
    cursor: "pointer",
    fontSize: "1rem",
  },
  error: { color: "red", margin: "15px 0" },
  retryBtn: {
    marginLeft: "10px",
    background: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};
