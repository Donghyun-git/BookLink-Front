import styled from 'styled-components';

export const MainContainerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MainContentsDiv = styled.div`
  width: 102.857rem;
  height: 100%;
`;
export const TagDiv = styled.div`
  margin-top: 5.286rem;
  display: flex;
`;
export const openbookImg = styled.img`
  width: 2.457rem;
  height: 3rem;
`;
export const tag = styled.div`
  height: 2.571rem;
  margin: 0 0.571rem;
  font-size: 1.714rem;
  font-weight: bold;
`;

export const SelectDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 76.714rem;
  font-size: 1rem;
  color: #d9d9d9;
  font-size: bold;
`;
export const select = styled.ul`
  display: flex;
`;
export const li = styled.li`
  margin-left: 0.714rem;
  color: ${({ isClicked }) => isClicked && 'black'};
`;

export const MainDiv = styled.div`
  display: flex;
  width: 100%;
`;

export const ContentsDiv = styled.div`
  width: 78.429rem;
  margin-top: 1rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  > div {
    &:nth-child(3n + 1) {
      margin-left: 0;
    }
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
`;

export const AsideDiv = styled.div`
  margin-left: 1.714rem;
  margin-top: 2.571rem;
  width: 24.429rem;
`;
export const searchInput = styled.input`
  width: 100%;
  height: 3.143rem;
  font-size: 1rem;
  border: 0.143rem solid #848484;
  border-radius: 0.571rem;
  margin-bottom: 1.714rem;
`;
export const Nav = styled.div`
  margin-bottom: 1.714rem;
`;
const Btn = styled.button`
  width: 100%;
  box-sizing: border-box;
  background: #ffffff;
  border: 0.071rem solid #d9d9d9;
  border-radius: 0.571rem;
  text-align: center;
`;
export const NavBtn = styled(Btn)`
  height: 3.143rem;
  &:nth-child(3) {
    border-color: #00e37d;
    color: #00e37d;
  }
`;
export const WriteBtn = styled(Btn)`
  height: 3.786rem;
`;
