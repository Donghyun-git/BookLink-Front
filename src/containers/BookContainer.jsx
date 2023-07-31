import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  getAllBooks,
  getCategoryBooks,
  getSearchBooks,
} from '../lib/thunk/bookRequestThunk';
import Books from '../components/Books/Books';

const BookContainer = ({
  isBooks,
  sortCurrent,
  currentSortedBooks,
  sortLikes,
  likeSortedBooks,
  currentCategory,
  currentCID,
  searchKeyword,
  isPressEnter,
}) => {
  //전체 책 조회
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  //카테고리 검색 조회
  useEffect(() => {
    if (!currentCategory) {
      dispatch(getAllBooks());
      return;
    } else {
      dispatch(getCategoryBooks(currentCID));
      return;
    }
  }, [dispatch, currentCategory, currentCID]);

  //책방 검색
  useEffect(() => {
    if (isPressEnter) {
      console.log('@@@@', searchKeyword);
      dispatch(getSearchBooks(searchKeyword, currentCID));
      return;
    }
  }, [currentCID, dispatch, isPressEnter, searchKeyword]);

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
