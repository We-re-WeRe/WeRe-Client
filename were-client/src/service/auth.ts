import { IUserLogin, IUserSignUp } from '@/types/user';
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
