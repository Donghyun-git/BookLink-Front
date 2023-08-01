import { communitiesBookSearch } from '../../../../lib/apis/searchService';
import styled from 'styled-components';
import { useState } from 'react';
const BookContainerDiv = styled.div`
  margin-top: 2.571rem;
  display: flex;
  justify-content: space-between;
`;
const Tag = styled.div`
  margin-top: 0.893rem;
  font-size: 1.714rem;
  font-weight: bold;
`;
const Input = styled.input`
  height: 4.286rem;
  width: 95.5rem;
  border-radius: 0.857rem;
  box-sizing: border-box;
  border: 0.143rem solid #d9d9d9;
`;
const BookInfoDiv = styled.div`
  margin-top: 1.714rem;
  height: 11.286rem;
  border: 1px solid black;
  border-radius: 0.571rem;
  display: flex;
`;
const BookImg = styled.img`
  width: 9.571rem;
  height: 9.571rem;
  margin: 0.857rem;
`;
const BookDetailDiv = styled.div`
  height: 9.571rem;
  border: 1px solid black;
  margin: 0.857rem;
`;

const BookSearchForm = ({ bookInfo = {}, setValue }) => {
  const [search, setSearch] = useState(
    bookInfo.book_title ? bookInfo.book_title : ''
  );
  const [bookinfo, setBookinfo] = useState(bookInfo);

  if (Object.keys(bookInfo).length) {
    const { cover, book_title, authors, publisher, pud_date } = bookInfo;
    setValue('book_title', book_title);
    setValue('authors', authors);
    setValue('publisher', publisher);
    setValue('pud_date', pud_date);
    setValue('cover', cover);
  }
  const onBookInfoHandler = async (e) => {
    setSearch(e.target.value);
    const { item } = await communitiesBookSearch(e.target.value);
    if (item) {
      const { cover, title, author, pubDate, publisher } = item[0];
      console.log(item[0]);
      setBookinfo({
        ...bookinfo,
        book_title: title,
        authors: author,
        publisher,
        pud_date: pubDate,
        cover,
      });
      setValue('book_title', title);
      setValue('authors', author);
      setValue('publisher', publisher);
      setValue('pud_date', pubDate);
      setValue('cover', cover);
    }
  };
  console.log(bookInfo.cover);
  return (
    <>
      <BookContainerDiv>
        <Tag>도서명</Tag>
        <Input
          type="search"
          placeholder="도서명 검색하세요"
          onChange={onBookInfoHandler}
          defaultValue={search}
        />
      </BookContainerDiv>
      <div>
        {search && (
          <BookInfoDiv>
            <BookImg src={bookinfo.cover} />
            <BookDetailDiv>
              <p>{bookinfo.book_title}</p>
              <p>{bookinfo.authors}</p>
              <p>{bookinfo.publisher}</p>
              <p>{bookinfo.pud_date}</p>
            </BookDetailDiv>
          </BookInfoDiv>
        )}
      </div>
    </>
  );
};

export default BookSearchForm;
