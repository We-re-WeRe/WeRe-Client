import DAYS, { Tday } from '@/constant/day';

export const today = new Date();

export const getToday = () => {
  return DAYS[today.getDay()];
};

export const checkUndefinedDay = (day: string) => {
  for (let i = 0; i < DAYS.length; i++) {
    if (day === DAYS[i].id) {
      return false;
    }
  }
  return true;
};

export const validateDay = (day: string | null): Tday => {
  if (!day) {
    return getToday().id;
  }

  if (day && checkUndefinedDay(day)) {
    return getToday().id;
  }

  return day as Tday;
};
