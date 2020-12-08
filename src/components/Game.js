import React, { Component } from "react";
import Square from "./Square.js";

export default class Game extends Component {
  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <table>
          <tr>
            <td>
              <Square content="hello" />
            </td>
            <td className="vert"></td>
            <td></td>
          </tr>
          <tr>
            <td className="hori"></td>
            <td className="vert hori"></td>
            <td className="hori"></td>
          </tr>
          <tr>
            <td></td>
            <td className="vert"></td>
            <td></td>
          </tr>
        </table>
      </div>
    );
  }
}
