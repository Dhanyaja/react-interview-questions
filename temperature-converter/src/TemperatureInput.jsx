import React from "react";

const TemperatureInput = ({ scale, value, onChange }) => {
  const label = scale === "c" ? "Celsius" : "Fahrenheit";

  return (
    <div style={styles.inputGroup}>
      <label style={styles.label}>{label}:</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`Enter ${label}`}
        style={styles.input}
      />
    </div>
  );
};

export default TemperatureInput;
const styles = {
  inputGroup: {
    margin: "10px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: { fontWeight: "bold" },
  input: {
    padding: "8px",
    width: "150px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
};
