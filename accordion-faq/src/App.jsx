import React from "react";
import Accordion from "./Accordion";

const App = () => {
  const faqs = [
    {
      id: 1,
      question: "What is React?",
      answer: "A library for building UIs.",
    },
    { id: 2, question: "Why use it?", answer: "Reusable, declarative, fast." },
    {
      id: 3,
      question: "Hooks or Classes?",
      answer: "Hooks are the modern approach.",
    },
  ];

  return (
    <div style={{width: "400px", margin: "2rem auto", fontFamily: "Arial"}}>
      <h2>❓ FAQ</h2>
      <Accordion items={faqs} allowMultiple={false} />
    </div>
  );
};

export default App;
