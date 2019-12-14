import {
  UserInputAction,
  TodoAction,
  ViewAction,
  ReducerActions
} from "./types";

export const handleInput = (
  userInput: string,
  addTodo?: boolean
): UserInputAction => ({
  type: addTodo ? ReducerActions.ADD_TODO : ReducerActions.INPUT_CHANGED,
  userInput
});

export const toggleTodoStatus = (id: number): TodoAction => ({
  type: ReducerActions.TOGGLE_TODO_STATUS,
  id
});

export const deleteTodo = (id: number): TodoAction => ({
  type: ReducerActions.DELETE_TODO,
  id
});

export const toggleView = (view: string): ViewAction => ({
  type: ReducerActions.TOGGLE_VIEW,
  view
});
