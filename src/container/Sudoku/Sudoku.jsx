import React from "react";
import { SudokuProvider } from "../../contexts/SudokuContext";

import "./style.css";
import SudokuMatrix from "../../components/SudokuMatrix";
import SudokuNumbers from "../../components/SudokuNumbers";

function Sudoku() {
  const buttonLevel = (level) => {
    return <button onClick={function () {}}>{level}</button>;
  };

  const generateLevels = () => {
    return (
      <>
        {buttonLevel("EASY")}
        {buttonLevel("MEDIUM")}
        {buttonLevel("HARD")}
        {buttonLevel("VERY_HARD")}
        {buttonLevel("INSANE")}
        {buttonLevel("INHUMAN")}
      </>
    );
  };

  return (
    <div className="Sudoku">
      <SudokuProvider>
        <SudokuMatrix />
        <SudokuNumbers />
        {generateLevels()}
      </SudokuProvider>
    </div>
  );
}

export default Sudoku;
