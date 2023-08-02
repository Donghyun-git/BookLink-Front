import * as Styled from './Styled';
import Profile from '../../Mypage/profile/Profile';
import NavMenu from '../../Mypage/Menu/navMenu';
import ActivityStatus from '../../Mypage/MyActive/activityStatus';

const MypageContainer = () => {
  return (
    <Styled.MypageContainer>
      <Profile />
      <NavMenu />
      <ActivityStatus />
    </Styled.MypageContainer>
  );
};

export default MypageContainer;
