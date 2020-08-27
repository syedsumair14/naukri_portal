import { combineReducers } from "redux";
import { dummyReducer } from "./Dummy";
import { notificationsReducer } from "./ToastReducer";
import { saveLogin } from "./loginReducer";

const rootReducer = combineReducers({
  dummyReducer,
  notificationsReducer,
  saveLogin,
});
export default rootReducer;
