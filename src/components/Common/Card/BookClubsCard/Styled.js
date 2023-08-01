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
export const LocationDiv = styled.div`
  height: 100%;
  font-size: 1.286rem;
  font-weight: bold;
  display: flex;
  div {
    margin-top: 0.287rem;
    height: 66.7%;
  }
`;
export const LocationImg = styled.img`
  height: 75%;
  margin-top: 0.287rem;
  margin-right: 0.857rem;
`;
export const replyDiv = styled.div`
  height: 100%;
  font-size: 1rem;
  color: #848484;
  display: flex;
  div {
    height: 1rem;
    margin: 0.571rem 0.871rem 0 0;
  }
`;
export const replyImg = styled.img`
  height: 1rem;
  margin-top: 0.857rem;
  margin-right: 0.571rem;
`;
export const PointsImg = styled.img`
  height: 1.286rem;
  margin-top: 0.857rem;
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
