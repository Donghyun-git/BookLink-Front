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

export const PopularDiv = styled.div`
  width: 100%;
  height: 37.714rem;
  margin-top: 5.286rem;
`;

export const BookClubsDiv = styled.div`
  width: 100%;
  height: 23rem;
  margin-top: 6rem;
`;

export const BoardsDiv = styled.div`
  width: 100%;
  margin-top: 6rem;
`;
export const TagDiv = styled.div`
  height: 3.429rem;
  display: flex;
`;
export const fireImg = styled.img`
  width: 2rem;
  height: 2.571rem;
`;
export const bellImg = styled.img`
  width: 2.571rem;
  height: 2.571rem;
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
export const link = styled.a`
  margin: 0.571rem;
  color: #848484;
`;
export const ContentsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
export const PopularContentSDiv = styled(ContentsDiv)`
  height: 33rem;
`;
export const BookClubsContentSDiv = styled(ContentsDiv)`
  height: 20rem;
`;
export const BoardsContentsDiv = styled(ContentsDiv)`
  flex-wrap: wrap;
`;

export const CardDiv = styled.div`
  height: 33.426rem;
  width: 24.426rem;
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
`;

export const BookClubsCardDiv = styled(CardDiv)`
  height: 20rem;
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
