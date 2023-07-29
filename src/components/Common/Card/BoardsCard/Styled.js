import styled from 'styled-components';

export const BoardsCardDiv = styled.div`
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
  &:hover {
    transform: translateY(-8px);
    /* box-shadow: rgba(0, 0, 0, 0.08) 0px 12px 20px; */
    box-shadow: 0px 0px 6px 0px #00e37d;
  }
`;

export const BoardsCardContainerDiv = styled.div`
  width: 22.714rem;
`;
export const BoardsCardHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 2.571rem;
`;
export const BoardsCardHeaderLeft = styled.div`
  display: flex;
  font-size: 1rem;
  color: #848484;
  div {
    height: 50%;
    margin: 0.571rem 0.857rem 0 0;
  }
  img {
    height: 1rem;
    margin: 0.857rem 0.571rem 0 0;
  }
`;
export const BoardsCardHeaderRight = styled.div`
  img {
    height: 1.286rem;
    margin-top: 0.571rem;
  }
`;

export const BoardsCardInfoDiv = styled.div`
  display: flex;
  font-size: 1rem;
`;
export const BoardsCardInfoWriterDiv = styled.div`
  border-right: 0.071rem solid #848484;
  padding-right: 0.571rem;
`;
export const BoardsCardInfoCategoryDiv = styled.div`
  border-right: 0.071rem solid #848484;
  width: 4.857rem;
  text-align: center;
`;
export const BoardsCardInfoDateDiv = styled.div`
  padding-left: 0.571rem;
`;

export const BoardsCardTitleDiv = styled.div`
  width: 100%;
  margin-top: 0.571rem;
  font-weight: bold;
`;
export const BoardsCardContentDiv = styled.div`
  width: 100%;
  margin-top: 0.571rem;
  font-size: 0.857rem;
`;

/* border: 0.143rem solid transparent;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, rgba(0, 227, 125, 1), rgba(0, 60, 116, 1));
  background-origin: border-box;
  background-clip: content-box, border-box;*/
