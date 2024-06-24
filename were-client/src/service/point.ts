import { IPointSum } from '@/types/point';
import apiBe from '.';

export const getPointsSum = async (): Promise<IPointSum> => {
  const pointSum = await apiBe
    .get(`/points/sum`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
  return pointSum;
};
