export type Todo = {
  id: number;
  item: string;
  complete: boolean;
};

export type TodoState = {
  userInput: string;
  all: Todo[];
  counter: number;
};

//Input Types and ActionTypes
export type InputStateProps = {
  userInput: string;
};

export type UserInputAction = {
  type: string;
  userInput: string;
};

export type InputDispatchProps = {
  handleInputTodo: (userInput: string, addTodo?: boolean) => UserInputAction;
};

// Toggle Types and ActionTypes
// export type CompleteTodoAction = {
//   type: string;
//   id: number;
// };

// export type ToggleTodoDispatchProps = {
//   handleInputTodo: (id: number) => CompleteTodoAction;
// };
