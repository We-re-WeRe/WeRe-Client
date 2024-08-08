import { Tday } from '@/constant/day';
import { getWebtoonDetail, getWebtoons, getWebtoonsLiked } from '@/service/webtoon';
import { IWebtoon, IWebtoonDetail } from '@/types/webtoon';
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';

const webtoonListOptions = (day: Tday, company: string) =>
  queryOptions({
    queryKey: ['webtoons', day],
    queryFn: (): Promise<IWebtoon[]> => getWebtoons(day, company),
  });

export const webtoonDetailOptions = (titleId: number) =>
  queryOptions({
    queryKey: ['webtoon', titleId],
    queryFn: (): Promise<IWebtoonDetail> => getWebtoonDetail(titleId),
  });

export const webtoonLikedOptions = () =>
  queryOptions({
    queryKey: ['webtoon', 'my', { liked: true }],
    queryFn: (): Promise<IWebtoon[]> => getWebtoonsLiked(),
  });

export const useWebtoonList = (day: Tday, company: string) => useSuspenseQuery(webtoonListOptions(day, company));

export const useWebtoonDetail = (titleId: number) => useSuspenseQuery(webtoonDetailOptions(titleId));

export const useLikedWebtoonList = () => useSuspenseQuery(webtoonLikedOptions());
