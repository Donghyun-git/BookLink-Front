import { useSelector } from 'react-redux';
import * as Styled from './Styled';
import logoutImage from '../../../images/logout.svg';
import updateImage from '../../../images/update.svg';

const Profile = () => {
  const userNickName = useSelector((state) => state.USER.nickname);
  const userEmail = useSelector((state) => state.USER.email);

  return (
    <Styled.ProfileMain>
      <Styled.ProfileLeft className="profile">
        <Styled.ProfileImageDiv>
          <img
            src="https://soccerquick.s3.ap-northeast-2.amazonaws.com/1689834239634.png"
            alt="profile"
          />
        </Styled.ProfileImageDiv>
        <Styled.ProfileInfoDiv>
          <Styled.ProfileInfo>
            <h3>{userNickName}</h3>
            <address>{userEmail}</address>
          </Styled.ProfileInfo>
          <Styled.ProfileAddress>
            <span>캐치카페 화장시 하수구 1동 1호</span>
          </Styled.ProfileAddress>
          <Styled.ProfileActiveLabel>
            <ul>
              <li>
                <span>소장도서 2</span>
              </li>
              <li>
                <span>내가 빌려준 도서 1</span>
              </li>
              <li>
                <span>내가 빌린 도서 11</span>
              </li>
            </ul>
          </Styled.ProfileActiveLabel>
        </Styled.ProfileInfoDiv>
      </Styled.ProfileLeft>
      <Styled.ProfileRight>
        <div>
          {/* 로그아웃 함수 커스텀훅으로 빼기 */}
          <span>로그아웃</span>
          <img src={logoutImage} alt="logout" />
        </div>
        <div>
          <span>개인정보 수정</span>
          <img src={updateImage} alt="update" />
        </div>
      </Styled.ProfileRight>
    </Styled.ProfileMain>
  );
};

export default Profile;
