import * as Styled from './FooterStyled';
import FooterLogoDiv from '../../Footer/FooterLogo';
import FooterContentsDiv from '../../Footer/FooterContents';
import FooterEmailDiv from '../../Footer/FooterEmail';
const FooterContainer = () => {
  return (
    <Styled.FooterContainer>
      <FooterLogoDiv />
      <FooterContentsDiv />
      <FooterEmailDiv />
    </Styled.FooterContainer>
  );
};

export default FooterContainer;
