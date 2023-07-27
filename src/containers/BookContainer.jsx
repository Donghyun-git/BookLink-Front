import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllBooks, getCategoryBooks } from '../lib/thunk/bookRequestThunk';
import Books from '../components/Books/Books';

const BookContainer = ({
  isBooks,
  sortCurrent,
  currentSortedBooks,
  sortLikes,
  likeSortedBooks,
  currentCategory,
  currentCID,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  useEffect(() => {
    if (!currentCategory) {
      dispatch(getAllBooks());
      return;
    } else {
      dispatch(getCategoryBooks(currentCID));
      return;
    }
  }, [dispatch, currentCategory, currentCID]);

  return (
    <Books
      isBooks={isBooks}
      sortCurrent={sortCurrent}
      currentSortedBooks={currentSortedBooks}
      sortLikes={sortLikes}
      likeSortedBooks={likeSortedBooks}
      currentCategory={currentCategory}
      currentCID={currentCID}
    />
  );
};

export default BookContainer;
