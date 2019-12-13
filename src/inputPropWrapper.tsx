import { connect } from "react-redux";

import { IInputRootState } from "./inputReducer";
import { handle_inputted_todo } from "./actionCreators";
import Input from "./input";

const mapState = ({ userInput }: IInputRootState) => {
  return {
    userInput: userInput
  };
};

const mapDispatch = {
  handle_inputted_todo
};

export default connect(mapState, mapDispatch)(Input);
