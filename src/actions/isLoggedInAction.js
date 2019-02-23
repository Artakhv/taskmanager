export const IS_LOGGED_IN_START = "IS_LOGGED_IN_START";
export const IS_LOGGED_IN_SUCCESS = "IS_LOGGED_IN_SUCCESS";
export const IS_LOGGED_IN_FAIL = "IS_LOGGED_IN_FAIL";

export const isLoggedIn = () => async dispatch => {
  dispatch({
    type: IS_LOGGED_IN_START
  });
  try {
    dispatch({
      type: IS_LOGGED_IN_SUCCESS,
      data: []
    });
  } catch (error) {
    dispatch({
      type: IS_LOGGED_IN_FAIL,
      error
    });
  }
};
