import {
  Todo,
  TodoState,
  UserInputAction,
  TodoAction,
  ViewAction
} from "./types";

export const initialState: TodoState = {
  userInput: "",
  all: [],
  counter: 0,
  view: ""
};

type TodoActionTypes = UserInputAction & TodoAction & ViewAction;

const rootReducer = (
  state = initialState,
  action: TodoActionTypes
): TodoState => {
  console.log("here is the action", action);
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
    case "DELETE_TODO":
      return {
        ...state,
        all: state.all.filter((item: Todo) => item.id !== action.id)
      };
    case "TOGGLE_VIEW":
      console.log("view in switch", action.view);
      return {
        ...state,
        view: action.view
      };
    default:
      return state;
  }
};

export default rootReducer;
