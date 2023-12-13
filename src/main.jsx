import React from "react";
import ReactDOM from "react-dom/client";
import App from "./View/App.jsx";

import { Provider } from "react-redux";
import { store } from "./Buisnes/store.js";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
