import React from "react";
import Routes from "./Routes";
import configureStore from "./GlobalStore/store";
import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";

const store = configureStore();

function App() {
  return (
    <>
      <Provider store={store}>
        <ToastProvider autoDismiss autoDismissTimeout={3000}>
          <Routes />
        </ToastProvider>
      </Provider>
    </>
  );
}

export default App;
