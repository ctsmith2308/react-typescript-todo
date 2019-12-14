import { connect } from "react-redux";

import { toggleTodoStatus, deleteTodo } from "./actionCreators";
import {
  Todo,
  TodoState,
  TodoListStateProps,
  ToggleTodoDispatchProps
} from "./types";

import TodoList from "./todoList";

const _toggleView = (all: Todo[], view: string) => {
  switch (view) {
    case "active":
      return all.filter(item => !item.complete);
    case "complete":
      return all.filter(item => item.complete);
    default:
      return all;
  }
};

const mapState = ({ all, view }: TodoState): TodoListStateProps => {
  let todos = _toggleView(all, view);
  return {
    all: todos,
    view
  };
};

const mapDispatch: ToggleTodoDispatchProps = {
  toggleTodoStatus,
  deleteTodo
};

export default connect(mapState, mapDispatch)(TodoList);
