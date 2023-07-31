import { useEffect, useReducer, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { DetailContext } from './context/detailContext';
import { detailReducer, initialState } from './context/detailReducer';
import BookInfo from './BookInfo/BookInfo';
import BookAside from './BookAside/BookAside';
import SideBar from './SideBar';
import * as bookService from '../../../lib/apis/booksService';
import * as Styled from './Styled';

const BookDetail = () => {
  const { isbn } = useParams();
  const [state, dispatch] = useReducer(detailReducer, initialState);
  const { error, isLoading } = state;

  useEffect(() => {
    (async () => {
      try {
        const { data } = await bookService.getOneBooks(isbn);
        console.log(data);
        if (!data) {
          dispatch({
            type: 'ERROR',
            payload: '데이터를 불러오는데 실패하였습니다.',
          });
          throw new Error('데이터를 불러오는데 실패하였습니다.');
        }

        dispatch({ type: 'GET_BOOK', payload: data.data });
      } catch (error) {
        console.error(error);
      }
    })();
  }, [isbn]);

  console.log(state);
  return (
    <DetailContext.Provider value={{ state, dispatch }}>
      <Styled.BookDetailWrap>
        {error ? (
          <div>{error}</div>
        ) : isLoading ? (
          <Fragment></Fragment>
        ) : (
          <SideBar />
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
                <BookInfo isbn={isbn} />
                <BookAside />
              </Styled.BookDetailWithFlexDiv>
            </Fragment>
          )}
        </Styled.BookDetailContainer>
      </Styled.BookDetailWrap>
    </DetailContext.Provider>
  );
};

export default BookDetail;
