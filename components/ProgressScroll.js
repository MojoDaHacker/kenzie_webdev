import React from "react";
import ProgressIndicator from "./ProgressScroll copy";

const ProgressScroll = ({ activeIndex = 3, items = [1, 2, 3, 4] }) => {
  return (
    <div style={{ width: 100}}>
      <div className="d-flex justify-content-between">
        {items.map((item,i) => <ProgressIndicator key={item} active={i < activeIndex ? true : false} />)}
      </div>
    </div>
  );
};

export default ProgressScroll;
