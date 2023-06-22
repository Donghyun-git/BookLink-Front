import styled from "styled-components";
import { Link } from "react-router-dom";

// [ Header(index)]
export const Header = styled.header`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
`;

// [ HeaderContainer ]
export const HeaderContainer = styled.div`
  width: 89.286rem;
  margin: 0 auto;
  padding: 1rem 2.286rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoDiv = styled.div`
  width: 12.214rem;
  height: 1.929rem;
`;

export const Img = styled.img`
  width: 100%;
  height: inherit;
`;

export const StyledLink = styled(Link)`
  font-size: 1.286rem;
  font-weight: 400;
  color: #848484;
`;

export const LinkWithMargin = styled(StyledLink)`
  margin: 0 3.929rem;
`;
