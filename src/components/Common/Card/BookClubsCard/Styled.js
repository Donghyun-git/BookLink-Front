import styled from 'styled-components';

export const BookClubsCardDiv = styled.div`
  width: 24.426rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;
  border: 0.071rem solid #d9d9d9;
  border-radius: 0.857rem;
  margin: 0.857rem;
  &:nth-child(4n + 1) {
    margin-left: 0;
  }
  &:nth-child(4n) {
    margin-right: 0;
  }
  &:hover {
    transform: translateY(-8px);
    /* box-shadow: rgba(0, 0, 0, 0.08) 0px 12px 20px; */
    box-shadow: 0px 0px 6px 0px #00e37d;
  }
`;

export const BookClubsCardContainerDiv = styled.div`
  width: 22.714rem;
`;
export const BookClubsCardHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 2.571rem;
`;
export const BookClubsCardInfoDiv = styled.div`
  display: flex;
  font-size: 1rem;
`;
export const BookClubsCardInfoWriterDiv = styled.div`
  border-right: 0.071rem solid #848484;
  padding-right: 0.571rem;
`;
export const BookClubsCardInfoCategoryDiv = styled.div`
  border-right: 0.071rem solid #848484;
  width: 4.857rem;
  text-align: center;
`;
export const BookClubsCardInfoDateDiv = styled.div`
  padding-left: 0.571rem;
`;

export const BookClubsCardTitleDiv = styled.div`
  width: 100%;
  margin-top: 0.571rem;
  font-weight: bold;
`;
export const BookClubsCardContentDiv = styled.div`
  width: 100%;
  margin-top: 0.571rem;
  font-size: 0.857rem;
`;
