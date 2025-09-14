import React from "react";
import StarRating from "./components/StarRating";

const App = () => {
  const handleRatingChange = (value) => {
    console.log("Selected Rating: ", value);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Star Rating Component</h2>
      <StarRating totalStars={5} onChange={handleRatingChange} />
    </div>
  );
};

export default App;
