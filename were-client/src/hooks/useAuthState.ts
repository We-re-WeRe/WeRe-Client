import { create } from 'zustand';

interface AuthState {
  userId: string | undefined;
}

const useAuthState = create<AuthState>(set => ({
  userId: undefined,
  setUser: (id: string) => set({ userId: id }),
  clearUser: () => set({ userId: undefined }),
}));

export default useAuthState;
