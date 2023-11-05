import { useGetRentMoreQuery } from '../../../services/rent/useGetRentMoreQuery';
import { useNavigate } from 'react-router-dom';
import * as Styled from './Styled';

const RentsModal = ({ onClose, title }) => {
  const navigate = useNavigate();

  const { data } = useGetRentMoreQuery({
    title,
  });
  console.log(data);
  return (
    <Styled.RentsModalDiv>
      <Styled.RentsModalRow>
        <Styled.RentsModalCloseButton onClick={onClose}>
          닫기
        </Styled.RentsModalCloseButton>
        <Styled.RentsModalHeader>
          <Styled.RentsModalInfoDiv>
            <div>{title}</div>
            <div>
              <span>{data.length} 건</span>
            </div>
            <div>
              <button onClick={() => navigate('/mybooklink/modify')}>
                마이페이지에서 주소 변경하기
              </button>
            </div>
          </Styled.RentsModalInfoDiv>
        </Styled.RentsModalHeader>
        <Styled.RentsModalContainer>
          {data.map((card) => {
            const {
              isbn,
              rent_id,
              writer,
              book_rating,
              rental_fee,
              max_date,
              rent_location,
            } = card;
            return (
              <Styled.RentsModalCardDiv
                key={rent_id}
                onClick={() => navigate(`/rent/${rent_id}`)}
              >
                <Styled.ProfileDiv>
                  <Styled.ProfileImageDiv>
                    {/* <img src="" alt="" /> */}
                  </Styled.ProfileImageDiv>
                  <Styled.UserProfileDiv>
                    <div>{writer} 님의 책방</div>
                  </Styled.UserProfileDiv>
                </Styled.ProfileDiv>
                <Styled.RentsInfoDiv>
                  <ul>
                    <li>도서품질</li>
                    <li>{book_rating}</li>
                  </ul>

                  <ul>
                    <li>대여료</li>
                    <li>{rental_fee}원 ~</li>
                  </ul>

                  <ul>
                    <li>대여 가능 기간</li>
                    <li>최대 {max_date}일</li>
                  </ul>

                  <ul>
                    <li>대여 장소</li>
                    <li>{rent_location}</li>
                  </ul>
                </Styled.RentsInfoDiv>
              </Styled.RentsModalCardDiv>
            );
          })}
        </Styled.RentsModalContainer>
        <Styled.RentsModalFooter>
          {/* <ul>
            <li>
              <button>1</button>
            </li>
            <li>
              <button>2</button>
            </li>
            <li>
              <button>3</button>
            </li>
          </ul> */}
        </Styled.RentsModalFooter>
      </Styled.RentsModalRow>
    </Styled.RentsModalDiv>
  );
};

export default RentsModal;
