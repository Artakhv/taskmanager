import * as api from "../api/getTasksApi";

export const GET_TASK_ACTION_START = "GET_TASK_ACTION_START";
export const GET_TASK_ACTION_SUCCESS = "GET_TASK_ACTION_SUCCESS";
export const GET_TASK_ACTION_FAIL = "GET_TASK_ACTION_FAIL";

export const getTasksActions = () => async dispatch => {
  dispatch({
    type: GET_TASK_ACTION_START
  });
  try {
    const data = await api.getTasksApi();
    dispatch({
      type: GET_TASK_ACTION_SUCCESS,
      data
    });
  } catch (error) {
    dispatch({
      type: GET_TASK_ACTION_FAIL,
      error
    });
  }
};
