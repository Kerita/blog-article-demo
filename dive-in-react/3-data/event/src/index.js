import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Father from "./Father";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Father />
  </StrictMode>,
  rootElement
);
