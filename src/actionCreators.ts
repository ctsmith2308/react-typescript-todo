export const handle_todo = (userInput: string) => ({
  type: "HANDLE_TODO",
  userInput
});

export const add_todo = (userInput: string) => ({
  type: "ADD_TODO",
  userInput
});
