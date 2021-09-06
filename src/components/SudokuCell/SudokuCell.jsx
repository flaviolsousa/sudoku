import React from "react";
import classnames from "classnames";
import { useSudokuContext } from "../../contexts/SudokuContext";

import "./style.css";

function SudokuCell(props) {
  const {
    state: { control },
    dispatch,
  } = useSudokuContext();
  const cell = props.cell;
  return (
    <div
      className={classnames(
        "SudokuCell",
        `SudokuCell-col-${cell.col}`,
        `SudokuCell-lin-${cell.lin}`,
        {
          "SudokuCell-locked": cell.locked,
          "SudokuCell-n-locked": !cell.locked,
          "SudokuCell-error": !!cell.error,
          "SudokuCell-empty": cell.value === ".",
          "SudokuCell-not-empty": cell.value !== ".",
          "SudokuCell-number-selected": cell.value === control.selected,
        }
      )}
      onClick={() =>
        dispatch({ type: "cell/clicked", payload: { cell: props.cell } })
      }
      onAnimationEnd={() =>
        dispatch({ type: "cell/error-finished", payload: { cell: props.cell } })
      }
    >
      <span>{cell.error || cell.value}</span>
    </div>
  );
}

export default SudokuCell;
