import React from "react";
import "./App.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

import Input from "./inputPropWrapper";
import TodoListContainer from "./listContainer";
import rootReducer from "./inputReducer";

const store = createStore(rootReducer, applyMiddleware(logger));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Input />
      <TodoListContainer />
    </Provider>
  );
};

export default App;
