import { connect } from "react-redux";

import { toggleCompletedStatus } from "./actionCreators";
import {
  TodoState,
  TodoListStateProps,
  ToggleTodoDispatchProps
} from "./types";

import TodoList from "./todoList";

const mapState = ({ all }: TodoState): TodoListStateProps => {
  return {
    all
  };
};

const mapDispatch: ToggleTodoDispatchProps = {
  toggleCompletedStatus
};

export default connect(mapState, mapDispatch)(TodoList);
