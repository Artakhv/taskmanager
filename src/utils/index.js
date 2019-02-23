import axios from "axios";
import { serverIp } from "../config";

export default () => {
  const service = axios.create({
    baseURL: `${serverIp}`,
    headers: {
      "Content-Type": "application/json"
    }
  });
  service.interceptors.response.use(
    response => response,
    error => {
      throw error;
    }
  );
  return service;
};
