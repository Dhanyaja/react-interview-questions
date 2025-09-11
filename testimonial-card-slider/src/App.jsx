import React from "react";
import TestimonialCarousel from "./components/TestimonialCarousel";

const App = () => {
  const testimonials = [
    { quote: "This product changed my life!", author: "Alice" },
    { quote: "Absolutely fantastic experience.", author: "Bob" },
    { quote: "I would highly recommend this to anyone.", author: "Charlie" },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h2>🌟 Customer Testimonials</h2>
      <TestimonialCarousel testimonials={testimonials} />
    </div>
  );
};

export default App;
