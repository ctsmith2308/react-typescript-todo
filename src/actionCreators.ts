import { UserInputAction } from "./types";

export const handleInputTodo = (
  userInput: string,
  addTodo?: boolean
): UserInputAction => ({
  type: addTodo ? "ADD_TODO" : "INPUT_CHANGED",
  userInput
});

export const toggle_completed_status = (id: number) => ({
  type: "TOGGLE_TODO_STATUS",
  id
});
