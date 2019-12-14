import { combineReducers } from "redux";

import inputReducer from "./inputReducer";
import todoReducer from "./todoReducer";

export interface ITodo {
  id: number;
  item: string;
  complete: boolean;
}

export interface ITodoRootState {
  userInput: string;
  all: ITodo[];
  counter: number;
}

export const initialState: ITodoRootState = {
  userInput: "",
  all: [],
  counter: 0
};

const rootReducer = combineReducers({
  inputReducer,
  todoReducer
});

export default rootReducer;
