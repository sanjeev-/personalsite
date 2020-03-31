import React from "react";
import DrawingLine from "./DrawingLine";

const Drawing = ({ lines }) => {
  return (
    <svg>
      {lines.map((line, index) => (
        <DrawingLine key={index} line={line} />
      ))}
    </svg>
  );
};

export default Drawing;
