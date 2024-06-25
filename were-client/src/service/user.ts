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

export const patchUser = async (updateNickname: string, updateIntroduce: string): Promise<IUser> => {
  const userPatch = await apiBe
    .patch('/users', { id: 3, nickname: updateNickname, introduceMe: updateIntroduce })
    .then(res => res.data)
    .catch(err => Promise.reject(err));

  return userPatch;
};

export const patchFollow = async (targetId: number): Promise<IUser> => {
  const followPatch = await apiBe
    .patch('/users/follow', { id: targetId, isFollowing: true })
    .then(res => res.data)
    .catch(err => Promise.reject(err));

  return followPatch;
};

export const patchUnFollow = async (targetId: number): Promise<IUser> => {
  const unfollowPatch = await apiBe
    .patch('/users/unfollow', { id: targetId, isFollowing: false })
    .then(res => res.data)
    .catch(err => Promise.reject(err));

  return unfollowPatch;
};
