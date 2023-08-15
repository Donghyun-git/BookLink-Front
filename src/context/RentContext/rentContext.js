import { createContext, useContext } from 'react';

export const RentContext = createContext();

export const useRentContext = () => {
  const context = useContext(RentContext);

  return context;
};
