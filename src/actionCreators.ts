export const handle_inputted_todo = (userInput: string, addTodo = false) => ({
  type: addTodo ? "ADD_TODO" : "INPUT_CHANGED",
  userInput
});
