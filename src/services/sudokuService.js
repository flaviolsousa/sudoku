import SudokuToolCollection from "sudokutoolcollection";

const sudoku = SudokuToolCollection();

const levels = {
  EASY: "easy",
  MEDIUM: "medium",
  HARD: "hard",
  VERY_HARD: "very-hard",
  INSANE: "insane",
  INHUMAN: "inhuman",
};

class SudokuService {
  get levels() {
    return levels;
  }

  get({ level }) {
    console.log("level:", level);
    const challenge = sudoku.generator.generate(level);
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
        data[lin].push({
          lin,
          col,
          i,
          locked: challenge[i] !== ".",
          value: challenge[i],
          solution: solution[i],
        });
      }
    }

    // console.log(data);

    return data;
  }
}

export default new SudokuService();
