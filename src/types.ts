// State Types
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
export type TodoListStateProps = {
  all: Todo[];
};

export type CompleteTodoAction = {
  type: string;
  id: number;
};

export type ToggleTodoDispatchProps = {
  toggleCompletedStatus: (id: number) => CompleteTodoAction;
};
