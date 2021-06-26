import React, { Component } from "react";
import "./style.css";

class SudokuCell extends Component {
  _classnames() {
    const cn = [
      "SudokuCell",
      `SudokuCell-col-${this.props.data.col}`,
      `SudokuCell-lin-${this.props.data.lin}`,
    ];
    if (!!this.props.data.challenge) cn.push("SudokuCell-initial");
    return cn.join(" ");
  }
  render() {
    return (
      <div className={this._classnames()}>
        <span>{this.props.data.challenge}</span>
      </div>
    );
  }
}

export default SudokuCell;
