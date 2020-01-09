import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

// Creates saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

// Checks if its in dev mode, if so adds redux logger
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

// Create store using root reducers and applying middlewares
const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Runs all sagas
sagaMiddleware.run(rootSaga);

export default store;
