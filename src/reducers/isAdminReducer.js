import { combineReducers } from "redux";

import {
  IS_LOGGED_IN_START,
  IS_LOGGED_IN_SUCCESS,
  IS_LOGGED_IN_FAIL
} from "../actions/isLoggedInAction";

function isAdminReducer() {
  const initialState = {
    isLoading: false,
    isAdmin: {},
    error: false
  };

  return (state = initialState, { type, data, error }) => {
    switch (type) {
      case IS_LOGGED_IN_START:
        return { ...state, isLoading: true };
      case IS_LOGGED_IN_SUCCESS:
        return { ...state, isLoading: false, isAdmin: true };
      case IS_LOGGED_IN_FAIL:
        return { ...state, isLoading: false, error: error };
      default:
        return state;
    }
  };
}

export default combineReducers({
  AdminStatement: isAdminReducer()
});
