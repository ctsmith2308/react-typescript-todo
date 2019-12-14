import { UserInputAction, CompleteTodoAction } from "./types";

export const handleInputTodo = (
  userInput: string,
  addTodo?: boolean
): UserInputAction => ({
  type: addTodo ? "ADD_TODO" : "INPUT_CHANGED",
  userInput
});

export const toggleCompletedStatus = (id: number): CompleteTodoAction => ({
  type: "TOGGLE_TODO_STATUS",
  id
});
