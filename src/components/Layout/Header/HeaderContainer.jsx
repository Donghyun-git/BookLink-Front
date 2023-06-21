import Logo from "../../../BookLink_Logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = () => {
  return (
    <StyledHeaderContainer>
      <StyledLogoDiv>
        <img src={Logo} />
      </StyledLogoDiv>
      <div>
        <StyledLink to="/books">책방</StyledLink>
        <StyledLinkWithMargin to="/book-meetings">
          독서모임
        </StyledLinkWithMargin>
        <StyledLink to="/mypage">마이페이지</StyledLink>
      </div>
    </StyledHeaderContainer>
  );
};

export default HeaderContainer;

const StyledHeaderContainer = styled.div`
  width: 89.286em;
  margin: 0 auto;
  padding: 1rem 2.286rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoDiv = styled.div``;

const StyledLink = styled(Link)`
  font-size: 1.714em;
  font-weight: 400;
  color: #848484;
`;

const StyledLinkWithMargin = styled(StyledLink)`
  margin: 0 3.929rem;
`;
