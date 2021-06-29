export default class SudokuCellModel {
  constructor({ lin, col, i, locked, value, solution }) {
    this.lin = lin;
    this.col = col;
    this.i = i;
    this.locked = locked;
    this.value = value;
    this.solution = solution;
  }
}
