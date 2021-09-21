import React from "react";
import { Route, Switch } from "react-router";
import * as Config from "./../constants/Config";
import HomePage from "../pages/HomePage";

const Routes = () => (
  <Switch>
    <Route path={`/${Config.HOME_PAGE}`} exact component={HomePage} />
    <Route path={`/${Config.HOME_PAGE}/:slug`} exact component={HomePage} />
  </Switch>
);

export default Routes;
