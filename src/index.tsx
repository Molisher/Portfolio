import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";

import App from "./App";
import { GlobalStyle } from "./globalStyles";

render(
  <React.StrictMode>
    <HashRouter>
      <GlobalStyle />
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
