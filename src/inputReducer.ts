import {
  Todo,
  TodoState,
  UserInputAction,
  TodoAction,
  ViewAction,
  ReducerActions
} from "./types";

export const initialState: TodoState = {
  userInput: "",
  todos: [],
  counter: 0,
  view: ""
};

type TodoActionTypes = UserInputAction & TodoAction & ViewAction;

const inputReducer = (
  state: TodoState = initialState,
  action: TodoActionTypes
): TodoState => {
  switch (action.type) {
    case ReducerActions.INPUT_CHANGED:
      return {
        ...state,
        userInput: action.userInput
      };
    case ReducerActions.ADD_TODO:
      return {
        ...state,
        userInput: "",
        todos: [
          ...state.todos,
          { id: state.counter++, item: action.userInput, complete: false }
        ]
      };
    case ReducerActions.TOGGLE_TODO_STATUS:
      return {
        ...state,
        todos: state.todos.map((item: Todo) =>
          item.id === action.id
            ? { ...item, complete: !item.complete }
            : { ...item }
        )
      };
    case ReducerActions.UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((item: Todo) =>
          item.id === action.id
            ? { ...item, item: action.userInput }
            : { ...item }
        )
      };
    case ReducerActions.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item: Todo) => item.id !== action.id)
      };
    case ReducerActions.TOGGLE_VIEW:
      return {
        ...state,
        view: action.view
      };
    default:
      return state;
  }
};

export default inputReducer;
