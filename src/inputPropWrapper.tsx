import { connect } from "react-redux";

import Input from "./input";

// This is redundant
interface ITodo {
  id: number;
  item: string;
  complete: boolean;
}

// This is redundant
interface IRootState {
  currentTodo: string;
  all: ITodo[];
  // can add show completed and reuse this interface in reducer
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

const connector = connect(mapState, mapDispatch);

export default connector(Input);
