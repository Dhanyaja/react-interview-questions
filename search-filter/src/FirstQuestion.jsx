import React, { useState } from "react";

const FirstQuestion = () => {
  const fruits = [
    "Apple",
    "Apricot",
    "Banana",
    "Blueberry",
    "Cherry",
    "Cranberry",
    "Date",
    "Dragonfruit",
    "Elderberry",
    "Fig",
    "Grape",
    "Grapefruit",
  ];

  const [fruitsData, setFruitsData] = useState(fruits);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };

  const fruitsDataFiltered = fruitsData.filter((fruit) => {
    return fruit.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const highlightMatch = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);

    console.log(parts)

    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <b key={index} style={{ color: "black" }}>
          {part}
        </b>
      ) : (
        part
      )
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search here..."
        onChange={handleInputChange}
      />
      {fruitsDataFiltered.map((fruit, idx) => (
        <p key={idx}>{highlightMatch(fruit, searchTerm)}</p>
      ))}
    </div>
  );
};

export default FirstQuestion;
