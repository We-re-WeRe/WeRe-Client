import { IStorage, IStorageCreate, IStorageDetail } from '@/types/storage';
import apiBe from '.';

// storage info
export const getStoragesDetail = async (storageId: number): Promise<IStorageDetail> => {
  const infoStorage = await apiBe
    .get(`/storages/detail?id=${storageId}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));

  return infoStorage;
};

// all of the storages
export const getStoragesList = async (): Promise<IStorage[]> => {
  const allStorages = await apiBe
    .get('/storages/list/')
    .then(res => res.data)
    .catch(err => Promise.reject(err));

  return allStorages;
};

// get storages with specific webtoon
export const getStoragesWithWebtoon = async (webtoonId: number): Promise<IStorage[]> => {
  const storages = await apiBe
    .get(`/storages/list/webtoon?webtoonId=${webtoonId}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));

  return storages;
};

// mypage&userpage storages
export const getStoragesListUser = async (id?: number): Promise<IStorage[]> => {
  const userStorages = await apiBe
    .get(`/storages/list/user?userId=${id}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
  return userStorages;
};

// webtoon storages
export const getStoragesListMine = async (id: number): Promise<IStorage> => {
  const webtoonStorages = await apiBe
    .get(`/storages/list/mine?webtoonId?=${id}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));

  return webtoonStorages;
};

// liked storages
export const getStoragesListLiked = async (): Promise<IStorage> => {
  const likedStorages = await apiBe
    .get('/storages/list/liked')
    .then(res => res.data)
    .catch(err => Promise.reject(err));

  return likedStorages;
};

// mypage create storages
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

// update storage
export const patchStorages = async (
  nameValue: string,
  imageURLValue: string,
  explainValue: string,
  isPublicValue: boolean,
  tagsValue: string[],
): Promise<IStorageCreate> => {
  const patchStorage = await apiBe
    .patch('/storages', {
      name: nameValue,
      imageURL: imageURLValue,
      explain: explainValue,
      isPublic: isPublicValue,
      tags: tagsValue,
    })
    .then(res => res.data)
    .catch(err => Promise.reject(err));

  return patchStorage;
};

// storage delete
export const deleteStorages = async (storageId: number) => {
  const deleteStorage = await apiBe
    .delete(`/storages?id=${storageId}`)
    .then(res => res.status)
    .catch(err => Promise.reject(err));

  return deleteStorage;
};

// stroage update webtoon
export const patchWebtoonStorages = async (storageId: number, webtoonInputId: number): Promise<IStorageDetail> => {
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
export const deleteWebtoonStorages = async (storagesId: number, webtoonInputId: number): Promise<IStorageDetail> => {
  const deleteWebtoonStorage = await apiBe
    .delete(`/storages/webtoon?id=${storagesId}?webtoonId=${webtoonInputId}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));

  return deleteWebtoonStorage;
};
