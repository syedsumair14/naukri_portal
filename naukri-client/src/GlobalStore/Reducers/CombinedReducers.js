import { combineReducers } from "redux";
import { dummyReducer } from "./Dummy";

const rootReducer = combineReducers({ dummyReducer });
export default rootReducer;
