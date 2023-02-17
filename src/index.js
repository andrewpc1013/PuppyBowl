import React from "react";
import ReactDOM from "react-dom/client";
import { Main } from "./components";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <Router>
    <Main />
  </Router>
);