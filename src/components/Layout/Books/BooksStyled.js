import styled from 'styled-components';

//[Books Main]
export const BooksMain = styled.div`
  width: 100%;
  background-color: #fff;
`;

//[Books Container]
export const BooksContainer = styled.div`
  width: 102.857rem;

  margin: 2.57rem auto 0 auto;
`;

export const SearchDiv = styled.div`
  width: 51.857rem;
  margin: 0 auto;
`;

export const SearchInput = styled.input`
  && {
    padding-left: 0;
    padding-right: 0;
    width: 100%;
    height: 4.286rem;
    border: 2px solid transparent;
    border-radius: 1.714rem;
    text-indent: 1.071rem;
    background-image: linear-gradient(#fff, #fff),
      linear-gradient(to right, rgba(0, 227, 125, 1), rgba(0, 60, 116, 1));
    background-origin: border-box;
    background-clip: content-box, border-box;
  }
  margin: 4.286rem auto;
  width: 100%;
  height: 4.286em;
`;

export const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavLi = styled.li`
  color: #fff;
  font-size: 1.71429rem;
  font-weight: 500;
  margin: 1.714rem 0;

  cursor: pointer;
  transition: all 0.1s;

  color: ${({ active }) =>
    active === 'true' ? '#fff' : 'rgba(217, 217, 217, 1)'};
  border-radius: ${({ active }) => (active === 'true' ? '8px' : '0')};
  background: ${({ active }) => (active === 'true' ? '#00e37d' : '#fff')};
  box-shadow: ${({ active }) =>
    active === 'true' ? '0px 0px 4px 0px rgba(0, 0, 0, 0.25)' : '0'};
`;

export const NavLiDiv = styled.div`
  padding: 0.71rem 1.71rem 0.2rem 1.71rem;
`;

export const NavLiLogo = styled.img`
  width: 2.28571rem;
  height: 2.71429rem;
  margin: 0 0.29rem 0.657rem 0;
  filter: ${({ active }) =>
    active === 'true' ? 'brightness(1)' : 'brightness(0.9)'};
`;

export const NavLiRentLogo = styled(NavLiLogo)`
  filter: ${({ active }) =>
    active === 'true' ? 'brightness(2)' : 'brightness(1)'};
`;

export const NavSortUl = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavSortLi = styled.li`
  margin: 0.857rem;
  font-size: 0.857rem;
  font-weight: 400;
  color: ${({ active }) =>
    active === 'true' ? 'rgba(0, 0, 0, 1)' : 'rgba(132, 132, 132, 1)'};
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;
