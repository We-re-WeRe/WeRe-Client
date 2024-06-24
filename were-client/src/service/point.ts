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

export const createPoint = async (data: Omit<IPointBase, 'userId'>): Promise<AxiosResponse> => {
  const response = await apiBe
    .post(`/points`, data)
    .then(res => res)
    .catch(err => Promise.reject(err));
  console.log(response);
  return response;
};

export const deletePoint = async (pointId: number): Promise<AxiosResponse> => {
  const response = await apiBe
    .delete(`/points?id=${pointId}`)
    .then(res => res)
    .catch(err => Promise.reject(err));
  console.log(response);
  return response;
};
