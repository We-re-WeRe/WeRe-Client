import { IUserReview } from '@/types/review';
import apiBe from '.';

export const getReviewsListUser = async (id: number): Promise<IUserReview[]> => {
  const userReview = await apiBe
    .get(`/reviews/list/user?ownerId=${id}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
  return userReview;
};

export const getReviewsListUserMyPage = async (): Promise<IUserReview[]> => {
  const userReview = await apiBe
    .get(`/reviews/list/user`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
  return userReview;
};

export const B = '';
