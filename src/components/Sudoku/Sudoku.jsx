import React from "react";
import { SudokuProvider } from "../../contexts/SudokuContext";

import "./style.css";
import SudokuMatrix from "../SudokuMatrix";
import SudokuNumbers from "../SudokuNumbers";
import SudokuListLevels from "../SudokuListLevels";

function Sudoku() {
  return (
    <div className="Sudoku">
      <SudokuProvider>
        <SudokuMatrix />
        <SudokuNumbers />
        <SudokuListLevels />
      </SudokuProvider>
    </div>
  );
}

export default Sudoku;
