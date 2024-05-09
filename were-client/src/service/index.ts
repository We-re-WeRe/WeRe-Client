import axios from 'axios';

const apiBe = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10_000,
  withCredentials: true,
});

apiBe.interceptors.response.use(
  // Good Response
  response => response,
  // Response Error
  error => {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data.message);
    }
    return Promise.reject(error);
  },
);

export default apiBe;
