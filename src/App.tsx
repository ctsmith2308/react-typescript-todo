import React from "react";
import "./App.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

import Input from "./inputContainer";
import TodoListContainer from "./todoListContainer";
import rootReducer from "./rootReducer";

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
