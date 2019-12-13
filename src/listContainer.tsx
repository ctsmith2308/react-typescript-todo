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
  complete_todo: (id: number) => ICompleteTodo; // make this generic function
  re_add_todo: (id: number) => ICompleteTodo; // should be a different type - more generic maybe?
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

// extract this anonymous to other function and re-use
const mapDispatch = {
  complete_todo: (id: number) => ({
    type: "COMPLETE_TODO",
    payload: id
  }),
  re_add_todo: (id: number) => ({
    type: "RE_ADD_TODO",
    payload: id
  })
};

const mapTodos = ({ all, complete_todo, re_add_todo }: ListProps) => {
  return all.map(todo => (
    <li key={todo.id}>
      <button onClick={e => complete_todo(todo.id)}>{todo.item}</button>
    </li>
  ));
};

const TodoListContainer = (props: ListProps) => {
  return <ul className="todo-list-container">{mapTodos(props)}</ul>;
};

const connector = connect(mapState, mapDispatch);

export default connector(TodoListContainer);
