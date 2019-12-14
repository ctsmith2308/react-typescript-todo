import React from "react";
import "./App.css";
import { Provider } from "react-redux";

import Input from "./inputContainer";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Input />
    </Provider>
  );
};

export default App;

// INTERESTING LINK TO FOLLOW!!!
//https://joshuaavalon.io/create-type-safe-react-redux-store-with-typescript
