import { connect } from "react-redux";

import { handle_todo, add_todo } from "./actionCreators";
import { IRootState } from "./rootReducer";

import Input from "./input";

const mapState = (state: IRootState) => {
  return {
    currentTodo: state.currentTodo
  };
};

const mapDispatch = {
  handle_todo,
  add_todo
};

const connector = connect(mapState, mapDispatch);

export default connector(Input);
