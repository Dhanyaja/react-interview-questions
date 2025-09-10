import React, { Children, cloneElement, useState } from "react";

const Tabs = ({ children, defaultIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  //   gaurd: if children missing
  if (!children) return null;

  const tabs = Children.toArray(children);

  //   gaurd: if invalid defaultIndex
  const safeIndex =
    activeIndex >= 0 && activeIndex < tabs.length ? activeIndex : 0;

  console.log("safeIndex: ", safeIndex);
  console.log("tabs: ", tabs);

  return (
    <div>
      {/* tab list */}
      <div role="tablist" aria-label="Tab Navigation">
        {tabs.map((tab, index) => {
          const isActive = safeIndex === index;
          console.log("isActive: ", isActive)
          return cloneElement(tab, {
            isActive,
            onClick: () => setActiveIndex(index),
            index,
            key: index,
          });
        })}
      </div>
      {/* Tab Panel */}
      <div style={{ marginTop: "16px" }}>{tabs[safeIndex].props.children}</div>
    </div>
  );
};

export default Tabs;
