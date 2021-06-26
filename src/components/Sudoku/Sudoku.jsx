import React, { Component } from "react";
import SudokuCell from "../SudokuCell";
import SudokuMatrix from "../SudokuMatrix";

class Sudoku extends Component {
  render() {
    return (
      <div className="Sudoku">
        <SudokuMatrix />
      </div>
    );
  }
}

export default Sudoku;
