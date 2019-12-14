import { connect } from "react-redux";

import { toggleTodoStatus, deleteTodo } from "./actionCreators";
import {
  Todo,
  TodoState,
  TodoListStateProps,
  ToggleTodoDispatchProps
} from "./types";

import TodoList from "./todoList";

const _toggleView = (todos: Todo[], view: string) => {
  switch (view) {
    case "active":
      return todos.filter(item => !item.complete);
    case "complete":
      return todos.filter(item => item.complete);
    default:
      return todos;
  }
};

const mapState = ({ todos, view }: TodoState): TodoListStateProps => {
  todos = _toggleView(todos, view);
  return {
    todos,
    view
  };
};

const mapDispatch: ToggleTodoDispatchProps = {
  toggleTodoStatus,
  deleteTodo
};

export default connect(mapState, mapDispatch)(TodoList);
