import { BookSearch } from '../../../../lib/apis/searchService';
import * as Styled from './Styled';
import { useState } from 'react';
import BookInfoForm from '../../../UI/BookInfo/BookInfoForm';
const BookSearchForm = ({ bookInfo = {}, setValue }) => {
  const [search, setSearch] = useState(
    bookInfo.book_title ? bookInfo.book_title : ''
  );
  const [bookinfo, setBookinfo] = useState(bookInfo);
  console.log(bookInfo);
  const onBookInfoHandler = async (e) => {
    setSearch(e.target.value);
    const { item } = await BookSearch(e.target.value);
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
      <Styled.BookContainerDiv>
        <Styled.Tag>도서명</Styled.Tag>
        <Styled.Input
          type="search"
          placeholder="도서명 검색하세요"
          onChange={onBookInfoHandler}
          defaultValue={search}
        />
      </Styled.BookContainerDiv>
      <div>
        {search && (
          <BookInfoForm
            cover={bookinfo.cover}
            book_title={bookinfo.book_title}
            authors={bookinfo.authors}
            publisher={bookinfo.publisher}
            pud_date={bookinfo.pud_date}
          />
        )}
      </div>
    </>
  );
};

export default BookSearchForm;
