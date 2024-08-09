import { likePost, unlikePost } from '@/service/like';
import { LikeParams } from '@/types/like';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { userReviewOptions, webtoonReviewOptions } from './useReview';
import { webtoonDetailOptions, webtoonLikedOptions } from './useWebtoon';

type Tusage = 'user' | 'webtoon';
type mutateParams = LikeParams & { currentLike: boolean };

const toggleLikeApi = async ({ targetType, targetId, currentLike }: mutateParams) => {
  if (!currentLike) {
    await likePost({ targetType: targetType, targetId });
    return;
  }

  await unlikePost({ targetType: targetType, targetId });
};

export const useLikeReview = (userId: number, webtoonId: number, usage: Tusage) => {
  const client = useQueryClient();
  const reviewQueryOpt = usage === 'user' ? userReviewOptions(userId) : webtoonReviewOptions(webtoonId);

  return useMutation({
    mutationFn: toggleLikeApi,
    onMutate: async ({ targetId, currentLike }: mutateParams) => {
      await client.cancelQueries(reviewQueryOpt);
      const prevReviewList = client.getQueryData(reviewQueryOpt.queryKey);

      if (prevReviewList) {
        const updatedList = prevReviewList.map(review => {
          if (review.id === targetId) {
            const updatedLike = !currentLike;
            const updatedCount: number = currentLike ? Number(review.like.count) - 1 : Number(review.like.count) + 1;
            return {
              ...review,
              like: {
                isLike: updatedLike,
                count: updatedCount,
              },
            };
          }
          return review;
        });
        client.setQueryData(reviewQueryOpt.queryKey, updatedList as any);
      }
      return { prevReviewList };
    },
    onError: (err, variables, context) => {
      if (context?.prevReviewList) {
        client.setQueryData(reviewQueryOpt.queryKey, context.prevReviewList);
      }
    },
    onSettled: () => {
      client.invalidateQueries({ queryKey: ['review'] });
    },
  });
};

export const useLikeWebtoon = (titleId: number) => {
  const client = useQueryClient();
  const webtoonQueryOpt = webtoonDetailOptions(titleId);

  return useMutation({
    mutationFn: toggleLikeApi,
    onMutate: async () => {
      await client.cancelQueries(webtoonQueryOpt);
      const prevData = client.getQueryData(webtoonQueryOpt.queryKey);

      if (prevData) {
        const currentLike = prevData.like.isLike;
        const cnt = prevData.like.count;
        const newData = {
          ...prevData,
          like: {
            isLike: !prevData.like.isLike,
            count: currentLike ? Number(cnt) - 1 : Number(cnt) + 1,
          },
        };

        client.setQueryData(webtoonQueryOpt.queryKey, newData);
        return { prevData };
      }
    },
    onError: (err, variables, context) => {
      if (context?.prevData) {
        client.setQueryData(webtoonQueryOpt.queryKey, context.prevData);
      }
    },
    onSettled: () => {
      client.invalidateQueries({ queryKey: webtoonQueryOpt.queryKey });
      client.invalidateQueries({ queryKey: webtoonLikedOptions().queryKey });
    },
  });
};
