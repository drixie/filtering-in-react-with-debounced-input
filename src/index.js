import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { setGlobal } from "reactn";

import App from "./App";

const rootElement = document.getElementById("root");

// setGlobal({
//   isLoading: false
// });

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
