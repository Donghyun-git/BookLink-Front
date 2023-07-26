import { createContext, useContext } from 'react';

export const DetailContext = createContext();

export const useDetailContext = () => {
  const context = useContext(DetailContext);

  return context;
};
