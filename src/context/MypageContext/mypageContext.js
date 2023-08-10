import { createContext, useContext } from 'react';

export const MypageContext = createContext();

export const useMypageContext = () => {
  const context = useContext(MypageContext);

  return context;
};
