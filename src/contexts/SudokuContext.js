import { useContext, useReducer, createContext } from "react";
import service from "../services/sudokuService";
import reducer from "./SudokuReducer";

const SudokuContext = createContext();

const initialState = {
  model: service.get({ level: "EASY" }),
  numbers: [...Array(9).keys()].map((o) => "" + (o + 1)),
  level: "EASY",
  control: {
    mode: "numberFirst",
  },
};

const SudokuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = { state, dispatch };

  return (
    <SudokuContext.Provider value={contextValue}>
      {children}
    </SudokuContext.Provider>
  );
};

const useSudokuContext = () => {
  const context = useContext(SudokuContext);
  if (!context) {
    throw new Error("useSudokuContext must be used within a SudokuProvider");
  }
  const { state, dispatch } = context;
  return { state, dispatch };
};

export { SudokuProvider, useSudokuContext };
