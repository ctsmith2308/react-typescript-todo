import React from "react";
import { HandleUserInput } from "./inputReducer";

interface IStateProps {
  userInput: string;
}

interface IInputHandler {
  (userInput: string, submitTodo?: boolean): HandleUserInput;
}

interface IDispatchProps {
  handle_inputted_todo: IInputHandler;
}

type InputProps = IStateProps & IDispatchProps;

const Input = ({ userInput, handle_inputted_todo }: InputProps) => {
  return (
    <div className="todo-input-container">
      <form
        onSubmit={e => {
          e.preventDefault();
          handle_inputted_todo(userInput, true);
        }}
      >
        <input
          className="todo-input"
          type="text"
          placeholder="What needs to be done?"
          value={userInput}
          onChange={e => handle_inputted_todo(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Input;
