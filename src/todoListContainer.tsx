import { connect } from "react-redux";

import { toggleTodoStatus, deleteTodo } from "./actionCreators";
import {
  Todo,
  // TodoState,
  TodoListStateProps,
  ToggleTodoDispatchProps,
  Views
} from "./types";

import { AppState } from "./rootReducer";

import TodoList from "./todoList";

const _toggleView = (todos: Todo[], view: string) => {
  switch (view) {
    case Views.ACTIVE:
      return todos.filter(item => !item.complete);
    case Views.COMPLETE:
      return todos.filter(item => item.complete);
    default:
      return todos;
  }
};

const mapState = (state: AppState): TodoListStateProps => {
  let { todos, view } = state.inputReducer;
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
