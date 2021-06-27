import React, { Component } from "react";
import "./style.css";

class SudokuNumbers extends Component {
  _remainingNumbers(n) {
    return (
      9 -
      this.props.data.reduce(
        (a, line) => a + line.filter((v) => v.value === "" + n).length,
        0
      )
    );
  }

  _createNumber(n) {
    return (
      <div className={`SudokuNumber SudokuNumber-${n}`} key={n}>
        <span>{n}</span>
        <sub>{this._remainingNumbers(n)}</sub>
      </div>
    );
  }

  render() {
    return (
      <div className="SudokuNumbers">
        {[...Array(9).keys()].map((o) => this._createNumber(o + 1))}
      </div>
    );
  }
}

export default SudokuNumbers;
