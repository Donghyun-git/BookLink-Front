import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ToggleLogo from '../../../images/select_arrow.png';

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
    width: 1px;
    height: 1.71429rem;
    background-color: rgba(217, 217, 217, 1);
    position: absolute;
    top: 0.38rem;
    left: 6.43rem;
    z-index: 9999;
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

export const SelectContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0.273rem;
`;

export const CategorySelect = styled.select`
  display: none;
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
export const SelectSpan = styled.span`
  display: inline-block;
  position: relative;
  color: #000;
  text-align: center;
  font-size: 0.85714rem;
  font-weight: 500;
  padding: 0.2rem 1.61rem;
  cursor: pointer;
  min-width: 3rem;
  z-index: 9999;
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 0.45714rem;
    height: 0.45714rem;
    background-image: url(${ToggleLogo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

export const OptionsList = styled.ul`
  && {
    border: 2px solid transparent;
    border-radius: 0.571rem;
    background-image: linear-gradient(#fff, #fff),
      linear-gradient(to right, rgba(0, 227, 125, 1), rgba(0, 60, 116, 1));
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  position: absolute;
  top: 2.894rem;
  left: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  width: 6.42857rem;
  background-color: #fff;
  cursor: pointer;
`;

export const OptionItem = styled.li`
  padding: 0.57rem 1.15rem;
  margin: 0 0.61rem;
  border-bottom: 1px solid rgba(217, 217, 217, 1);
  color: #848484;
  text-align: center;
  font-size: 0.85714rem;
  font-weight: 500;

  &:hover {
    color: #000;
  }

  &:last-child {
    border: 0;
  }
`;

export const OptionImage = styled.img`
  width: 0.85714rem;
  height: 0.85714rem;
`;

export const HeaderProfileDiv = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileText = styled.span`
  color: #000;
  font-size: 1.14286rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ProfileImgDiv = styled.div`
  width: 3.42857rem;
  height: 3.42857rem;
  border-radius: 3.42857rem;
  background: #d9d9d9;
  margin-left: 0.86rem;
`;

export const HeaderAuthButton = styled.div`
  position: relative;
  font-size: 1.34286rem;
  font-style: normal;
  font-weight: 700;
  padding: 0 0.86rem;

  &:last-child {
    &::after {
      content: '';
      position: absolute;
      top: 0.771rem;
      left: -0.071rem;
      width: 0.214rem;
      height: 0.214rem;
      border-radius: 7.143rem;
      background: rgb(228, 228, 228);
    }
  }
`;

export const LinkWithAuthHref = styled(Link)`
  color: #000;
`;
