import { likePost, unlikePost } from '@/service/like';
import { LikeParams } from '@/types/like';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { webtoonReviewOptions } from './useReview';

export const useLikeReview = (webtoonId: number) => {
  const client = useQueryClient();
  const reviewQueryOpt = webtoonReviewOptions(webtoonId);

  return useMutation({
    mutationFn: async ({ targetType, targetId, currentLike }: LikeParams & { currentLike: boolean }) => {
      if (!currentLike) {
        await likePost({ targetType, targetId });
        return;
      }

      await unlikePost({ targetType, targetId });
    },
    onMutate: async ({ targetType, targetId, currentLike }: LikeParams & { currentLike: boolean }) => {
      await client.cancelQueries(reviewQueryOpt);
      const prevReviewList = client.getQueryData(reviewQueryOpt.queryKey);

      if (prevReviewList) {
        const updatedList = prevReviewList.map(review => {
          if (review.id === targetId) {
            const updatedLike = !currentLike;
            const updatedCount: number = currentLike ? Number(review.like.count) - 1 : Number(review.like.count) + 1;
            console.log(updatedLike, updatedCount);
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
        client.setQueryData(reviewQueryOpt.queryKey, updatedList);
      }
      return { prevReviewList };
    },
    onError: (err, variables, context) => {
      if (context?.prevReviewList) {
        client.setQueryData(reviewQueryOpt.queryKey, context.prevReviewList);
      }
    },
    onSettled: () => {
      client.invalidateQueries({ queryKey: reviewQueryOpt.queryKey });
    },
  });
};
