import handler from "./SudokuHandler";
import service from "../services/sudokuService";

const reducer = (state, action) => {
  switch (action.type) {
    case "cell/clicked": {
      return handler.cellClicked({ state, action });
    }
    case "cell/error-finished": {
      return handler.cellErrorFinished({ state, action });
    }
    case "number/clicked": {
      return handler.numberClicked({ state, action });
    }
    case "level/clicked": {
      return {
        ...state,
        levels: {
          ...state.levels,
          selected: action.payload.level,
        },
        model: service.get(action.payload),
      };
    }
    default:
      return state;
  }
};

const reducerAudit = (state, action) => {
  console.log("event IN : state", state, " action", action);
  const s = reducer(state, action);
  console.log("event OUT: state", state);
  return s;
};

export default reducerAudit;
