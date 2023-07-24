import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllBooks } from '../lib/thunk/bookRequestThunk';
import Books from '../components/Books/Books';

const BookContainer = ({
  isBooks,
  sortCurrent,
  currentSortedBooks,
  sortLikes,
  likeSortedBooks,
  currentCategory,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (
    <Books
      isBooks={isBooks}
      sortCurrent={sortCurrent}
      currentSortedBooks={currentSortedBooks}
      sortLikes={sortLikes}
      likeSortedBooks={likeSortedBooks}
      currentCategory={currentCategory}
    />
  );
};

export default BookContainer;
