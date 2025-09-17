import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

const TemperatureConverter = () => {
  const toCelsius = (f) => ((f - 32) * 5) / 9;
  const toFahrenheit = (c) => (c * 9) / 5 + 32;

  const tryConvert = (value, convertFn) => {
    const num = parseFloat(value);
    if (Number.isNaN(num)) return "";
    const output = convertFn(num);
    return Math.round(output * 100) / 100;
  };

  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div style={styles.container}>
      <h2>Temperature Converter</h2>
      <TemperatureInput
        scale="c"
        value={celsius}
        onChange={(val) => {
          setTemperature(val);
          setScale("c");
        }}
      />
      <TemperatureInput
        scale="f"
        value={fahrenheit}
        onChange={(val) => {
          setTemperature(val);
          setScale("f");
        }}
      />
      {celsius !== "" && !Number.isNaN(parseFloat(celsius)) && (
        <p style={styles.result}>
          {parseFloat(celsius) >= 100
            ? "💨 Water would boil at this temperature."
            : "💧 Water would not boil at this temperature."}
        </p>
      )}
    </div>
  );
};

export default TemperatureConverter;
const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    textAlign: "center",
    background: "#fafafa",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
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
  result: {
    marginTop: "15px",
    fontWeight: "bold",
  },
};
