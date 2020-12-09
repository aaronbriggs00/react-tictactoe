import React, { useState } from "react";
import Square from "./Square.js";
import "./Game.css";

export default function Game({ boardCheck, clearWinner }) {
  const [array, setArray] = useState(Array(9).fill(""));
  const [nextTurn, setNextTurn] = useState("X");

  const clearBoard = () => {
    setArray(Array(9).fill(""));
    clearWinner();
  };
  boardCheck(array, nextTurn);

  const toggleValue = (key) => {
    const newArray = array.map((value, index) => {
      if (index === key) {
        return nextTurn;
      }
      return value;
    });
    setArray(newArray);
    if (nextTurn !== "X") {
      setNextTurn("X");
    } else {
      setNextTurn("O");
    }
  };

  return (
    <div>
      <button onClick={clearBoard}>reset</button>
      <div className="board">
        {array.map((value, index) => (
          <Square key={index} id={index} value={value} action={toggleValue} />
        ))}
      </div>
    </div>
  );
}
