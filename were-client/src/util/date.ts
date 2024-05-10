import DAYS from '@/constant/day';

export const today = new Date();

export const getToday = () => {
  return DAYS[today.getDay()];
};
