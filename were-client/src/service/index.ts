import axios from 'axios';
import { getNewAccessToken } from './token';

let isTokenRefreshing = false;

const apiBe = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10_000,
});

apiBe.interceptors.response.use(
  // Good Response
  response => response,
  // Response Error
  async error => {
    console.clear();
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        if (!isTokenRefreshing) {
          isTokenRefreshing = true;
          const accessToken = await getNewAccessToken();
          //  console.log(error.response.config);
          apiBe.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${accessToken}`;
            return config;
          });
          isTokenRefreshing = false;
          return apiBe(error.response.config);
        }
        return Promise.reject(error);
      }
      return Promise.reject(error);
    }
    return Promise.reject(error);
  },
);

export default apiBe;
