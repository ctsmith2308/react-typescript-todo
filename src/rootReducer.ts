import {
  Todo,
  TodoState,
  UserInputAction,
  TodoAction,
  ViewAction
} from "./types";

export const initialState: TodoState = {
  userInput: "",
  todos: [],
  counter: 0,
  view: ""
};

type TodoActionTypes = UserInputAction & TodoAction & ViewAction;

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
        todos: [
          ...state.todos,
          { id: state.counter++, item: action.userInput, complete: false }
        ]
      };
    case "TOGGLE_TODO_STATUS":
      return {
        ...state,
        todos: state.todos.map((item: Todo) =>
          item.id === action.id
            ? { ...item, complete: !item.complete }
            : { ...item }
        )
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((item: Todo) => item.id !== action.id)
      };
    case "TOGGLE_VIEW":
      return {
        ...state,
        view: action.view
      };
    default:
      return state;
  }
};

export default rootReducer;
