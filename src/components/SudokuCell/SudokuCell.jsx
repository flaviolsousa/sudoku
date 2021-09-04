import React from "react";
import classnames from "classnames";
import { useSudokuContext } from "../../contexts/SudokuContext";

import "./style.css";

function SudokuCell(props) {
  const {
    state: { control },
    dispatch,
  } = useSudokuContext();

  return (
    <div
      className={classnames(
        "SudokuCell",
        `SudokuCell-col-${props.cell.col}`,
        `SudokuCell-lin-${props.cell.lin}`,
        {
          "SudokuCell-locked": props.cell.locked,
          "SudokuCell-n-locked": !props.cell.locked,
          "SudokuCell-error": props.cell.error,
          "SudokuCell-empty": props.cell.value === ".",
          "SudokuCell-not-empty": props.cell.value !== ".",
          "SudokuCell-number-selected": props.cell.value === control.selected,
        }
      )}
      onClick={() =>
        dispatch({ type: "cell/clicked", payload: { cell: props.cell } })
      }
    >
      <span>{props.cell.value}</span>
    </div>
  );
}

export default SudokuCell;
