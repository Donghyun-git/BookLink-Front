import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create()(
  persist(
    (set) => ({
      isLogin: false,

      setUserInfo: (state) =>
        set({
          ...state,
        }),

      setIsLogin: () =>
        set({
          isLogin: true,
        }),

      removeUserInfo: () =>
        set(
          ({ setUserInfo, removeUserInfo }) => ({
            setUserInfo,
            removeUserInfo,
          }),
          true
        ),
    }),
    {
      name: 'auth',
    }
  )
);
