import styled from 'styled-components';

export const Wrapper = styled.div``;
export const Contents = styled.div`
  display: flex;
  width: 106.71429rem;
  margin-top: 2.57rem;
  padding-bottom: 0px;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.57143rem;
  border-top: 2px solid #00e37d;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const MypageCardTitle = styled.div`
  display: flex;
  height: 4.28571rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-bottom: 0.5px solid #dedede;

  h3 {
    text-align: center;
    font-size: 1.42857rem;
    font-weight: 500;
  }
`;

export const ListDiv = styled.div`
  display: flex;
  min-height: 41.857rem;
`;

export const LeftList = styled.div`
  & div {
    & div {
      border-radius: 0rem 0.28571rem 0.28571rem 0rem;
      padding: 0.85714rem 0rem;
      background: #fff;
      text-align: center;
      width: 8.573rem;
      cursor: pointer;

      &.active {
        background: #00e37d;
        span {
          color: #fff;
          font-size: 1.14286rem;
          font-weight: 700;
        }
      }

      span {
        color: #d9d9d9;
        text-align: center;
        font-size: 1.14286rem;
        font-weight: 500;

        &.active {
          color: #fff;
          font-size: 1.14286rem;
          font-weight: 700;
        }
      }
    }
  }
`;

export const RightList = styled.div`
  width: 100%;
  padding: 0 0.86rem;
`;

export const Pagination = styled.div`
  align-self: center;
`;
