import { connect } from "react-redux";

import { InputStateProps, InputDispatchProps } from "./types";
import { handleInput } from "./actionCreators";

import Input from "./input";
import { AppState } from "./rootReducer";

const mapState = (state: AppState): InputStateProps => {
  const { userInput } = state.inputReducer;
  return {
    userInput
  };
};

const mapDispatch: InputDispatchProps = {
  handleInput
};

const connector = connect(mapState, mapDispatch);

export default connector(Input);
