import React from "react";

const ProgressIndicator = ({ active }) => {
  return (
    <div
      style={{
        width: 8,
        height: 8,
        backgroundColor: active ? "red" : "white",
        borderRadius: 8,
      }}
    />
  );
};

export default ProgressIndicator;
