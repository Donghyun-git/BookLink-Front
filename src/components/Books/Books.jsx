import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as Styled from './Styled';
import SortedLike from './SortedLike';
import SortedCurrent from './SortedCurrent';

const Books = ({
  isBooks,
  sortCurrent,
  currentSortedBooks,
  sortLikes,
  likeSortedBooks,
  currentCategory,
  currentCID,
}) => {
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.BOOK.isLoading);
  const error = useSelector((state) => state.BOOK.error);

  const goToDetailPage = useCallback(
    (isbn) => {
      navigate(`/books/${isbn}`);
    },
    [navigate]
  );

  console.log('카테고리 잘 받아옴', currentCategory);
  console.log(sortLikes);
  return (
    <Styled.BooksComponentDiv>
      {error ? (
        <div>{error}</div>
      ) : isLoading ? (
        <div>로딩중입니다.</div>
      ) : sortLikes ? (
        <SortedLike
          isBooks={isBooks}
          sortLikes={sortLikes}
          likeSortedBooks={likeSortedBooks}
          currentCategory={currentCategory}
          currentCID={currentCID}
          goDetail={goToDetailPage}
        />
      ) : (
        <SortedCurrent
          isBooks={isBooks}
          sortCurrent={sortCurrent}
          currentSortedBooks={currentSortedBooks}
          currentCategory={currentCategory}
          currentCID={currentCID}
          goDetail={goToDetailPage}
        />
      )}
    </Styled.BooksComponentDiv>
  );
};

export default Books;
