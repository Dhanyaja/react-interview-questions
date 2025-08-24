import React, { useEffect, useRef, useState } from "react";

const PhoneNumberInput = ({ maxLength }) => {
  const [input, changeInput] = useState("");
  const inputRef = useRef(null);
  const caretPositionRef = useRef(0);

  const inputChange = (e) => {
    const target = e.target;
    const currentValue = target.value;
    const selectionStart = target.selectionStart;
    const numbers = currentValue.replace(/[^0-9]/g, "");
    const size = numbers.length;
    if (size > maxLength) return;
    // setInput(numbers)

    let formatedValue = [];

    for (let i = 0; i < size; i++) {
      if (size > 3 && i === 0) {
        formatedValue.push("(");
      }
      formatedValue.push(numbers[i]);
      if (size > 3 && i === 2) {
        formatedValue.push(")");
      }
      if (size > 6 && i === 5) {
        formatedValue.push("-");
      }
    }
    const diff = formatedValue.length - currentValue.length;
    if (selectionStart) {
      caretPositionRef.current = selectionStart + diff;
    }
    changeInput(formatedValue.join(""));
  };
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.setSelectionRange(
        caretPositionRef.current,
        caretPositionRef.current
      );
    }
  }, [input]);

  return (
    <input
      value={input}
      onChange={inputChange}
      ref={inputRef}
      data-testid="phone-number-input"
    />
  );
};

const Container = () => {
  return (
    <div>
      <PhoneNumberInput maxLength={10} />
    </div>
  );
};

export default Container;
