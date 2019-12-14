// State Types
export type Todo = {
  id: number;
  item: string;
  complete: boolean;
};

export type TodoState = {
  userInput: string;
  todos: Todo[];
  counter: number;
  view: string;
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
  handleInput: (userInput: string, addTodo?: boolean) => UserInputAction;
};

// Toggle Types and ActionTypes
export type TodoListStateProps = {
  todos: Todo[];
  view: string;
};

export type TodoAction = {
  type: string;
  id: number;
};

export type ToggleTodoDispatchProps = {
  toggleTodoStatus: (id: number) => TodoAction;
  deleteTodo: (id: number) => TodoAction;
};

// Toggle View Types and Actions
export type ViewAction = {
  type: string;
  view: string;
};

export type ViewMapDispatch = {
  toggleView: (view: string) => ViewAction;
};

// Enums
export enum Views {
  ALL = "ALL",
  ACTIVE = "ACTIVE",
  COMPLETE = "COMPLETE"
}

export enum ReducerActions {
  INPUT_CHANGED = "INPUT_CHANGED",
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO_STATUS = "TOGGLE_TODO_STATUS",
  DELETE_TODO = "DELETE_TODO",
  TOGGLE_VIEW = "TOGGLE_VIEW"
}
