import React, { useState } from "react";
import "./Square.css";

export default function Square({ value, action, id }) {
  const update = () => {
    action(id);
  };

  return (
    <div>
      {!value && (
        <span className="square" onClick={update}>
          {value}
        </span>
      )}
      {value && <span className="square">{value}</span>}
    </div>
  );
}
