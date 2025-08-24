import React, { useEffect, useRef, useState } from "react";

const formatPhone = (digits) => {
  const n = digits.slice(0, 10);
  if (n.length <= 3) return n;
  if (n.length <= 6) return `(${n.slice(0, 3)})${n.slice(3)}`;
  return `(${n.slice(0, 3)})${n.slice(3, 6)}-${n.slice(6)}`;
};

const mapDigitIndexToCaret = (formatted, digitIndex) => {
  let count = 0;
  for (let i = 0; i < formatted.length; i++) {
    if (/\d/.test(formatted[i])) {
      count++;
      if (count === digitIndex) return i + 1;
    }
  }
  return formatted.length;
};
const getDigitsBeforeCaret = (text, caret) => {
  return text.slice(0, caret).replace(/\D/g, "").length;
};

const PhoneNumberInput = ({ maxLength = 10 }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const caretRef = useRef(0);

  const onChange = (e) => {
    const raw = e.target.value;
    const caret = e.target.selectionStart ?? 0;
    const digitsBefore = getDigitsBeforeCaret(raw, caret);
    const digits = raw.replace(/\D/g, "").slice(0, maxLength);
    const next = formatPhone(digits);
    const nextCaret = mapDigitIndexToCaret(next, digitsBefore);
    caretRef.current = nextCaret;
    setInput(next);
  };
  useEffect(() => {
    if (inputRef.current) {
      const next = Math.min(caretRef.current, input.length);
      inputRef.current.setSelectionRange(next, next);
    }
  }, [input]);

  return (
    <input
      ref={inputRef}
      value={input}
      onChange={onChange}
      inputMode="numeric"
      pattern="\d*"
      placeholder="(123)456-7890"
      data-testid="phone-number-input"
    />
  );
};

export default PhoneNumberInput;
