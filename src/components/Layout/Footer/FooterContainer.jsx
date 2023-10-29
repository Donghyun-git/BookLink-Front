import * as Styled from './styled';
import FooterLogoDiv from '../../Footer/FooterLogo';
import FooterContentsDiv from '../../Footer/FooterContents';

const FooterContainer = () => {
  return (
    <Styled.FooterContainer>
      <FooterLogoDiv />
      <FooterContentsDiv />
    </Styled.FooterContainer>
  );
};

export default FooterContainer;
