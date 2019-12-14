import { connect } from "react-redux";

import { TodoState, InputStateProps, InputDispatchProps } from "./types";
import { handleInput } from "./actionCreators";

import Input from "./input";

const mapState = (state: TodoState): InputStateProps => {
  return {
    userInput: state.userInput
  };
};

const mapDispatch: InputDispatchProps = {
  handleInput
};

const connector = connect(mapState, mapDispatch);

export default connector(Input);
