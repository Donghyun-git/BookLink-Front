import { useState, useEffect, useCallback, useReducer, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { DetailContext } from './context/detailContext';
import { detailReducer } from './context/detailReducer';
import BookInfo from './BookInfo/BookInfo';
import BookAside from './BookAside/BookAside';
import SideBar from './SideBar';
import * as bookService from '../../../lib/apis/booksService';
import * as Styled from './Styled';

const BookDetail = () => {
  const [likes, setLikes] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { isbn } = useParams();

  const [state, dispatch] = useReducer(detailReducer, comments);

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

        setLikes(data.data.item[0].like_cnt);
        setIsLiked(data.data.item[0].liked);
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
        <Fragment></Fragment>
      ) : (
        <SideBar isLiked={isLiked} likes={likes} />
      )}

      <Styled.BookDetailContainer>
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
              <DetailContext.Provider
                value={{ value: comments, state, dispatch }}
              >
                <BookInfo
                  book={book}
                  isbn={isbn}
                  comments={comments}
                  setComments={updateCommentList}
                />
              </DetailContext.Provider>

              <BookAside book={book} />
            </Styled.BookDetailWithFlexDiv>
          </Fragment>
        )}
      </Styled.BookDetailContainer>
    </Styled.BookDetailWrap>
  );
};

export default BookDetail;
