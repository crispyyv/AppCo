import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./routes";

export const App = () => {
  const routes = useRoutes();
  return <Router>{routes}</Router>;
};
