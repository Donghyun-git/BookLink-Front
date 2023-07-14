import styled from 'styled-components';

//[BackDropLayer]
export const BackDropDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

//[RentsModal]
export const BackDropLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9997;
`;

export const RentsModalDiv = styled.div`
  position: fixed;
  width: 117.28571rem;
  height: fit-content;
  border-radius: 2.57143rem;
  background: #fafbfa;
  margin: 4.86rem auto 156rem auto; //top: 30.86rem
  padding: 4.29rem 5.71rem 3.64rem 5.71rem;
  inset: 0;
  z-index: 9998;
`;

export const RentsModalRow = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const RentsModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.71rem;
`;

export const RentsModalInfoDiv = styled.div`
  display: flex;
  align-items: center;

  div {
    &:first-child {
      color: #3a3a3a;
      font-size: 1.71429rem;
      font-weight: 500;
    }

    &:nth-child(2) {
      color: #003c74;
      font-size: 1rem;
      font-weight: 500;
      margin: 0 1.71rem 0 0.86rem;

      span {
        margin-left: 0.86rem;
      }
    }

    &:last-child {
      position: relative;
      color: #848484;
      font-size: 0.71429rem;
      font-weight: 500;

      &::before {
        content: '>';
        position: absolute;
        top: 0;
        right: -0.671rem;
        cursor: pointer;
      }
    }
  }
`;

export const RentsModalFilterDiv = styled.div`
  ul {
    display: flex;
    align-items: center;
    margin-right: 0.571rem;
    li {
      button {
        border: 0;
        background: 0;

        div {
          color: #848484;
          text-align: right;

          font-size: 0.85714rem;

          font-weight: 500;
        }
      }

      &:last-child {
        margin-left: 0.86rem;
      }
    }
  }
`;

export const RentsModalContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-basis: calc(25%); /* 네 칸씩 정렬하고 간격을 조절합니다 */
`;

export const RentsModalCardDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 24.42857rem;
  height: 16.57143rem;
  border-radius: 0.85714rem;
  background: #fff;
  margin: 0 1.71rem 1.71rem 0;
  padding: 0.86rem 1.71rem;

  &:nth-child(4n) {
    margin-right: 0;
  }

  &:nth-child(4n + 1) {
    margin-left: 0;
  }
`;

export const ProfileDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.71rem;
`;

export const ProfileImageDiv = styled.div`
  width: 3.71429rem;
  height: 3.71429rem;
  background-color: #00e37d;
  border-radius: 50%;
  margin-right: 0.86rem;
`;

export const UserProfileDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  div {
    &:last-child {
      font-size: 0.85714rem;
      font-weight: 400;
    }
  }
`;

export const RentsInfoDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.86rem;

    li {
      font-size: 1.14286rem;
      font-weight: 400;

      &:last-child {
        color: #000;
        text-align: right;
        font-size: 1.14286rem;
        font-weight: 500;
      }
    }
  }
`;

export const RentsModalFooter = styled.div`
  margin-top: 0.7rem;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      padding: 0 0.43rem;

      button {
        border: 0;
        background: 0;
        font-size: 0.85714rem;
        font-weight: 500;

        //active ->  color: #d9d9d9;
      }
    }
  }
`;

export const RentsModalCloseButton = styled.button`
  position: absolute;
  top: -6.974rem;
  right: -5.58rem;
  background: 0;
  border: 0;
  color: #fff;
  font-size: 1.71429rem;
  font-weight: 500;
`;
