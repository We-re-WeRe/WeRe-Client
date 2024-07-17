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
    if (axios.isAxiosError(error)) {
      // 401 Error : AccessToken 재발급 or RefreshToken 만료
      if (error.response?.status === 401) {
        //refreshToken 만료
        if (error.response.data.cause === 'Refresh Token is unvalid.') {
          return Promise.reject(error);
        }
        // AccessToken 만료 / 재발급 RaceCondition 처리
        if (!isTokenRefreshing) {
          isTokenRefreshing = true;
          console.log(error);
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
