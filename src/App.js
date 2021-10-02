import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import SingleProject from "./pages/SingleProject";
import "./styles/main.scss";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/project/:id">
          <SingleProject />
        </Route>
      </Switch>
    </Router>
  );
}
