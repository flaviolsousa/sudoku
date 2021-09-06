import React from "react";
import classnames from "classnames";
import { useSudokuContext } from "../../contexts/SudokuContext";

import "./style.css";

function SudokuCell(props) {
  const {
    state: { levels },
    dispatch,
  } = useSudokuContext();
  return (
    <div className="SudokuListLevels">
      {levels.options.map((level) => (
        <button
          className={classnames("SudokuLevelOption", {
            "SudokuLevelOption-selected": level === levels.selected,
          })}
          onClick={() =>
            dispatch({ type: "level/clicked", payload: { level } })
          }
        >
          {level}
        </button>
      ))}
    </div>
  );
}

//

export default SudokuCell;
