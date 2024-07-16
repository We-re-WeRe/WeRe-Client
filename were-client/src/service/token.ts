import { isAxiosError } from 'axios';
import apiBe from '.';

export const getNewAccessToken = async () => {
  const accessToken = await apiBe
    .post('/auth/refresh', {}, { withCredentials: true })
    .then(res => {
      return res.data.accessToken;
    })
    .catch(err => {
      if (isAxiosError(err)) {
        if (err.response?.status === 401) {
          //alert('리프레시 토큰 만료');
          // window.location.replace('/login');
          return Promise.reject(err);
        }
      }
      return Promise.reject(err);
    });
  if (accessToken) {
    apiBe.interceptors.request.use(config => {
      config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    });
  }
  return accessToken;
};
