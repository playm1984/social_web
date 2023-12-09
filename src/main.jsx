import React from "react";
import ReactDOM from "react-dom/client";
import App from "./View/App.jsx";

import { Provider } from "react-redux";
import { store } from "./Buisnes/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
