import React, { Component } from "react";
import "./style.css";
import SudokuMatrix from "../../components/SudokuMatrix";
import sudokuService from "../../services/sudokuService";

class Sudoku extends Component {
  constructor() {
    super();
    const sudoku = sudokuService.get({ level: sudokuService.levels.MEDIUM });
    this.state = {
      data: sudoku,
    };
  }

  _generate(level) {
    const sudoku = sudokuService.get({ level: sudokuService.levels[level] });
    this.setState({ data: sudoku });
  }

  _buttonLevel(level) {
    return (
      <button
        onClick={function () {
          this._generate(level);
        }.bind(this)}
      >
        {level}
      </button>
    );
  }

  _generateLevels() {
    return (
      <>
        {this._buttonLevel("EASY")}
        {this._buttonLevel("MEDIUM")}
        {this._buttonLevel("HARD")}
        {this._buttonLevel("VERY_HARD")}
        {this._buttonLevel("INSANE")}
        {this._buttonLevel("INHUMAN")}
      </>
    );
  }

  render() {
    return (
      <div className="Sudoku">
        <SudokuMatrix data={this.state.data} />
        {this._generateLevels()}
      </div>
    );
  }
}

export default Sudoku;
