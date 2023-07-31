import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './Styled';

const SelfDevelopCard = ({ book }) => {
  const navigate = useNavigate();

  const handleNavigateRecommendDetail = useCallback(() => {
    navigate(`/books/${book.isbn13}`);
  }, [book.isbn13, navigate]);
  return (
    <>
      <Styled.AsideCard1 onClick={handleNavigateRecommendDetail}>
        <div>
          <Styled.AsideCard1_ImageDiv>
            <img src={book.cover} alt="책 이미지" />
          </Styled.AsideCard1_ImageDiv>
        </div>
        <Styled.AsideCard1_ContentDiv>
          <h3>{book.title}</h3>
          <ul>
            <li>
              <span>저자</span>
              <strong>{book.author}</strong>
            </li>
            <li>
              <span>출판사</span> <strong>{book.publisher}</strong>
            </li>
          </ul>
          <ul>
            <li>
              <span>출판일</span>
              <strong>{book.pubDate}</strong>
            </li>
            <li>
              <span>정가</span>
              <strong>{book.priceStandard}</strong>
            </li>
          </ul>
        </Styled.AsideCard1_ContentDiv>
      </Styled.AsideCard1>
    </>
  );
};

export default SelfDevelopCard;
