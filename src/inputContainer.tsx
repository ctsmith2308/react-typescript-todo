import { connect } from "react-redux";

import { ITodoRootState } from "./rootReducer";
import { handle_inputted_todo } from "./actionCreators";
import Input from "./input";

const mapState = ({ userInput }: ITodoRootState) => {
  return {
    userInput: userInput
  };
};

const mapDispatch = {
  handle_inputted_todo
};

export default connect(mapState, mapDispatch)(Input);
