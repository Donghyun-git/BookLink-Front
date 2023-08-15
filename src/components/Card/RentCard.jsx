import * as Styled from './Styled';

const RentCard = ({
  name,
  distance,
  quality,
  rentFee,
  rentMonth,
  location,
}) => {
  return (
    <Styled.RentsModalCardDiv>
      <Styled.ProfileDiv>
        <Styled.ProfileImageDiv>
          {/* <img src="" alt="" /> */}
        </Styled.ProfileImageDiv>
        <Styled.UserProfileDiv>
          <div>{name} 님의 책방</div>
          <div>{distance}km</div>
        </Styled.UserProfileDiv>
      </Styled.ProfileDiv>
      <Styled.RentsInfoDiv>
        <ul>
          <li>도서품질</li>
          <li>{quality}</li>
        </ul>

        <ul>
          <li>대여료</li>
          <li>{rentFee}원 ~</li>
        </ul>

        <ul>
          <li>대여 가능 기간</li>
          <li>최대 {rentMonth}개월</li>
        </ul>

        <ul>
          <li>대여 장소</li>
          <li>{location}</li>
        </ul>
      </Styled.RentsInfoDiv>
    </Styled.RentsModalCardDiv>
  );
};

export default RentCard;
