import styled from 'styled-components';

export const ProfileMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4.29rem;
`;

export const ProfileLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImageDiv = styled.div`
  display: flex;
  align-items: center;
  width: 7.28571rem;
  height: 7.28571rem;
  border-radius: 50%;
  margin-right: 1.71rem;

  img {
    width: 7.28571rem;
    height: 7.28571rem;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const ProfileInfoDiv = styled.div`
  h3 {
    font-size: 1.71429rem;
    font-weight: 500;
    margin-right: 0.86rem;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;

  address {
    color: #848484;
    font-size: 1.14286rem;
    font-weight: 400;
  }
`;

export const ProfileAddress = styled.div`
  span {
    display: inline-block;

    font-size: 1rem;
    font-weight: 500;
  }
`;

export const ProfileActiveLabel = styled.div`
  margin: 0.86rem 0;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.57143rem;
      border: 1px solid #00e37d;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.29rem 0.57rem;
        font-size: 0.71429rem;
        font-weight: 500;

        &:last-child {
          padding-left: 0;
        }
      }

      &:nth-child(2) {
        margin: 0 0.86rem;
      }
    }
  }
`;

export const ProfileRight = styled.div`
  display: flex;
  align-items: center;

  div {
    cursor: pointer;

    & button {
      background-color: #fafbfa;
      span {
        color: #848484;
        font-size: 0.85714rem;
        font-weight: 500;
        margin-right: 0.57rem;
      }

      img {
        width: 1.14286rem;
        height: 1rem;
        fill: #848484;
      }
    }

    &:first-child {
      margin-right: 1.71rem;
    }
  }
`;
