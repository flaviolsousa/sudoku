import SudokuToolCollection from "sudokutoolcollection";

const sudoku = SudokuToolCollection();

export const levels = {
  EASY: "easy",
  MEDIUM: "medium",
  HARD: "hard",
  VERY_HARD: "very-hard",
  INSANE: "insane",
  INHUMAN: "inhuman",
};

function _modelToString(model) {
  return model.reduce(
    (a, v) => (a += v.reduce((a, v) => (a += v.value), "")),
    ""
  );
}

function _modelsEquals(m1, m2) {
  let i = m1.length;
  while (--i) {
    if (m1.charAt(i) !== "." && m1.charAt(i) !== m2.charAt(i)) return false;
  }
  return true;
}

function _setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}

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
      data[lin].push({
        lin,
        col,
        i,
        locked: challenge[i] !== ".",
        editable: challenge[i] === ".",
        value: challenge[i],
        solution: solution[i],
        error: false,
      });
    }
  }

  return data;
};

const setOnCell = (model, cell, value) => {
  const challenge = _modelToString(model);
  const newChallenge = _setCharAt(
    challenge,
    cell.lin * model.length + cell.col,
    value
  );
  const solution = sudoku.solver.solve(newChallenge);

  // return _modelsEquals(newChallenge, solution)
  return solution
    ? { ...cell, value, error: false, editable: true }
    : { ...cell, value, error: true, editable: false };
};

export const service = {
  levels,
  get,
  setOnCell,
};

export default service;
