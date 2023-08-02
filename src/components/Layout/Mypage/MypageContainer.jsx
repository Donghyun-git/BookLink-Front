import * as Styled from './Styled';
import Profile from '../../Mypage/Profile/Profile';
import NavMenu from '../../Mypage/Menu/NavMenu';
import ActivityStatus from '../../Mypage/MyActive/ActivityStatus';

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
