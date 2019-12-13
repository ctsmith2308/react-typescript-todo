import React from "react";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Input from "./inputPropWrapper";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Input />
    </Provider>
  );
};

export default App;
