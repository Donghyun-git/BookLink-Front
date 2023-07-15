import * as Styled from './Styled';

const RentInfoCard = () => {
  return (
    <>
      <Styled.AsideCard2>
        <li>
          <Styled.AsideCard2_ImageDiv>
            {/* <img src="" alt="프로필 이미지" /> */}
          </Styled.AsideCard2_ImageDiv>
        </li>
        <li>
          <Styled.AsideCard2_UserInfoDiv>
            <span>길동아 님의 책방</span> <span>2.2km</span>
          </Styled.AsideCard2_UserInfoDiv>
          <Styled.AsideCard2_RentInfoDiv>
            <ul>
              <li>
                <span>대여 가능 기간</span>
                <span>최대 14일</span>
              </li>
              <li>
                <span>대여료</span>
                <span>1000원</span>
              </li>
            </ul>
          </Styled.AsideCard2_RentInfoDiv>
        </li>
      </Styled.AsideCard2>
    </>
  );
};

export default RentInfoCard;
