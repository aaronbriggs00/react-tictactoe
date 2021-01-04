import React, { useState, useEffect } from "react";
import Game from "./Game.js";
import firebase from "./../firebase.js";
import "./Stage.css";

export default function Stage() {
  const [winnerFound, setWinnerFound] = useState(false);
  const [winner, setWinner] = useState(null);

  const db = firebase.firestore().collection("Game");

  function getWinner() {
    db.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      console.log(items);
      setWinner(items[2]["value"]);
    });
  }

  useEffect(() => {
    getWinner();
  }, []);

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
      if (rowCheck.filter((x) => x === "X").length === 3 && !winner) {
        db.doc("Winner")
          .update({
            value: "X",
          })
          .catch((err) => {
            console.error(err);
          });
      } else if (rowCheck.filter((x) => x === "O").length === 3 && !winner) {
        db.doc("Winner")
          .update({
            value: "O",
          })
          .catch((err) => {
            console.error(err);
          });
      }
    });
  };
  return (
    <div className="stage">
      <Game boardCheck={boardCheck} />
      {winner && <h1>{winner} wins!</h1>}
    </div>
  );
}

// rowCheck.filter((x) => x === "X").length === 3
