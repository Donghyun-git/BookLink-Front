import styled from 'styled-components';

export const MapComponent = styled.div`
  border-radius: 0.85714rem;
`;

//[ 맵 마커 ]
export const MarkerDiv = styled.div`
  color: '#000';
`;

//[ 도서관 리스트 ]
export const LibraryList = styled.li`
  margin-bottom: 0.79rem;
  border-bottom: 1px solid #dedede;
  padding-bottom: 0.79rem;
  cursor: pointer;

  &:hover h4 {
    color: #000;
  }

  &:last-child {
    border-bottom: 0;
  }

  div:first-child {
    display: flex;
    align-items: center;
    margin-bottom: 0.57rem;
  }

  h4 {
    font-size: 1.42857rem;
    font-weight: 500;
    margin-right: 0.86rem;
  }
  span,
  p {
    color: #444;
    font-size: 0.85714rem;
    font-weight: 400;

    span {
      color: #000;
      font-size: 0.85714rem;
      font-weight: 400;
      margin-left: 0.57rem;
    }
  }
`;

//[ 카드 영역 ]
export const CardWrap = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  padding: 0.86rem;
  display: flex;
  justify-content: first baseline;
`;

export const CardContainer = styled.div`
  display: flex;
`;

export const CardImageDiv = styled.div`
  width: 9.57143rem;
  height: 9.57143rem;
  border-radius: 0.85714rem;
  background: #dedede;
  text-align: center;

  img {
    width: 80%;
    height: 100%;
  }
`;

export const CardInfoDiv = styled.div`
  position: relative;
  margin-left: 1.71rem;

  h2 {
    color: #000;
    font-size: 1.71429rem;
    font-weight: 500;
  }
  ul {
    li {
      color: #767676;
      font-size: 1rem;
      font-weight: 400;

      span {
        margin-left: 0.57rem;
        color: #000;
        font-size: 1rem;
        font-weight: 400;
      }
    }
  }

  &::before {
    content: '';
    width: 90.67143rem;
    height: 0.07143rem;
    background-color: #d9d9d9;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const CustomOverlay = styled.div`
  position: relative;
  border-radius: 0.57143rem;
  border: 2px solid #00ab61;
  background: #fff;

  span {
    display: inline-block;
    padding: 0.57143rem 0.85714rem;
    text-align: center;
    color: #000;
    font-size: 1.14286rem;
    font-weight: 500;
  }

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -7px;
    border-top: 7px solid #00ab61;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    margin-left: -4px;
  }
`;
