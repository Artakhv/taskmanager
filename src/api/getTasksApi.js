import axios from "../utils";

export const getTasksApi = () => {
  return axios()
    .get("/?developer=Name")
    .then(res => {
      return Promise.resolve(res.data);
    });
};
