import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  getAllBooks,
  getCategoryBooks,
  getSearchBooks,
} from '../lib/thunk/bookRequestThunk';
import * as bookActions from '../redux/actions/bookActions';
import BooksContainer from '../components/Layout/Books/BooksContainer';

const BookContainer = () => {
  //[ 전체 책 조회 ]
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  //[ 카테고리만 선택 시 ]
  const handleCategorySelect = useCallback(
    (currentCID) => {
      if (!currentCID) {
        dispatch(getAllBooks());
        return;
      } else {
        dispatch(getCategoryBooks(currentCID));
        return;
      }
    },
    [dispatch]
  );

  //[ 책방 검색 ]
  const handleCategorySearchWithKeyword = useCallback(
    (isPressEnter, searchKeyword, currentCID) => {
      if (isPressEnter) {
        dispatch(getSearchBooks(searchKeyword, currentCID));
        return;
      } else {
        dispatch(getSearchBooks(searchKeyword, currentCID));
      }
    },
    [dispatch]
  );

  //[ 최신순 정렬 ]
  const handleSortedCurrent = useCallback(() => {
    dispatch(bookActions.SORT_CURRENT());
  }, [dispatch]);

  //[ 좋아요 순 정렬 ]
  const handleSortedLikes = useCallback(() => {
    dispatch(bookActions.SORT_LIKES());
  }, [dispatch]);

  return (
    <BooksContainer
      handleCategorySelect={handleCategorySelect}
      handleCategorySearchWithKeyword={handleCategorySearchWithKeyword}
      handleSortedCurrent={handleSortedCurrent}
      handleSortedLikes={handleSortedLikes}
    />
  );
};

export default BookContainer;
