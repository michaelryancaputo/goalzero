import axios from "axios";

export const fetchState = () => {
  return axios.get("http://192.168.1.21/state");
};
