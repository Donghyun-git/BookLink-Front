/* eslint-disable no-unsafe-optional-chaining */
import { useNavigate, useLocation } from 'react-router-dom';
import { useUserStore } from '../../store/useUserStore';
import * as Styled from './Styled';
import logoutImage from '../../images/logout.svg';
import updateImage from '../../images/update.svg';

const Profile = ({ data }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const removeUserInfo = useUserStore(({ removeUserInfo }) => removeUserInfo);

  console.log('@@@', data);
  const { name, email, address, image } = data.profile;
  const { register, report } = data?.myBook;
  const { renting } = data?.myRent;

  const handleLogout = () => {
    const isLogout = confirm('로그아웃 하시겠습니까?');

    if (isLogout) {
      removeUserInfo();
      useUserStore.persist.clearStorage();
      alert('로그아웃 되었습니다!');

      navigate('/');
      return;
    }
  };

  const movePatchUserInfo = () => {
    navigate('/mybooklink/modify');
    return;
  };

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
                <span>기록한 도서</span>
                <span> {report}</span>
              </li>
              <li>
                <span>대여 가능한 도서 </span>
                <span>{register}</span>
              </li>
              <li>
                <span>대여중인 도서</span>
                <span> {renting}</span>
              </li>
            </ul>
          </Styled.ProfileActiveLabel>
        </Styled.ProfileInfoDiv>
      </Styled.ProfileLeft>
      <Styled.ProfileRight>
        {pathname === '/mybooklink' ? (
          <>
            <div>
              <button onClick={handleLogout}>
                <span>로그아웃</span>
                <img src={logoutImage} alt="logout" />
              </button>
            </div>
            <div>
              <button onClick={movePatchUserInfo}>
                <span>개인정보 수정</span>
                <img src={updateImage} alt="update" />
              </button>
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
