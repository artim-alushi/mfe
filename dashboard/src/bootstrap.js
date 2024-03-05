import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

// Mount function to start up the app
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

// if we are in dev and in isolations,
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("_dashboard-dev-root");
  if (el) {
    mount(el);
  }
}

// we are running through contanier
// and we should export the mount function

export { mount };
