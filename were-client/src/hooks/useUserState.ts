import { IUserBase } from '@/types/user';
import { create } from 'zustand';

interface UserState {
  user: IUserBase | null;
  setUser: (data: IUserBase) => void;
  clearUser: () => void;
}

const useUserState = create<UserState>(set => ({
  user: null,
  setUser: (data: IUserBase) => set({ user: data }),
  clearUser: () => set({ user: null }),
}));

export default useUserState;
