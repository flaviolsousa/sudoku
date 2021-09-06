import service from "../services/sudokuService";

const numberFirst = {
  init: (state) => state,
  cellClicked: ({ state, action }) => {
    const control = state.control;
    if (!control.selected) return state;

    const cell = action.payload.cell;
    if (!cell.editable) return state;

    const model = [...state.model];

    model[cell.lin][cell.col] = service.setOnCell(
      model,
      cell,
      control.selected
    );

    return { ...state, model };
  },

  cellErrorFinished: ({ state, action }) => {
    const cell = action.payload.cell;
    const model = [...state.model];

    model[cell.lin][cell.col] = { ...cell, editable: true, error: null };

    return { ...state, model };
  },

  numberClicked: ({ state, action }) => {
    return {
      ...state,
      control: {
        ...state.control,
        selected: action.payload.number,
      },
    };
  },
};

const cellFirst = {};

const strategies = {
  numberFirst,
  cellFirst,
};

const control = {
  init: ({ state, action }) => {
    return strategies[state.control.mode].init({ state, action });
  },

  cellClicked: ({ state, action }) => {
    return strategies[state.control.mode].cellClicked({ state, action });
  },

  numberClicked: ({ state, action }) => {
    return strategies[state.control.mode].numberClicked({ state, action });
  },

  cellErrorFinished: ({ state, action }) => {
    return strategies[state.control.mode].cellErrorFinished({ state, action });
  },
};

export default control;
