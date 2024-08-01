import { createReview, getWebtoonReview } from '@/service/review';
import { IReviewCreate, IWebtoonReview } from '@/types/review';
import { queryOptions, useMutation, useQueryClient } from '@tanstack/react-query';

export const webtoonReviewOptions = (webtoonId: number) =>
  queryOptions({
    queryKey: ['webtoon', webtoonId, 'review'],
    queryFn: (): Promise<IWebtoonReview[]> => getWebtoonReview(webtoonId),
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
