import React from "react";

const DrawingLine = ({ line }) => {
  const pathData =
    "M " + line.map(p => p.get("x") + " " + p.get("y")).join(" L ");

  return <path d={pathData} />;
};

export default DrawingLine;
