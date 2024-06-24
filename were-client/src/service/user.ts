import { IUser } from '@/types/user';
import apiBe from '.';

export const getUserDetail = async (id: number): Promise<IUser> => {
  const users = await apiBe
    .get(`/users/detail?targetId=${id}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
  return users;
};

export const getUserDetailMyPage = async (): Promise<IUser> => {
  apiBe.interceptors.request.use(v => {
    console.log(v.headers.Authorization);
    return v;
  });
  const users = await apiBe
    .get(`/users/detail`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
  return users;
};

export const getUserCheck = async (nickname: string): Promise<boolean> => {
  const userCheck = await apiBe
    .get(`/users/check?nickname=${nickname}`)
    .then(res => res.data)
    .catch(err => console.log(err));

  return userCheck;
};