import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useGoToMap = () => {
  const navigate = useNavigate();

  const goToMap = useCallback(
    ({ isbn13, title, author, pubDate, publisher, cover }) => {
      navigate('/books/library-info', {
        state: { isbn13, title, author, pubDate, publisher, cover },
      });
      console.log(isbn13);
    },
    [navigate]
  );

  return { goToMap };
};
