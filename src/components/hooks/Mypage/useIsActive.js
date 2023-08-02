import { useState, useCallback } from 'react';

export const useIsActive = () => {
  const [isMyActive, setIsActive] = useState(true);
  const [isMyBooks, setIsMyBooks] = useState(false);

  const handleClickMyActive = useCallback(() => {
    setIsMyBooks(false);
    setIsActive(true);
  }, []);

  const handleClickMyBooks = useCallback(() => {
    setIsActive(false);
    setIsMyBooks(true);
  }, []);

  return { isMyActive, isMyBooks, handleClickMyActive, handleClickMyBooks };
};
