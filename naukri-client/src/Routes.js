import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Navbar from "./Components/Navbar/Navbar";
import { Provider, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ToastProvider, useToasts } from "react-toast-notifications";
import { ToastAction } from "./GlobalStore/Actions/ToastAction";

export default function Routes() {
  const notifications = useSelector(
    ({ notificationsReducer }) => notificationsReducer
  );
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  useEffect(() => {
    if (notifications.notification === true) {
      addToast(notifications.message, { appearance: notifications.appearance });
      dispatch(ToastAction(false));
    }
  }, [notifications.notification]);

  console.log(notifications, "global");
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
