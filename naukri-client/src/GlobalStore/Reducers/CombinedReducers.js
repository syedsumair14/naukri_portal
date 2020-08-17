import { combineReducers } from "redux";
import { dummyReducer } from "./Dummy";
import { notificationsReducer } from "./ToastReducer";

const rootReducer = combineReducers({ dummyReducer, notificationsReducer });
export default rootReducer;
