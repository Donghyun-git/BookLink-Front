import styled from "styled-components";
import HeaderContainer from "./HeaderContainer";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer />
    </StyledHeader>
  );
};
export default Header;

const StyledHeader = styled.header`
  width: 100%;
  background: #ffffff;
`;
