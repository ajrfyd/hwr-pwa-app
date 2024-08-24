import axios from 'axios';
const { VITE_API_ENDPOINT } = import.meta.env;

const apiInstance = axios.create({
  baseURL: VITE_API_ENDPOINT,
  timeout: 3000,
  withCredentials: true
});

apiInstance.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err.response ? err.response : err)
);

export default apiInstance;
