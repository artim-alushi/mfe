import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// if we are in dev and in isolations,
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("_marketing-dev-root");
  if (el) {
    mount(el);
  }
}

// we are running through contanier
// and we should export the mount function

export { mount };
