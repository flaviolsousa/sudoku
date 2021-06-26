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

    sudoku.instance.print_board(challenge);
    sudoku.instance.print_board(solution);

    // const aChallenge = [...sudoku.generator.generate(level)];
    // const aSolution = [...sudoku.solver.solve(challenge)];

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
          challenge: challenge[i].replace(".", ""),
          solution: solution[i],
        });
      }
    }

    // const data = {
    //   challenge: sudokuLineToData(challenge),
    //   solution: sudokuLineToData(solution),
    // };
    console.log(data);

    return data;
  }
}

export default new SudokuService();
