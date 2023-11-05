import { useNavigate } from 'react-router-dom';
import * as Styled from './Styled';

const RentCard = ({
  rent_id,
  writer,
  book_rating,
  rental_fee,
  max_date,
  rent_location,
}) => {
  const navigate = useNavigate();

  return (
    <Styled.RentsModalCardDiv onClick={() => navigate(`/rent/${rent_id}`)}>
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
};

export default RentCard;
