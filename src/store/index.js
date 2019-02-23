import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "../reducers";

const configureStore = () => {
  const middlewares = [thunk];
  const store = createStore(reducers, applyMiddleware(...middlewares));

  return store;
};

export default configureStore();
