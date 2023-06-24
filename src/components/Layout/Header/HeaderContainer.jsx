import Logo from '../../../images/BookLink_Logo.svg';
import * as Styled from './HeaderStyled';

const HeaderContainer = () => {
  return (
    <Styled.HeaderContainer>
      <Styled.LogoDiv>
        <Styled.Img src={Logo} />
      </Styled.LogoDiv>
      <div>
        <Styled.StyledLink to="/books">책방</Styled.StyledLink>
        <Styled.LinkWithMargin to="/book-meetings">
          독서모임
        </Styled.LinkWithMargin>
        <Styled.StyledLink to="/mypage">마이페이지</Styled.StyledLink>
      </div>
    </Styled.HeaderContainer>
  );
};

export default HeaderContainer;
