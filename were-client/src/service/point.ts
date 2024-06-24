import { IPoint, IPointBase, IPointSum } from '@/types/point';
import { AxiosResponse } from 'axios';
import apiBe from '.';

export const getPointsSum = async (): Promise<IPointSum> => {
  const pointSum = await apiBe
    .get(`/points/sum`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
  console.log(pointSum);
  return pointSum;
};

export const getPointHistory = async (): Promise<IPoint> => {
  const pointHistory = await apiBe
    .get(`/points/history`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
  console.log(pointHistory);
  return pointHistory;
};
