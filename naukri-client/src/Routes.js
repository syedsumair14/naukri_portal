import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Navbar from "./Components/Navbar/Navbar";

export default function Routes() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Registration} />
      </Switch>
    </>
  );
}
