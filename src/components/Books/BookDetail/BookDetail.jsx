import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import BookInfo from './BookInfo/BookInfo';
import BookAside from './BookAside/BookAside';
import * as bookService from '../../../lib/apis/booksService';
import * as Styled from './Styled';

const BookDetail = () => {
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { isbn } = useParams();
  // author: '세이노(SayNo) (지은이)';
  // cover: 'https://image.aladin.co.kr/product/30929/51/coversum/s302832892_1.jpg';
  // description: '2000년부터 발표된 그의 주옥같은 글들. 독자들이 자발적으로 만든 제본서는 물론, 전자책과 앱까지 나왔던 《세이노의 가르침》이 드디어 전국 서점에서 독자들을 마주한다. 여러 판본을 모으고 저자의 확인을 거쳐 최근 생각을 추가로 수록하였다. 정식 출간본에만 추가로 수록된 글들은 목차와 본문에 별도 표시하였다.';
  // isbn13: '9791168473690';
  // like_cnt: 0;
  // owner_cnt: 2;
  // pubDate: '2023-03-02';
  // publisher: '데이원';
  // review_cnt: 0;
  // title: '세이노의 가르침';

  useEffect(() => {
    (async () => {
      try {
        const { data } = await bookService.getOneBooks(isbn);
        console.log(data);
        if (!data) throw new Error('데이터를 불러오는데 실패하였습니다.');

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
            <BookInfo book={book} />
            <BookAside book={book} />
          </Styled.BookDetailWithFlexDiv>
        </Fragment>
      )}
    </Styled.BookDetailWrap>
  );
};

export default BookDetail;
