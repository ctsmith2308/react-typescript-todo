import { connect } from "react-redux";

// import TodoList from "./todo";

import { toggle_completed_status } from "./actionCreators";
import { TodoState } from "./types";

const mapState = ({ all }: TodoState) => {
  return {
    all
  };
};

const mapDispatch = {
  toggleCompletedStatus: toggle_completed_status
};
export default mapState;
// export default connect(mapState, mapDispatch)(TodoList);
