import { IUserLogin, IUserSignUp } from '@/types/user';
import { AxiosResponse, isAxiosError } from 'axios';
import apiBe from '.';

export const signUpApi = async ({ account, password, user }: IUserSignUp) => {
  apiBe
    .post(
      '/auth/signon',
      {
        account,
        password,
        user,
      },
      {
        withCredentials: true,
      },
    )
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};

export const loginApi = async ({ account, password }: IUserLogin) => {
  const result = apiBe
    .post(
      '/auth/login/local',
      { account, password },
      {
        withCredentials: true,
      },
    )
    .then(res => {
      const { accessToken } = res.data;
      apiBe.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${accessToken}`;
        return config;
      });
      console.log(res.data);
      return res;
    })
    .catch(err => {
      return Promise.reject(err);
    });

  return result;
};

export const getNewAccessToken = async () => {
  const accessToken = await apiBe
    .post('/auth/refresh', {}, { withCredentials: true })
    .then(res => {
      return res.data.accessToken;
    })
    .catch(err => {
      if (isAxiosError(err)) {
        if (err.response?.status === 401) {
          alert('리프레시 토큰 만료');
          // window.location.replace('/login');
          return Promise.reject(err);
        }
      }
      return Promise.reject(err);
    });
  apiBe.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  });
  return accessToken;
};

export const getMyProfileApi = async () => {
  const result = apiBe.get('/users/my-profile-image').catch(err => {
    return Promise.reject(err);
  });

  return result;
};
