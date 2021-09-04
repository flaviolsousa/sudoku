import React from "react";
import { useSudokuContext } from "../../contexts/SudokuContext";

import "./style.css";
import SudokuCell from "../SudokuCell";

function SudokuMatrix(props) {
  const {
    state: { model, control },
    dispatch,
  } = useSudokuContext();

  return (
    <div className="SudokuMatrix">
      {model.map((lin) =>
        lin.map((cell) => (
          <SudokuCell
            key={cell.i}
            cell={cell}
            model={model}
            control={control}
            cellClicked={() =>
              dispatch({ type: "cell/clickeds", payload: cell })
            }
          />
        ))
      )}
    </div>
  );
}

export default SudokuMatrix;
