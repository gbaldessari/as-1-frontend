import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_EDUCANEXO_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


export default axiosInstance;
