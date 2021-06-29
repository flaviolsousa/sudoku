import { EventEmitter } from "events";
import sudokuService from "../services/sudokuService";
import sudokuControlService from "../services/sudokuControlService";

export default class SudokuModel extends EventEmitter {
  constructor({ level = "medium", mode = "numberFirst" } = {}) {
    super();
    this.level = level;
    this.matrix = sudokuService.get({ level });
    this.control = { mode };
    sudokuControlService.init(this);
  }

  emitUpdated() {
    this.emit("updated", { ...this });
  }

  newMatrixByLevel({ level }) {
    this.level = level;
    this.matrix = sudokuService.get({ level });
    this.emitUpdated();
  }

  setMode({ mode }) {
    this.control = { mode };
    sudokuControlService.init(this);
    this.emitUpdated();
  }
}
