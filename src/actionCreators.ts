export const handle_inputted_todo = (userInput: string, addTodo = false) => ({
  type: addTodo ? "ADD_TODO" : "INPUT_CHANGED",
  userInput
});

export const toggle_completed_status = (id: number) => ({
  type: "TOGGLE_TODO_STATUS",
  id
});
