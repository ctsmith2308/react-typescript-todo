import { UserInputAction, TodoAction, ViewAction } from "./types";

export const handleInput = (
  userInput: string,
  addTodo?: boolean
): UserInputAction => ({
  type: addTodo ? "ADD_TODO" : "INPUT_CHANGED",
  userInput
});

export const toggleTodoStatus = (id: number): TodoAction => ({
  type: "TOGGLE_TODO_STATUS",
  id
});

export const deleteTodo = (id: number): TodoAction => ({
  type: "DELETE_TODO",
  id
});

export const toggleView = (view: string): ViewAction => ({
  type: "TOGGLE_VIEW",
  view
});
