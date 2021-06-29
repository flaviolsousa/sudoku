import React from "react";
import classnames from "classnames";

import "./style.css";

function SudokuNumbers(props) {
  const remainingNumbers = (n) => {
    return (
      9 -
      props.model.matrix.reduce(
        (a, line) => a + line.filter((v) => v.value === "" + n).length,
        0
      )
    );
  };

  const createNumber = (n) => {
    return (
      <div
        className={classnames("SudokuNumber", `SudokuNumber-${n}`, {
          "SudokuNumber-selected": props.model.control.selected === n,
        })}
        key={n}
        onClick={() => props.numberClicked(n)}
      >
        <span>{n}</span>
        <sub>{remainingNumbers(n)}</sub>
      </div>
    );
  };
  console.log("SudokuNumber re-render");
  return (
    <div className="SudokuNumbers">
      {[...Array(9).keys()].map((o) => createNumber(`${o + 1}`))}
    </div>
  );
}

export default SudokuNumbers;
