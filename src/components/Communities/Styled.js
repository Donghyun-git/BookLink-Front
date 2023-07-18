import styled from 'styled-components';

export const MainContainerDiv = styled.div`
  width: 100vw;
  border: 1px solid black;
  display: flex;
  justify-content: center;
`;

export const MainContentsDiv = styled.div`
  width: 70%;
  height: 100%;
  border: 1px solid black;
`;
export const PopularDiv = styled.div`
  width: 100%;
  height: 36rem;
  border: 1px solid black;
`;

export const BookClubsDiv = styled.div`
  width: 100%;
  height: 23rem;
  border: 1px solid black;
`;

export const BoardsDiv = styled.div`
  width: 100%;
  border: 1px solid black;
`;
export const TagDiv = styled.div`
  width: 17rem;
  heigth: 2.5rem;
  border: 1px solid black;
`;
export const ContentsDiv = styled.div`
  width: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
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
  width: 23%;
  height: 31rem;
  border: 1px solid black;
  margin: 1rem 0;
`;

export const BookClubsCardDiv = styled(CardDiv)`
  height: 18rem;
`;