import { useState, useEffect, useCallback, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import BookInfo from './BookInfo/BookInfo';
import BookAside from './BookAside/BookAside';
import * as bookService from '../../../lib/apis/booksService';
import * as Styled from './Styled';

const BookDetail = () => {
  const [comments, setComments] = useState([]);
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { isbn } = useParams();

  const updateCommentList = useCallback((comments) => {
    console.log(comments);
    setComments([...comments]);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await bookService.getOneBooks(isbn);
        console.log(data);
        if (!data) throw new Error('데이터를 불러오는데 실패하였습니다.');

        setComments([...data.data.replies]);
        setBook({ ...data.data.item[0] });
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setError('에러 컴포넌트 만들기');
      }
    })();
  }, [isbn]);

  return (
    <Styled.BookDetailWrap>
      {error ? (
        <div>{error}</div>
      ) : isLoading ? (
        <div>로딩중입니다.</div>
      ) : (
        <Fragment>
          <Styled.BookDetailTitle>
            <h2>도서 정보</h2>
          </Styled.BookDetailTitle>
          <Styled.BookDetailWithFlexDiv>
            <BookInfo
              book={book}
              isbn={isbn}
              comments={comments}
              setComments={updateCommentList}
            />
            <BookAside book={book} />
          </Styled.BookDetailWithFlexDiv>
        </Fragment>
      )}
    </Styled.BookDetailWrap>
  );
};

export default BookDetail;
