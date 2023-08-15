import * as Styled from './Styled';

const BookInfoForm = ({ cover, book_title, authors, publisher, pud_date }) => {
  return (
    <Styled.BookInfoDiv>
      <Styled.BookImg src={cover} />
      <Styled.BookDetailDiv>
        <Styled.BookTitle>{book_title}</Styled.BookTitle>
        <Styled.BookInfo>
          <span>저자</span> {authors}
        </Styled.BookInfo>
        <Styled.BookInfo>
          <span>출판사</span> {publisher}
        </Styled.BookInfo>
        <Styled.BookInfo>
          <span>{pud_date}</span>
        </Styled.BookInfo>
      </Styled.BookDetailDiv>
    </Styled.BookInfoDiv>
  );
};

export default BookInfoForm;
