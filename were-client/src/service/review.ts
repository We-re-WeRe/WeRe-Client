import { IReviewCreate, IReviewPatch, IUserReview } from '@/types/review';
import { AxiosResponse } from 'axios';
import apiBe from '.';

export const getReviewsListUser = async (id: number): Promise<IUserReview[]> => {
  const userReview = await apiBe
    .get(`/reviews/list/user?ownerId=${id}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
  console.log(userReview);
  return userReview;
};

export const createReview = async (body: IReviewCreate): Promise<AxiosResponse> => {
  const response = await apiBe
    .post('/reviews', body)
    .then(res => res)
    .catch(err => Promise.reject(err));
  return response;
};

export const updateReview = async (body: IReviewPatch): Promise<AxiosResponse> => {
  const response = await apiBe
    .patch('/reviews', body)
    .then(res => res)
    .catch(err => Promise.reject(err));
  return response;
};

export const deleteReview = async (reviewId: number): Promise<AxiosResponse> => {
  const response = await apiBe
    .delete(`/reviews?id=${reviewId}`)
    .then(res => res)
    .catch(err => Promise.reject(err));
  return response;
};
