import React from "react";
import { Route, Switch } from "react-router";

import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

const Main = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/about" exact component={About} />
    <Route exact component={NotFound} />
  </Switch>
);

export default Main;
