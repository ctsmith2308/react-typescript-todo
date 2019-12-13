import React from "react";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Input from "./inputPropWrapper";
import TodoListContainer from "./listContainer";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Input />
      <TodoListContainer />
    </Provider>
  );
};

export default App;
