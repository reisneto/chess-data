import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk'
import rootReducer from "../reducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

const middlewares = [
  thunk,
]

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
);

export default store;
