import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

import Input from "./inputContainer";
import TodoList from "./todoListContainer";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Input />
      <TodoList />
    </Provider>
  );
};

export default App;

// INTERESTING LINK TO FOLLOW!!!
//https://joshuaavalon.io/create-type-safe-react-redux-store-with-typescript
