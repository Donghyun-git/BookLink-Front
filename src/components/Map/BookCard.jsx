import { useLocation } from 'react-router-dom';
import * as Styled from './Styled';

const BookCard = () => {
  const location = useLocation();
  const { title, author, pubDate, publisher, cover } = location.state;
  return (
    <Styled.CardWrap>
      <Styled.CardContainer>
        <Styled.CardImageDiv>
          <img src={cover} alt="book-image" />
        </Styled.CardImageDiv>
        <Styled.CardInfoDiv>
          <h2>{title}</h2>
          <ul>
            <li>
              저자 <span>{author}</span>
            </li>
            <li>
              출판 <span>{publisher}</span>
            </li>
            <li>{pubDate}</li>
          </ul>
        </Styled.CardInfoDiv>
      </Styled.CardContainer>
    </Styled.CardWrap>
  );
};

export default BookCard;
