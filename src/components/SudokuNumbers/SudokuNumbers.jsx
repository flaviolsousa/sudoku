import React from "react";
import classnames from "classnames";
import { useSudokuContext } from "../../contexts/SudokuContext";

import "./style.css";

const remainingNumbers = (model, n) => {
  return (
    9 -
    model.reduce(
      (a, line) => a + line.filter((v) => v.value === "" + n).length,
      0
    )
  );
};

function SudokuNumbers() {
  const {
    state: { numbers, model, control },
    dispatch,
  } = useSudokuContext();

  function createNumber(n) {
    const r = remainingNumbers(model, n);
    return (
      <div
        className={classnames("SudokuNumber", `SudokuNumber-${n}`, {
          "SudokuNumber-selected": control.selected === n,
          "SudokuNumber-finished": r === 0,
        })}
        key={n}
        onClick={() =>
          dispatch({ type: "number/clicked", payload: { number: n } })
        }
      >
        <span>{n}</span>
        <sub>{r}</sub>
      </div>
    );
  }

  return (
    <div className="SudokuNumbers">{numbers.map((n) => createNumber(n))}</div>
  );
}

export default SudokuNumbers;
