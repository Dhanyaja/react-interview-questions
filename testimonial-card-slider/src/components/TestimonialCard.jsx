import React from "react";

const TestimonialCard = ({testimonial}) => {
  return (
    <div
      className="testimonial-card"
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "20px",
        maxWidth: "400px",
        margin: "0 auto",
        textAlign: "center",
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <p style={{ fontStyle: "italic" }}>“{testimonial.quote}”</p>
      <h4 style={{ marginTop: "12px" }}>— {testimonial.author}</h4>
    </div>
  );
};

export default TestimonialCard;
