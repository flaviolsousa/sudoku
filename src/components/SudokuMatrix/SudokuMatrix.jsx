import React, { Component } from "react";
import "./style.css";
import SudokuCell from "../SudokuCell";

class SudokuMatrix extends Component {
  cells() {}

  render() {
    return (
      <div className="SudokuMatrix">
        {[...Array(9)].map((c, lin) =>
          [...Array(9)].map((c, col) => <SudokuCell key={ `${col}x${lin}`} col={col} lin={lin} />)
        )}
      </div>
    );
  }
}

export default SudokuMatrix;
