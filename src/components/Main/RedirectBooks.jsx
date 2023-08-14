import { useNavigatePage } from '../../hooks/useNavigatePage';
import BookCard from '../Card/BookCard';
import * as Styled from './Styled';
import mainBooksLogo from '../../images/main_books_logo.png';

const RedirectBooks = () => {
  const { navigateToPage } = useNavigatePage();

  return (
    <Styled.MainBooks>
      <Styled.MainBooksTitle>
        <h2>읽고 싶은 책을 찾아보세요!</h2>
      </Styled.MainBooksTitle>
      <Styled.MainBooksContent>
        <Styled.CardDiv>
          <BookCard />
          <BookCard />
        </Styled.CardDiv>
        <Styled.BooksImageSectionDiv>
          <div>
            <img src={mainBooksLogo} alt="books_redirect_image" />
          </div>
          <p>더 많은 책을 찾고싶을 땐?</p>
          <Styled.MainBooksButtonDiv>
            <button onClick={() => navigateToPage('/books')}>
              <span>책방 바로가기</span>
            </button>
          </Styled.MainBooksButtonDiv>
        </Styled.BooksImageSectionDiv>
      </Styled.MainBooksContent>
    </Styled.MainBooks>
  );
};

export default RedirectBooks;
