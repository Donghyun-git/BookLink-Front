import { generateUniqueKey } from '../../../../utils/generateUnique';
import * as Styled from './Styled';
import { dateFormatYear } from '../../../../utils/date';
import { ko } from 'date-fns/locale';
import { useNavigatePage } from '../../../../hooks/useNavigatePage';

const AsideLeft = ({ writer, cardList }) => {
  const { navigateToPage } = useNavigatePage();
  return (
    <Styled.RentDetailAsideLeft>
      <Styled.AsideLeftHeader>
        <h2>{writer} 님이 기록한 도서</h2>
        <ul>
          <li>
            <span>대여 신청 가능만 보기</span>
          </li>
          <li>
            <span>모두 보기</span>
          </li>
        </ul>
      </Styled.AsideLeftHeader>
      <Styled.AsideLeftCount>
        <span>총 {cardList.length}권</span>
      </Styled.AsideLeftCount>
      <Styled.RentCardWrap>
        {cardList.map((card) => {
          const {
            authors,
            cover,
            created_time: createdTime,
            isbn: isbn13,
            publisher,
            rent_status: rentStatus,
            rental_fee: rentalFee,
            title,
          } = card;

          const isRentStatus = rentStatus === 'WAITING' || false;

          return (
            <Styled.RentCardDiv
              key={generateUniqueKey()}
              onClick={() => navigateToPage(`/books/${isbn13}`)}
            >
              <Styled.RentCardImageDiv>
                <img src={cover} alt="book_image" />
              </Styled.RentCardImageDiv>
              <Styled.RentCardContent>
                <Styled.CardHeaderDiv>
                  <h3>{title}</h3>
                  <div>
                    {isRentStatus ? (
                      <Styled.PossibleSpan active={isRentStatus.toString()}>
                        대여 신청 가능
                      </Styled.PossibleSpan>
                    ) : (
                      <Styled.PossibleSpan active={isRentStatus.toString()}>
                        대여 신청 불가
                      </Styled.PossibleSpan>
                    )}
                    <span>{dateFormatYear(createdTime)}</span>
                  </div>
                </Styled.CardHeaderDiv>
                <div>
                  <ul>
                    <li>
                      <span>저자</span>
                      <strong>{authors}</strong>
                    </li>
                    <li>
                      <span>출판</span>
                      <strong>{publisher}</strong>
                    </li>
                  </ul>
                </div>
                <Styled.RentFeeInfo>
                  <strong>대여료</strong>
                  <span>{rentalFee.toLocaleString(ko)}원 ~</span>
                </Styled.RentFeeInfo>
              </Styled.RentCardContent>
            </Styled.RentCardDiv>
          );
        })}
      </Styled.RentCardWrap>
    </Styled.RentDetailAsideLeft>
  );
};

export default AsideLeft;
