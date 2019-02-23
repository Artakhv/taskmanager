import { combineReducers } from "redux";
import getTasksReducer from "./getTasksReducer";
import isAdminReducer from "./isAdminReducer";

const appReducer = combineReducers({
  getTasksReducer,
  isAdminReducer
});

export default function(state, action) {
  return appReducer(state, action);
}
