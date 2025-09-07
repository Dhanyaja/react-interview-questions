import React, { useState } from "react";

const Accordion = ({ items, allowMultiple = false }) => {
  const [openIds, setOpenIds] = useState([]);

  const toggle = (id) => {
    setOpenIds((prev) =>
      allowMultiple
        ? prev.includes(id)
          ? prev.filter((item) => item !== id)
          : [...prev, id]
        : prev[0] === id
        ? []
        : [id]
    );
  };

  return (
    <div className="accordion">
      {items.map(({ id, question, answer }) => (
        <div key={id} className="accordion-btn">
          <button
            onClick={() => toggle(id)}
            aria-expanded={openIds.includes(id)}
            aria-controls={`panel-${id}`}
            className="accordion-header"
          >
            {question}
          </button>
          {openIds.includes(id) && (
            <div
              id={`panel-${id}`}
              role="region"
              className="accordion-body"
              style={{ padding: "8px", border: "1px solid #ddd" }}
            >
              {answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
