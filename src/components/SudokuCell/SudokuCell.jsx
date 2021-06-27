import React, { Component } from "react";
import "./style.css";

class SudokuCell extends Component {
  _classnames() {
    const cn = [
      "SudokuCell",
      `SudokuCell-col-${this.props.data.col}`,
      `SudokuCell-lin-${this.props.data.lin}`,
    ];
    if (this.props.data.locked) cn.push("SudokuCell-locked");
    else cn.push("SudokuCell-editable");

    if (this.props.data.value === ".") cn.push("SudokuCell-empty");

    return cn.join(" ");
  }
  render() {
    return (
      <div className={this._classnames()}>
        <span>{this.props.data.value}</span>
      </div>
    );
  }
}

export default SudokuCell;
