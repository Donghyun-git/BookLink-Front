import { createContext, useContext } from 'react';

export const mapContext = createContext();

export const useMapContext = () => {
  const context = useContext(mapContext);

  return context;
};
