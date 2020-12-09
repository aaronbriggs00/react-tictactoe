import React, { useState } from "react";
import Game from "./Game.js";
import "./Stage.css";

export default function Stage() {
  const [winnerFound, setWinnerFound] = useState(false);
  const clearWinner = () => {
    setWinnerFound(false);
  };
  const boardCheck = (array, nextTurn) => {
    let winningValues = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    winningValues.forEach((combo) => {
      var rowCheck = combo.map((indexValue) => array[indexValue]);
      console.log(rowCheck);
      if (
        rowCheck.filter((x) => x === "X").length === 3 ||
        rowCheck.filter((x) => x === "O").length === 3
      ) {
        if (nextTurn === "X") {
          setWinnerFound("O");
        } else {
          setWinnerFound("X");
        }
      }
    });
  };
  return (
    <div className="stage">
      <Game
        boardCheck={boardCheck}
        winnerFound={winnerFound}
        clearWinner={clearWinner}
      />
      {winnerFound && <h1>{winnerFound} wins!</h1>}
    </div>
  );
}
