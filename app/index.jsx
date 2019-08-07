import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { storeConfig } from "./redux/store.jsx";

const store = storeConfig();

console.log("store", store);

let storeSubscribe = store.subscribe(() => {
  console.log(store.getState());
});

import App from "./react/components/app.jsx";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
