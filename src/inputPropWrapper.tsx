import React from "react";
import { connect } from "react-redux";

interface ITodo {
  id: number;
  item: string;
  completed: boolean;
}

interface IRootState {
  currentTodo: string;
  allTodos: ITodo[];
}

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

type Props = IStateProps & IDispatchProps;

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

const Input = ({ currentTodo, handle_todo, add_todo }: Props) => (
  <div className="todo-input-container">
    <form
      onSubmit={e => {
        e.preventDefault();
        console.log("currentTodo", currentTodo);
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

export default connect<IStateProps, IDispatchProps>(
  mapState,
  mapDispatch
)(Input);
