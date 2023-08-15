import { useState, useEffect, useCallback } from 'react';
import { useRentContext } from '../../context/RentContext/rentContext';
import * as Styled from './Styled';
import BackDrop from './modal/BackDrop';
import { useGoToMap } from '../../hooks/Map/useGotoMap';
import { useNavigatePage } from '../../hooks/useNavigatePage';
import { getAllRent } from '../../lib/apis/rentService';
import { generateUniqueKey } from '../../utils/generateUnique';

const Rents = () => {
  const { state, dispatch } = useRentContext();
  const { rents } = state;
  const { goToMap } = useGoToMap();
  const { navigateToPage } = useNavigatePage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openRentsModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeRentsModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getAllRent();
        dispatch({ type: 'RENT/GETDATA', payload: data.data });
      } catch (error) {
        console.error(error);
        dispatch({ type: 'RENT/ERROR', payload: '대여 데이터가 없어요.' });
      }
    })();
  }, [dispatch]);

  return (
    <Styled.RentsComponentDiv>
      <Styled.BooksComponentDiv>
        {rents.map((card) => {
          const {
            rent_id: id,
            authors: author,
            title,
            avg_rental_fee: rentalFee,
            cover,
            isbn: isbn13,
            rent_period: rentDuringDate,
            publisher,
          } = card;
          return (
            <Styled.CardDiv
              key={generateUniqueKey()}
              onClick={() => navigateToPage(`/rent/${id}`)}
            >
              <Styled.RentsCardContainer>
                <Styled.CardContentsDiv>
                  <Styled.ContentsTitleDiv>{title}</Styled.ContentsTitleDiv>
                  <Styled.ContentsAuthorDiv>
                    <Styled.ContentSpan>저자</Styled.ContentSpan>
                    <Styled.ContentSpanRight>{author}</Styled.ContentSpanRight>
                  </Styled.ContentsAuthorDiv>
                  <Styled.ContentsPublishDiv>
                    <Styled.ContentSpan>출판</Styled.ContentSpan>
                    <Styled.ContentSpanRight>
                      {publisher}
                    </Styled.ContentSpanRight>
                  </Styled.ContentsPublishDiv>
                </Styled.CardContentsDiv>
                <Styled.CardImageDiv>
                  <Styled.CardImage src={cover} alt="책 이미지" />
                </Styled.CardImageDiv>

                <Styled.CardFooterDiv>
                  <ul>
                    <Styled.RentsLi>
                      <Styled.RentsLiSpan>대여료</Styled.RentsLiSpan>
                      <span>{rentalFee}원</span>
                    </Styled.RentsLi>
                    <Styled.RentsLi>
                      <Styled.RentsLiSpan>대여 가능 시간</Styled.RentsLiSpan>
                      <span>최대 {rentDuringDate}일</span>
                    </Styled.RentsLi>
                  </ul>
                  <Styled.RentsCardFooterButtonDiv>
                    <Styled.RentsCardButton onClick={openRentsModal}>
                      대여정보 확인하기
                    </Styled.RentsCardButton>
                    <Styled.RentsCardButton
                      onClick={(e) =>
                        goToMap({ isbn13, title, author, publisher, cover }, e)
                      }
                    >
                      내 주변 도서관 찾기
                    </Styled.RentsCardButton>
                  </Styled.RentsCardFooterButtonDiv>
                </Styled.CardFooterDiv>
              </Styled.RentsCardContainer>
            </Styled.CardDiv>
          );
        })}
      </Styled.BooksComponentDiv>
      {isModalOpen && <BackDrop onClose={closeRentsModal} />}
    </Styled.RentsComponentDiv>
  );
};

export default Rents;
