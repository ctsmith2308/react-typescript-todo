// import React from "react";

import { connect } from "react-redux";

import { ViewMapDispatch } from "./types";
import { toggleView } from "./actionCreators";
import ViewButtons from "./viewButtons";

const viewMapDispatch: ViewMapDispatch = {
  toggleView
};

export default connect(null, viewMapDispatch)(ViewButtons);
