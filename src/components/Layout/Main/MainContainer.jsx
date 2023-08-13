import RedirectBooks from '../../Main/RedirectBooks';
import CommunityBanner from '../../Main/CommunityBanner';
import * as Styled from './Styled';

const MainContainer = () => {
  return (
    <Styled.MainContainer>
      <RedirectBooks />
      <CommunityBanner />
    </Styled.MainContainer>
  );
};

export default MainContainer;
