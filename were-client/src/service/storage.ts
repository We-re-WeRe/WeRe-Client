import { IStorage, IStorageBase, IStorageCreate } from '@/types/storage';
import apiBe from '.';

// storage info
export const getStoragesDetail = async (storageId: number): Promise<IStorage> => {
  const infoStorage = await apiBe
    .get(`/storages/detail?id=${storageId}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));

  return infoStorage;
};

// all of the storages
export const getStoragesList = async (): Promise<IStorageBase[]> => {
  const allStorages = await apiBe
    .get('/storages/list/')
    .then(res => res.data)
    .catch(err => Promise.reject(err));

  return allStorages;
};

// get storages with specific webtoon
export const getStoragesWithWebtoon = async (webtoonId: number): Promise<IStorageBase[]> => {
  const storages = await apiBe
    .get(`/storages/list/webtoon?webtoonId=${webtoonId}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));

  return storages;
};

// mypage&userpage storages
export const getStoragesListUser = async (id?: number): Promise<IStorageBase[]> => {
  const userStorages = await apiBe
    .get(`/storages/list/user?userId=${id}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
  return userStorages;
};

// webtoon storages
export const getStoragesListMine = async (id: number): Promise<IStorageBase[]> => {
  const webtoonStorages = await apiBe
    .get(`/storages/list/mine?webtoonId?=${id}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));

  return webtoonStorages;
};

// liked storages
export const getStoragesListLiked = async (): Promise<IStorageBase[]> => {
  const likedStorages = await apiBe
    .get('/storages/list/liked')
    .then(res => res.data)
    .catch(err => Promise.reject(err));

  return likedStorages;
};

// mypage create storages
export const postStorages = async ({ name, explain, isPublic, tags, imageURL }: IStorageCreate): Promise<IStorage> => {
  const postStorage = await apiBe
    .post('/storages', { name, explain, isPublic, tags, imageURL: undefined })
    .then(res => res.data)
    .catch(err => Promise.reject(err));

  return postStorage;
};

// update storage
export const patchStorages = async ({
  name,
  imageURL,
  explain,
  isPublic,
  tags,
  id,
}: IStorageCreate & { id: number }): Promise<IStorage> => {
  const patchStorage = await apiBe
    .patch('/storages', {
      id,
      name,
      imageURL,
      explain,
      isPublic,
      tags,
    })
    .then(res => res.data)
    .catch(err => Promise.reject(err));

  return patchStorage;
};

// stroage update webtoon
export const patchWebtoonStorages = async (storageId: number, webtoonInputId: number): Promise<IStorage> => {
  const patchWebtoonStorage = await apiBe
    .patch(`/storages/webtoon?id=${storageId}?webtoonId=${webtoonInputId}`, {
      id: storageId,
      webtoonId: webtoonInputId,
    })
    .then(res => res.data)
    .catch(err => Promise.reject(err));

  return patchWebtoonStorage;
};

// storage delete webtoon
export const deleteWebtoonStorages = async (storagesId: number, webtoonInputId: number): Promise<IStorage> => {
  const deleteWebtoonStorage = await apiBe
    .delete(`/storages/webtoon?id=${storagesId}?webtoonId=${webtoonInputId}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));

  return deleteWebtoonStorage;
};
