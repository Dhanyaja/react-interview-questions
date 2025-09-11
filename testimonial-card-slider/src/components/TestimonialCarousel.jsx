import React, { useCallback, useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialCarousel = ({
  testimonials,
  autoPlay = true,
  interval = 4000,
}) => {
  const [current, setCurrent] = useState(0);
  const length = testimonials?.length || 0;

  // Safe guard: no testimonials
  if (!length) return <p>No testimonials available.</p>;

  // Go to next card (wrap around)
  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % length);
  }, [length]);

  // Go to previous card (wrap around)
  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + length) % length);
  }, [length]);

  // Auto-rotation effect
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(next, interval);

    return () => clearInterval(timer); // cleanup
  }, [autoPlay, interval, next]);

  return (
    <div style={{ textAlign: "center" }}>
      {/* Card */}
      <TestimonialCard testimonial={testimonials[current]} />

      {/* Controls */}
      <div style={{ marginTop: "16px" }}>
        <button onClick={prev} aria-label="Previous Testimonial">
          ⬅ Prev
        </button>
        <button
          onClick={next}
          aria-label="Next Testimonial"
          style={{ marginLeft: "12px" }}
        >
          Next ➡
        </button>
      </div>

      {/* Dots Navigation */}
      <div style={{ marginTop: "12px" }}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            style={{
              margin: "0 4px",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              border: "none",
              background: current === index ? "blue" : "#ccc",
              cursor: "pointer",
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
