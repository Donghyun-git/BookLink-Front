import styled from 'styled-components';
import { Link } from 'react-router-dom';

// [ Header(index)]
export const Header = styled.header`
  width: 100%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
`;

// [ HeaderContainer ]
export const HeaderContainer = styled.div`
  width: 102.857rem;
  margin: 0 auto;
  /* padding: 1rem 2.286rem; */
  text-align: center;
  display: flex;
  align-items: center;
`;

export const LogoDiv = styled.div`
  width: 16.28571rem;
  height: 2.5rem;
  padding: 2.36rem 0 2.29rem 0;
  margin-right: 4.29rem;
`;

export const Img = styled.img`
  width: 100%;
  height: inherit;
`;

export const StyledLink = styled(Link)`
  color: #d9d9d9;
  font-size: 1.14286rem;
  font-weight: 700;
  color: ${(props) => (props.active === 'true' ? '#00E37D' : '#d9d9d9')};
`;

export const LinkWithMargin = styled(StyledLink)`
  margin: 0 2.57rem;
`;

export const SearchDiv = styled.div`
  position: relative;
  margin-left: 11.43rem;
  &:before {
    content: '';
    width: 1.2px;
    height: 1.71429rem;
    background-color: rgba(217, 217, 217, 1);
    position: absolute;
    top: 0.38rem;
    left: 6.43rem;
  }
`;

export const SearchInput = styled.input`
  && {
    padding-left: 0;
    padding-right: 0;
    width: 32.64286rem;
    height: 2.57143rem;
    border: 2px solid transparent;
    border-radius: 0.571rem;
    text-indent: 1.071rem;
    font-size: 0.714rem;
    background-image: linear-gradient(#fff, #fff),
      linear-gradient(to right, rgba(0, 227, 125, 1), rgba(0, 60, 116, 1));
    background-origin: border-box;
    background-clip: content-box, border-box;
    text-indent: 7.3rem;
  }
  &:focus {
    outline: none;
  }
`;

export const CategorySelect = styled.select`
  position: absolute;
  bottom: 0;
  left: -0.7rem;
  && {
    width: 6.86rem;
    height: 2.57143rem;
    padding: 0;
    margin: 0;
    border: 0;
    color: #000;
    text-align: center;
    font-size: 0.714rem;
    font-weight: 500;
    background-repeat: no-repeat;
    background-position: right 0.48rem center;
    background-size: 0.85714rem auto;
    &:focus {
      outline: none;
    }
  }
`;
