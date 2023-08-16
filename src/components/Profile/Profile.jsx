import { useLocation } from 'react-router-dom';
import * as Styled from './Styled';
import logoutImage from '../../images/logout.svg';
import updateImage from '../../images/update.svg';

const Profile = ({
  name,
  email,
  address,
  image,
  recordCnt,
  rentAvailableCnt,
  rentingCnt,
}) => {
  const { pathname } = useLocation();

  return (
    <Styled.ProfileMain>
      <Styled.ProfileLeft className="profile">
        <Styled.ProfileImageDiv>
          <img
            src={
              image ||
              'https://soccerquick.s3.ap-northeast-2.amazonaws.com/1689834239634.png'
            }
            alt="profile"
          />
        </Styled.ProfileImageDiv>
        <Styled.ProfileInfoDiv>
          <Styled.ProfileInfo>
            <h3>{name}</h3>
            {email && <address>{email}</address>}
          </Styled.ProfileInfo>
          {address && (
            <Styled.ProfileAddress>
              <span>{address}</span>
            </Styled.ProfileAddress>
          )}
          <Styled.ProfileActiveLabel>
            <ul>
              <li>
                <span>기록한 도서 {recordCnt}</span>
              </li>
              <li>
                <span>대여 가능한 도서 {rentAvailableCnt}</span>
              </li>
              <li>
                <span>대여중인 도서 {rentingCnt}</span>
              </li>
            </ul>
          </Styled.ProfileActiveLabel>
        </Styled.ProfileInfoDiv>
      </Styled.ProfileLeft>
      <Styled.ProfileRight>
        {pathname === '/mybooklink' ? (
          <>
            <div>
              {/* 로그아웃 함수 커스텀훅으로 빼기 */}
              <span>로그아웃</span>
              <img src={logoutImage} alt="logout" />
            </div>
            <div>
              <span>개인정보 수정</span>
              <img src={updateImage} alt="update" />
            </div>
          </>
        ) : (
          <div>
            <span>1:1 채팅하기</span>
          </div>
        )}
      </Styled.ProfileRight>
    </Styled.ProfileMain>
  );
};

export default Profile;
