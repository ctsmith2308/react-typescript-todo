import React from "react";
import { connect } from "react-redux";

interface RootState {
  isOn: boolean;
}

interface StateProps {
  isOn: boolean;
}

interface DispatchProps {
  toggleOn: () => void;
}

type Props = StateProps & DispatchProps;

const mapState = (state: RootState) => ({
  isOn: state.isOn
});

const mapDispatch = {
  toggleOn: () => ({ type: "TOGGLE_IS_ON" })
};

const MyComponent = (props: Props) => (
  <div>
    <button onClick={props.toggleOn}>
      Toggle is {props.isOn ? "ON" : "OFF"}
    </button>
  </div>
);

export default connect<StateProps, DispatchProps>(
  mapState,
  mapDispatch
)(MyComponent);
