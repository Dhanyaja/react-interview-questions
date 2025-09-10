import React from "react";
import Tabs from "./components/Tabs";
import Tab from "./components/Tab";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>🔖 Tabs Example</h2>
      <Tabs defaultIndex={0}>
        <Tab label="Home">
          <div id="panel-0" role="tabpanel" aria-labelledby="tab-0">
            <h3>Home Content</h3>
            <p>Welcome to the home page.</p>
          </div>
        </Tab>
        <Tab label="Profile">
          <div id="panel-1" role="tabpanel" aria-labelledby="tab-1">
            <h3>Profile Content</h3>
            <p>This is your profile page.</p>
          </div>
        </Tab>
        <Tab label="Settings">
          <div id="panel-2" role="tabpanel" aria-labelledby="tab-2">
            <h3>Settings Content</h3>
            <p>Update your preferences here.</p>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default App;
