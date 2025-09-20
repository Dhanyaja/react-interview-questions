import React from "react";
import DigitalClock from "./components/DigitalClock";

const App = () => {
  return (
    <div style={{ padding: 40 }}>
      <h3>Local 24-hour (default)</h3>
      <DigitalClock />

      <h3 style={{ marginTop: 24 }}>12-hour (US) with seconds</h3>
      <DigitalClock hour12={true} locale="en-US" />

      <h3 style={{ marginTop: 24 }}>India timezone (Asia/Kolkata)</h3>
      <DigitalClock timezone="Asia/Kolkata" hour12={false} />

      <h3 style={{ marginTop: 24 }}>Minute-level clock (no seconds)</h3>
      <DigitalClock showSeconds={false} tickInterval={60_000} />
    </div>
  );
};

export default App;
