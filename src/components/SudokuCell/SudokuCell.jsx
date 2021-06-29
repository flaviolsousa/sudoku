import React from "react";
import classnames from "classnames";

import "./style.css";

function SudokuCell(props) {
  return (
    <div
      className={classnames(
        "SudokuCell",
        `SudokuCell-col-${props.cell.col}`,
        `SudokuCell-lin-${props.cell.lin}`,
        {
          "SudokuCell-locked": props.cell.locked,
          "SudokuCell-editable": !props.cell.locked,
          "SudokuCell-empty": props.cell.value === ".",
          "SudokuCell-not-empty": props.cell.value !== ".",
          "SudokuCell-number-selected":
            props.cell.value === props.model.control.selected,
        }
      )}
      onClick={() => props.cellClicked(props.cell)}
    >
      <span>{props.cell.value}</span>
    </div>
  );
}

export default SudokuCell;
