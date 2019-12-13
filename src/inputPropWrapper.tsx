import { connect } from "react-redux";
import React from "react";

// NOTE: Cannot connect a component that is imported???

interface IStateProps {
  currentTodo: string;
}

interface IHandleTodo {
  type: string;
  payload: any;
}

interface IDispatchProps {
  handle_todo: (input: string) => IHandleTodo;
  add_todo: (todo: string) => IHandleTodo;
}

type InputProps = IStateProps & IDispatchProps;

interface ITodo {
  id: number;
  item: string;
  completed: boolean;
}

interface IRootState {
  currentTodo: string;
  allTodos: ITodo[];
}

const mapState = (state: IRootState) => {
  return {
    currentTodo: state.currentTodo
  };
};

const mapDispatch = {
  handle_todo: (input: string) => ({
    type: "HANDLE_TODO",
    payload: input
  }),
  add_todo: (todo: string) => ({
    type: "ADD_TODO",
    payload: todo
  })
};

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

export default connect(mapState, mapDispatch)(Input);
