import styled from 'styled-components';

//[Books Main]
export const BooksMain = styled.div`
  width: 100%;
  background-color: #fff;
`;

//[Books Container]
export const BooksContainer = styled.div`
  width: 102.857rem;
  margin: 0 auto;
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
  font-size: 2.571rem;
  font-weight: 700;
  color: ${({ active }) =>
    active === 'true' ? 'rgba(0, 0, 0, 1)' : 'rgba(217, 217, 217, 1)'};
  margin: 1.714rem;
  cursor: pointer;
  transition: all 0.2s;

  &:first-child {
    margin-left: 0;
  }
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
