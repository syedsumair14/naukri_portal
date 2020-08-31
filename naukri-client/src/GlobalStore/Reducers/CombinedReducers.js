import { combineReducers } from "redux";
import { dummyReducer } from "./Dummy";
import { notificationsReducer } from "./ToastReducer";
import { saveLogin } from "./loginReducer";
import { employmentReducer } from "./EmploymentReducer";

const rootReducer = combineReducers({
  dummyReducer,
  notificationsReducer,
  saveLogin,
  employmentReducer,
});
export default rootReducer;
