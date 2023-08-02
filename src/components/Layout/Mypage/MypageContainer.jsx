import * as Styled from './Styled';
import Profile from '../../Mypage/profile/Profile';
import NavMenu from '../../Mypage/menu/navMenu';

const MypageContainer = () => {
  return (
    <Styled.MypageContainer>
      <Profile />
      <NavMenu />
    </Styled.MypageContainer>
  );
};

export default MypageContainer;
