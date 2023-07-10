import { useLocation } from 'react-router-dom';
import * as Styled from './styled';
import FooterContainer from './FooterContainer';

const FooterMain = () => {
  const { pathname } = useLocation();

  return (
    <Styled.FooterMain pathname={pathname}>
      <FooterContainer></FooterContainer>
    </Styled.FooterMain>
  );
};

export default FooterMain;
