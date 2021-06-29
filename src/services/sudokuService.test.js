import sudokuService from "./sudokuService";

// https://jestjs.io/pt-BR/docs/getting-started
test("Gen Sudoku data Test", () => {
  const data = sudokuService.get({ level: sudokuService.levels.INSANE });
  expect(Array.isArray(data)).toBeTruthy();
  data.forEach((e) => {
    e.forEach((c) => {
      expect(c).toHaveProperty("lin");
      expect(c).toHaveProperty("col");
      expect(c).toHaveProperty("i");
      expect(c).toHaveProperty("value");
      expect(c).toHaveProperty("solution");
      expect(c).toHaveProperty("locked");
    });
  });
  console.log(data);
});
