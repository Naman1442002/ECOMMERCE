import { createStore, applyMiddleware, compose } from "redux";
import ThunkMiddleware from "redux-thunk";
import {rootReducer} from "./Reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ThunkMiddleware))
);

export default store;
