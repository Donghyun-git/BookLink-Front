import styled from 'styled-components';

export const MypageCard = styled.div`
  display: flex;
  width: 76.71429rem;
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
  border-bottom: 0.5px solid #848484;
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
  ul {
    li {
      border-radius: 0rem 0.28571rem 0.28571rem 0rem;
      padding: 0.85714rem 0rem;
      background: #00e37d;
      text-align: center;
      width: 8.573rem;
      cursor: pointer;

      span {
        color: #fff;
        font-size: 1.14286rem;
        font-weight: 700;
      }
    }
  }
`;

export const RightList = styled.div`
  padding-left: 0.86rem;
  table {
    .content {
      width: 24.42857rem;
    }
    thead {
      th {
        color: #848484;
        text-align: center;
        font-size: 0.85714rem;
        font-weight: 400;
        width: 24.42857rem;

        &:first-child {
          width: 2.571rem;
        }
      }
    }

    tbody {
      td {
        text-align: center;
      }
      span {
        color: #000;
        font-size: 0.85714rem;
        font-weight: 400;
      }
      p {
        color: #000;
        font-size: 0.85714rem;
        font-weight: 400;
        max-width: 24.42857rem;
        margin: 0 auto;
      }

      strong {
        color: #848484;
        font-size: 0.85714rem;
        font-weight: 400;
      }
    }
  }
`;

export const Pagination = styled.div`
  align-self: center;
`;
