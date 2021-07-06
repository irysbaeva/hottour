import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancer(applyMiddleware());

const store = createStore(reducer, middleware);
export default store;
