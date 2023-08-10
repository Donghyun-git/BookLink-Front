import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useGoToMap = () => {
  const navigate = useNavigate();

  const goToMap = useCallback(
    (isbn13) => {
      navigate('/books/library-info', { state: { isbn13 } });
      console.log(isbn13);
    },
    [navigate]
  );

  return { goToMap };
};
