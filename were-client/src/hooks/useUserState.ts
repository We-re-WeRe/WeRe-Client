import { IUserBase } from '@/types/user';
import { create } from 'zustand';

interface UserState {
  user: IUserBase | null;
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  setUser: (data: IUserBase) => void;
  clearUser: () => void;
}

const useUserState = create<UserState>(set => ({
  user: null,
  isLoading: true,
  setLoading: (loading: boolean) => set({ isLoading: loading }),
  setUser: (data: IUserBase) => set({ user: data }),
  clearUser: () => set({ user: null }),
}));

export default useUserState;
