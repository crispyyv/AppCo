import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Users } from "./Pages/Users";
import { UserGraphic } from "./Pages/UserGraphic";

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/users" component={Users} exact />
      <Route path="/users/:id" component={UserGraphic} />
    </Switch>
  );
};
