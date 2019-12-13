import React from "react";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

import AnotherComponent from "./inputPropWrapper";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AnotherComponent />
    </Provider>
  );
};

export default App;
