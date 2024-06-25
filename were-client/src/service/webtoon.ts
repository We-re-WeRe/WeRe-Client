import { IStorageWebtoon, IWebtoon, IWebtoonDetail } from '@/types/webtoon';
import apiBe from '.';

export const getWebtoons = async (day: string, company: string): Promise<IWebtoon[]> => {
  const webtoons = await apiBe
    .get(`/webtoons/list/filtered-by?day=${day}&providingCompany=${company}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
  // console.log(webtoons);
  return webtoons;
};

export const getWebtoonsLiked = async (): Promise<IWebtoon[]> => {
  const webtoonsLiked = await apiBe
    .get(`/webtoons/list/liked`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));

  return webtoonsLiked;
};

export const getWebtoonDetail = async (id: number): Promise<IWebtoonDetail> => {
  const webtoonDetail = await apiBe
    .get(`/webtoons/detail?id=${id}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));

  return webtoonDetail;
};

export const getHotWebtoons = async (): Promise<IWebtoon[]> => {
  const hotWebtoons = await apiBe
    .get(`/webtoons/list/hot`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));

  return hotWebtoons;
};

export const getNewWebtoons = async (): Promise<IWebtoon[]> => {
  const newWebtoons = await apiBe
    .get(`/webtoons/list/new`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));

  return newWebtoons;
};

export const getStorageWebtoonList = async (storageId: number): Promise<IStorageWebtoon[]> => {
  const storageWebtoons = await apiBe
    .get(`/webtoons/list/storage?storageId=${storageId}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));

  return storageWebtoons;
};
