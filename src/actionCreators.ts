export const handle_todo = (input: string) => ({
  type: "HANDLE_TODO",
  payload: input
});

export const add_todo = (todo: string) => ({
  type: "ADD_TODO",
  payload: todo
});
