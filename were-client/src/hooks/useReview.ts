import { createReview, getReviewsListUser, getWebtoonReview } from '@/service/review';
import { IReviewCreate, IUserReview, IWebtoonReview } from '@/types/review';
import { queryOptions, useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';

export const webtoonReviewOptions = (webtoonId: number) =>
  queryOptions({
    queryKey: ['webtoon', webtoonId, 'review'],
    queryFn: (): Promise<IWebtoonReview[]> => getWebtoonReview(webtoonId),
  });

export const userReviewOptions = (userId: number) =>
  queryOptions({
    queryKey: ['user', userId, 'review'],
    queryFn: async (): Promise<IUserReview[]> => await getReviewsListUser(userId),
  });

export const useCreateReview = (webtoonId: number, successCb: () => void) => {
  const client = useQueryClient();

  const reviewQueryOptions = webtoonReviewOptions(webtoonId);

  return useMutation({
    mutationFn: async (review: IReviewCreate) => createReview(review),

    onSettled: () => {
      successCb();

      client.invalidateQueries({ queryKey: reviewQueryOptions.queryKey });
    },
    onError: err => console.log(`${err} , 다시 시도해주세요.`),
  });
};

export const useUserReview = (userId: number) => {
  return useSuspenseQuery(userReviewOptions(userId));
};
