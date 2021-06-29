import React, { useState, useEffect } from "react";
import SudokuModel from "../../models/SudokuModel";

import "./style.css";
import SudokuMatrix from "../../components/SudokuMatrix";
import SudokuNumbers from "../../components/SudokuNumbers";

const model = new SudokuModel();

function Sudoku(props) {
  console.log("## Sudoku react component was called");
  const [, setState] = useState();

  const buttonLevel = (level) => {
    return (
      <button
        onClick={function () {
          model.newMatrixByLevel({ level });
        }}
      >
        {level}
      </button>
    );
  };

  const onModelUpdated = (model) => {
    console.log("[RC] Sudoku.onModelUpdated");
    setState(model);
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

  // const cellClicked = (cell) => {
  //   sudokuControlService.cellClicked({
  //     data,
  //     setData,
  //     control,
  //     setControl,
  //     cell,
  //   });
  // };

  // sudokuControlService.init({
  //   data,
  //   setData,
  //   control,
  //   setControl,
  //   number: "numberFirst",
  // });

  useEffect(() => {
    model.addListener("updated", onModelUpdated);
    setState(model);
  }, []);

  return (
    <div className="Sudoku">
      <SudokuMatrix
        model={model}
        cellClicked={(cell) => model.control.cellClicked(model, cell)}
      />
      <SudokuNumbers
        model={model}
        numberClicked={(n) => model.control.numberClicked(model, n)}
      />
      {generateLevels()}
    </div>
  );
}

export default Sudoku;
