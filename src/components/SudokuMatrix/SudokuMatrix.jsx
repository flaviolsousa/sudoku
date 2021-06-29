import React from "react";
import "./style.css";
import SudokuCell from "../SudokuCell";

function SudokuMatrix(props) {
  return (
    <div className="SudokuMatrix">
      {props.model.matrix.map((lin) =>
        lin.map((cell) => (
          <SudokuCell
            key={cell.i}
            cell={cell}
            model={props.model}
            cellClicked={props.cellClicked}
          />
        ))
      )}
    </div>
  );
}

export default SudokuMatrix;
