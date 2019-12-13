import React from "react";
// This is redundant
interface IHandleTodo {
  type: string;
  payload: any;
}

interface IStateProps {
  currentTodo: string;
}

interface IDispatchProps {
  handle_todo: (input: string) => IHandleTodo; // Can make these generic functions
  add_todo: (todo: string) => IHandleTodo;
}

type InputProps = IStateProps & IDispatchProps;

const Input = ({ currentTodo, handle_todo, add_todo }: InputProps) => {
  return (
    <div className="todo-input-container">
      <form
        onSubmit={e => {
          e.preventDefault();
          add_todo(currentTodo);
        }}
      >
        <input
          className="todo-input"
          type="text"
          placeholder="What needs to be done?"
          value={currentTodo}
          onChange={e => handle_todo(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Input;
