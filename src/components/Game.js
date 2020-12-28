import React, { useState, useEffect } from "react";
import Square from "./Square.js";
import firebase from "./../firebase.js";
import "./Game.css";

export default function Game({ boardCheck, clearWinner }) {
  const [array, setArray] = useState([]);
  // const [array, setArray] = useState(Array(9).fill(""));
  const [nextTurn, setNextTurn] = useState("X");

  const db = firebase.firestore().collection("Game");

  function getArray() {
    db.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setArray(Object.values(items[0]));
    });
  }

  useEffect(() => {
    getArray();
  }, []);

  function getNextTurn() {
    db.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setNextTurn(items[1]["value"]);
    });
  }

  useEffect(() => {
    getNextTurn();
  }, []);

  // Firebase Edit
  function editSquare(key, value) {
    db.doc("Board")
      .update({
        [key]: value,
      })
      .catch((err) => {
        console.error(err);
      });
    if (nextTurn !== "X") {
      var nextValue = "X";
    } else {
      var nextValue = "O";
    }
    db.doc("NextTurn")
      .update({
        value: nextValue,
      })
      .catch((err) => {
        console.error(err);
      });
  }
  // Firebase Edit End

  const clearBoard = () => {
    clearWinner();
    db.doc("Board")
      .update({
        0: "",
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
      })
      .catch((err) => {
        console.error(err);
      });
  };
  boardCheck(array, nextTurn);

  const toggleValue = (key) => {
    editSquare(key, nextTurn);
    // const newArray = array.map((value, index) => {
    //   if (index === key) {
    //     return nextTurn;
    //   }
    //   return value;
    // });
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
