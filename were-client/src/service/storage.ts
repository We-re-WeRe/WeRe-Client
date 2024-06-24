import { IStorage } from '@/types/storage';
import apiBe from '.';

export const getStoragesListUser = async (id?: number): Promise<IStorage[]> => {
  const userStorage = await apiBe
    .get(`/storages/list/user?userId=${id}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
  return userStorage;
};