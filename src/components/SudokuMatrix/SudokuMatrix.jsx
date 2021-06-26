import React, { Component } from "react";
import "./style.css";
import SudokuCell from "../SudokuCell";

class SudokuMatrix extends Component {
  render() {
    return (
      <div className="SudokuMatrix">
        {this.props.data.map((lin) =>
          lin.map((cell) => <SudokuCell key={cell.i} data={cell} />)
        )}
      </div>
    );
  }
}

export default SudokuMatrix;
