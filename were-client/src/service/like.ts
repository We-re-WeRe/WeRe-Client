import { ILike, LikeParams } from '@/types/like';
import apiBe from '.';

export const likePost = async ({ targetType, targetId }: LikeParams): Promise<ILike> => {
  const response = await apiBe
    .patch(`/likes?targetType=${targetType}&targetId=${targetId}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));

  return response;
};

export const unlikePost = async ({ targetType, targetId }: LikeParams): Promise<ILike> => {
  const response = await apiBe
    .delete(`/likes?&targetType=${targetType}&targetId=${targetId}`)
    .then(res => res.data)
    .catch(err => Promise.reject(err));

  return response;
};
