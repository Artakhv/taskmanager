import { combineReducers } from "redux";

import {
  GET_TASK_ACTION_START,
  GET_TASK_ACTION_SUCCESS,
  GET_TASK_ACTION_FAIL
} from "../actions/getTasksActions";

function getTasksReducer() {
  const initialState = {
    isLoading: false,
    tasks: [],
    error: false
  };

  return (state = initialState, { type, data, error }) => {
    switch (type) {
      case GET_TASK_ACTION_START:
        return { ...state, isLoading: true };
      case GET_TASK_ACTION_SUCCESS:
        return { ...state, isLoading: false, tasks: data.message.tasks };
      case GET_TASK_ACTION_FAIL:
        return { ...state, isLoading: false, error: error };
      default:
        return state;
    }
  };
}

export default combineReducers({
  taskData: getTasksReducer()
});
