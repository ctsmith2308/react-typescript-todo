import React from "react";
import { connect } from "react-redux";

interface ITodo {
  id: number;
  item: string;
  complete: boolean;
}

interface IStateProps {
  all: ITodo[];
}

// This is redundant
interface ICompleteTodo {
  type: string;
  payload: any;
}

interface IDispatchProps {
  complete_todo: (id: number) => ICompleteTodo;
}

type ListProps = IStateProps & IDispatchProps;

interface IRootState {
  all: ITodo[];
}

const mapState = (state: IRootState) => {
  return {
    all: state.all
  };
};

const mapDispatch = {
  complete_todo: (id: number) => ({
    type: "COMPLETE_TODO",
    payload: id
  })
};

const mapTodos = (all: ITodo[]) => {
  return all.map(todo => <li key={todo.id}>{todo.item}</li>);
};

const TodoListContainer = ({ all, complete_todo }: ListProps) => {
  return <ul className="todo-list-container">{mapTodos(all)}</ul>;
};

const connector = connect(mapState, mapDispatch);

export default connector(TodoListContainer);
