import { IUserLogin, IUserSignUp } from '@/types/user';
import apiBe from '.';

export const signUpApi = async ({ account, password, user }: IUserSignUp): Promise<string> => {
  const token = await apiBe
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
      const { accessToken } = res.data;
      apiBe.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${accessToken}`;
        return config;
      });
      console.log(res);
      return accessToken;
    })
    .catch(err => {
      return Promise.reject(err);
    });

  return token;
};

export const loginApi = async ({ account, password }: IUserLogin): Promise<string> => {
  const token = apiBe
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
      return accessToken;
    })
    .catch(err => {
      return Promise.reject(err);
    });

  return token;
};
