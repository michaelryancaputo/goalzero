import axios from "axios";

export const fetchState = ({ queryKey }) => {
  return axios.get(`http://${queryKey[1]}/${queryKey[0]}`);
};

export const mutateState = (queryKey) => (data) => {
  console.log(data);
  return axios.post(`http://${queryKey[1]}/${queryKey[0]}`, data);
};
