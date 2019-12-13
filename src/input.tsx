import React from "react";

interface IHandleTodo {
  type: string;
  userInput: string;
}

interface IStateProps {
  userInput: string;
}

interface IDispatchProps {
  handle_todo: (userInput: string) => IHandleTodo;
  add_todo: (userInput: string) => IHandleTodo;
}

type InputProps = IStateProps & IDispatchProps;

const Input = ({ userInput, handle_todo, add_todo }: InputProps) => {
  return (
    <div className="todo-input-container">
      <form
        onSubmit={e => {
          e.preventDefault();
          add_todo(userInput);
        }}
      >
        <input
          className="todo-input"
          type="text"
          placeholder="What needs to be done?"
          value={userInput}
          onChange={e => handle_todo(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Input;
