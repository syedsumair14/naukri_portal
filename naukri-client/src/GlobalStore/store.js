import thunkMiddleware from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./Reducers/CombinedReducers";

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);
  return store;
}
