// import React from "react";
import { connect } from "react-redux";

import TodoList from "./todo";

import { toggle_completed_status } from "./actionCreators";
import { ITodo, ITodoRootState } from "./rootReducer";

export interface IStateProps {
  all: ITodo[];
}

interface ICompleteTodo {
  type: string;
  id: number;
}

interface IToggleComplete {
  (id: number): ICompleteTodo;
}

export interface IDispatchProps {
  toggleCompletedStatus: IToggleComplete;
}

const mapState = ({ all }: ITodoRootState) => {
  return {
    all
  };
};

const mapDispatch = {
  toggleCompletedStatus: toggle_completed_status
};


export default connect(mapState, mapDispatch)(TodoList);

// export default connector(TodoList);
