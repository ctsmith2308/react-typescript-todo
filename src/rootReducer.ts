import { Todo, TodoState, UserInputAction, CompleteTodoAction } from "./types";

export const initialState: TodoState = {
  userInput: "",
  all: [],
  counter: 0
};

type TodoActionTypes = UserInputAction & CompleteTodoAction;

const rootReducer = (
  state = initialState,
  action: TodoActionTypes
): TodoState => {
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
    case "TOGGLE_TODO_STATUS":
      return {
        ...state,
        all: state.all.map((item: Todo) =>
          item.id === action.id
            ? { ...item, complete: !item.complete }
            : { ...item }
        )
      };
    default:
      return state;
  }
};

export default rootReducer;
