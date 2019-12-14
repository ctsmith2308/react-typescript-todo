import { ITodoRootState, initialState } from "./rootReducer";

export interface IHandleUserInput {
  type: string;
  userInput: string;
}

type TodoInputActionType = IHandleUserInput;

const inputReducer = (state = initialState, action: TodoInputActionType) => {
  switch (action.type) {
    case "INPUT_CHANGED":
      return {
        ...state,
        userInput: action.userInput
      };
    case "ADD_TODO":
      return {
        ...state,
        userInput: "",
        all: [
          ...state.all,
          { id: state.counter++, item: action.userInput, complete: false }
        ]
      };
    default:
      return state;
  }
};

export default inputReducer;
