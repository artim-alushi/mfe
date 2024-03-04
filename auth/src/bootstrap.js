import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

// Mount function to start up the app
const mount = (
  el,
  { onNavigate, defaultHistory, initialPath, onSignIn } = {}
) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App onSignIn={onSignIn} history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathName }) {
      const { pathname } = history.location;
      if (pathname !== nextPathName) {
        history.push(nextPathName);
      }
    },
  };
};

// if we are in dev and in isolations,
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("_auth-dev-root");
  if (el) {
    mount(el, { defaultHistory: createBrowserHistory() });
  }
}

// we are running through contanier
// and we should export the mount function

export { mount };
