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
export const bellImg = styled.img`
  width: 2.571rem;
  height: 2.571rem;
`;
export const tag = styled.div`
  height: 2.571rem;
  margin: 0 0.571rem;
  font-size: 1.714rem;
  font-weight: bold;
`;

/*export const SelectDiv = styled.div`
  display: flex;
  height: 2.571rem;
`;
export const select = styled.select`
  height: 100%;
  width: 11.926rem;
  border-radius: 0.571rem;
  margin-right: 1.714rem;
  border: 0.143rem solid #848484;
`;
export const searchInput = styled.input`
  height: 100%;
  width: 25.714rem;
  border: 0.143rem solid #848484;
  border-radius: 0.571rem;
`;*/
export const MainDiv = styled.div`
  display: flex;
  width: 100%;
`;

export const ContentsDiv = styled.div`
  width: 78.429rem;
  margin-top: 1.714rem;
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
  &:nth-child(2) {
    border-color: #00e37d;
    color: #00e37d;
  }
`;
export const WriteBtn = styled(Btn)`
  height: 3.786rem;
`;

/*export const CardDiv = styled.div`
  width: 24.426rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;
  border: 0.071rem solid #d9d9d9;
  border-radius: 0.857rem;
  margin: 0.857rem;
  &:nth-child(3n + 1) {
    margin-left: 0;
  }
  &:nth-child(3n) {
    margin-right: 0;
  }
`;

export const CardContainerDiv = styled.div`
  width: 22.714rem;
`;
export const CardHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 2.571rem;
`;
export const CardInfoDiv = styled.div`
  display: flex;
  font-size: 1rem;
`;
export const CardInfoWriterDiv = styled.div`
  border-right: 0.071rem solid #848484;
  padding-right: 0.571rem;
`;
export const CardInfoCategoryDiv = styled.div`
  border-right: 0.071rem solid #848484;
  width: 4.857rem;
  text-align: center;
`;
export const CardInfoDateDiv = styled.div`
  padding-left: 0.571rem;
`;

export const CardTitleDiv = styled.div`
  width: 100%;
  margin-top: 0.571rem;
  font-weight: bold;
`;
export const CardContentDiv = styled.div`
  width: 100%;
  margin-top: 0.571rem;
  font-size: 0.857rem;
`;*/
