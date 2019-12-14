import React from "react";
import { InputStateProps, InputDispatchProps } from "./types";

type InputProps = InputStateProps & InputDispatchProps;

const Input = ({ userInput, handleInput }: InputProps) => {
  return (
    <div className="todo-input-container">
      <form
        onSubmit={e => {
          e.preventDefault();
          const addTodo = true;
          handleInput(userInput, addTodo);
        }}
      >
        <input
          className="todo-input"
          type="text"
          placeholder="What needs to be done?"
          value={userInput}
          onChange={e => handleInput(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Input;
