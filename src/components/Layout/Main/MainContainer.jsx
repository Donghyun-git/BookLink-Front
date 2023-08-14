import RedirectBooks from '../../Main/RedirectBooks';
import CommunityBanner from '../../Main/CommunityBanner';
import RedirectReport from '../../Main/RedirectReport';
import * as Styled from './Styled';

const MainContainer = () => {
  return (
    <Styled.MainContainer>
      <RedirectBooks />
      <RedirectReport />
      <CommunityBanner />
    </Styled.MainContainer>
  );
};

export default MainContainer;
