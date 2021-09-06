import handler from "./SudokuHandler";

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
      console.log("##### level/clicked");
      return {
        ...state,
        level: action.payload,
        model: handler.get(action.payload),
      };
    }
    default:
      return state;
  }
};

const reducerAudit = (state, action) => {
  // console.log("event IN : state", state, " action", action);
  const s = reducer(state, action);
  console.log("event OUT: state", state);
  return s;
};

export default reducerAudit;
