import sudokuService from "./sudokuService";

// https://jestjs.io/pt-BR/docs/getting-started
test("Gen Sudoku data Test", () => {
  const data = sudokuService.get({ level: sudokuService.levels.INSANE });
  console.log(data);
});
