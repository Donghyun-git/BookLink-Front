import { BookSearch } from '../../../../lib/apis/searchService';
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
  border: 1px solid #d9d9d9;
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
  width: 91.571rem;
  border: 1px solid #d9d9d9;
  margin: 0.857rem;
`;
const BookTitle = styled.div`
  font-weight: bold;
  font-size: 1.714rem;
`;
const BookInfo = styled.div`
  margin-top: 0.286rem;
  font-size: 1rem;
  span {
    color: #767676;
  }
`;

const BookSearchForm = ({ bookInfo = {}, setValue }) => {
  const [search, setSearch] = useState(
    bookInfo.book_title ? bookInfo.book_title : ''
  );
  const [bookinfo, setBookinfo] = useState(bookInfo);

  if (Object.keys(bookInfo).length) {
    const {
      isbn13,
      categoryName,
      cover,
      book_title,
      authors,
      priceStandard,
      publisher,
      pud_date,
    } = bookInfo;
    setValue('isbn', isbn13);
    setValue('book_title', book_title);
    setValue('authors', authors);
    setValue('publisher', publisher);
    setValue('pud_date', pud_date);
    setValue('price_sales', priceStandard);
    setValue('cover', cover);
    setValue('category_name', categoryName);
  }
  const onBookInfoHandler = async (e) => {
    setSearch(e.target.value);
    const { item } = await BookSearch(e.target.value);
    /*{
      "title": "문과 남자의 과학 공부 - 나는 무엇이고 왜 존재하며 어디로 가는가?",
      "author": "유시민 (지은이)",
      "pubDate": "2023-06-23",
      "description": "역사ㆍ정치ㆍ경제ㆍ글쓰기ㆍ여행 등 인문학 분야의 글을 써온 작가 유시민이 과학을 소재로 쓴 첫 책이다. 유시민에게 “지적 자극과 정서적 감동을 준 과학이론, 인간과 사회와 역사에 대한 생각을 교정해준 정보를 골라 새롭게 해석”했다.",
      "isbn13": "9791192836188",
      "priceSales": 15750,
      "priceStandard": 17500,
      "cover": "https://image.aladin.co.kr/product/31877/37/cover/k982833431_2.jpg",
      "categoryName": "국내도서>인문학>교양 인문학",
      "publisher": "돌베개"
  }*/
    if (item.length) {
      const {
        isbn13,
        priceStandard,
        cover,
        categoryName,
        title,
        author,
        pubDate,
        publisher,
      } = item[0];
      console.log(item[0]);
      setBookinfo({
        ...bookinfo,
        isbn: isbn13,
        book_title: title,
        authors: author,
        publisher,
        pud_date: pubDate,
        cover,
      });
      setValue('category_name', categoryName);
      setValue('isbn', isbn13);
      setValue('book_title', title);
      setValue('authors', author);
      setValue('price_sales', priceStandard);
      setValue('publisher', publisher);
      setValue('pud_date', pubDate);
      setValue('cover', cover);
    }
  };

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
              <BookTitle>{bookinfo.book_title}</BookTitle>
              <BookInfo>
                <span>저자</span> {bookinfo.authors}
              </BookInfo>
              <BookInfo>
                <span>출판사</span> {bookinfo.publisher}
              </BookInfo>
              <BookInfo>
                <span>{bookinfo.pud_date}</span>
              </BookInfo>
            </BookDetailDiv>
          </BookInfoDiv>
        )}
      </div>
    </>
  );
};

export default BookSearchForm;
