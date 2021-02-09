import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootreducer from "./reducer";
import rootsaga from "./sagas";

const sagaMiddeware = createSagaMiddleware();

const store = createStore(
  rootreducer,
  compose(
    applyMiddleware(sagaMiddeware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
sagaMiddeware.run(rootsaga);
export default store;
