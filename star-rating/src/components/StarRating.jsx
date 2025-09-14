import React, { useState } from "react";
import Star from "./Star";

const StarRating = ({ totalStars = 5, onChange }) => {
  const [rating, setRating] = useState(0); // Selected rating
  const [hover, setHover] = useState(0); // Hover preview

  const handleClick = (star) => {
    // Toggle if clicked same star again
    const newRating = star === rating ? 0 : star;
    setRating(newRating);
    onChange?.(newRating);
  };

  return (
    <div
      role="radiogroup"
      aria-label="Star Rating"
      style={{ display: "flex", gap: "8px" }}
    >
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;
        return (
          <Star
            key={starValue}
            filled={starValue <= (hover || rating)}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
