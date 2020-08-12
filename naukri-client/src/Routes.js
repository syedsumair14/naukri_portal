import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Navbar from "./Components/Navbar/Navbar";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";

export default function Routes() {
  const globalState = useSelector((state) => console.log(state, "store"));

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
