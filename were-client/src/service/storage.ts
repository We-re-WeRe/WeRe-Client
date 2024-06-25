import { IStorage, IStorageCreate } from '@/types/storage';
import apiBe from '.';

export const getStoragesListUser = async (id?: number): Promise<IStorage[]> => {
  const userStorage = await apiBe
    .get(`/storages/list/user?userId=${id}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
  return userStorage;
};

export const postStorages = async (
  nameValue: string,
  explainValue: string,
  isPublicValue: boolean,
  tagsValue: string[],
): Promise<IStorageCreate> => {
  console.log(nameValue);
  const postStorage = await apiBe
    .post('/storages', { name: nameValue, explain: explainValue, isPublic: isPublicValue, tags: tagsValue })
    .then(res => res.data)
    .catch(err => Promise.reject(err));

  return postStorage;
};