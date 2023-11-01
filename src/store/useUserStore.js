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

      setIsLogin: (state) =>
        set({
          isLogin: state,
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
