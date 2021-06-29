import SudokuToolCollection from "sudokutoolcollection";
import SudokuCellModel from "../models/SudokuCellModel";

const sudoku = SudokuToolCollection();

export const levels = {
  EASY: "easy",
  MEDIUM: "medium",
  HARD: "hard",
  VERY_HARD: "very-hard",
  INSANE: "insane",
  INHUMAN: "inhuman",
};

export const get = ({ level }) => {
  console.log("level:", level);
  const challenge = sudoku.generator.generate(levels[level]);
  const solution = sudoku.solver.solve(challenge);

  console.log(challenge);
  console.log(solution);
  // sudoku.instance.print_board(challenge);
  // sudoku.instance.print_board(solution);

  const width = 9;
  const data = [];
  for (let lin = 0; lin < width; lin++) {
    data.push([]);
    for (let col = 0; col < width; col++) {
      const i = lin * width + col;
      data[lin].push(
        new SudokuCellModel({
          lin,
          col,
          i,
          locked: challenge[i] !== ".",
          value: challenge[i],
          solution: solution[i],
        })
      );
    }
  }

  return data;
};

export const service = {
  levels,
  get,
};

export default service;
