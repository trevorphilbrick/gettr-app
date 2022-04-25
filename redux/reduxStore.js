import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import listitems from "./reducers/listReducer.js";
import listGroup from "./reducers/listGroupReducer.js";

const rootReducer = combineReducers({ listitems, listGroup });

export const store = createStore(rootReducer /*, applyMiddleware(logger)*/);
