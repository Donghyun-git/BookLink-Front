import styled from 'styled-components';

//[RentInfoAsideLeft]
export const RentDetailAsideLeft = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.57143rem;
  width: 28rem;

  h2 {
    font-size: 1.14286rem;
    font-weight: 500;
  }

  h3 {
  }
`;

export const AsideLeftHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    margin-left: 3.43rem;
    gap: 0.57rem;

    li {
      cursor: pointer;

      span {
        color: #d9d9d9;
        text-align: right;
        font-size: 0.57143rem;
        font-weight: 500;
      }

      &:last-child {
        span {
          color: #000;
        }
      }
    }
  }
`;

export const AsideLeftCount = styled.div`
  span {
    color: #000;
    font-size: 0.57143rem;
    font-weight: 500;
  }
`;
export const RentCardWrap = styled.div`
  div {
    &:first-child {
      margin-top: 0;
    }
  }
`;

export const RentCardDiv = styled.div`
  display: flex;
  width: 26.929rem;
  align-items: center;
  gap: 0.57rem;
  border-radius: 0.57143rem;
  border: 1px solid #d9d9d9;
  margin: 0.57rem 0;
  cursor: pointer;
`;

export const RentCardImageDiv = styled.div`
  width: 4.35429rem;
  height: 7.01429rem;
  padding: 0.36rem;
  border-radius: 0.57143rem;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 70%;
    height: 90%;
    object-fit: cover;
    box-shadow: -2px -2px 12px 0px rgba(0, 0, 0, 0.15);
  }
`;

export const RentCardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-right: 0.57rem;

  ul {
    display: flex;
    align-items: center;

    li {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 10rem;
      span {
        color: #767676;
        font-size: 0.71429rem;
        font-weight: 400;
      }
      strong {
        font-size: 0.71429rem;
        font-weight: 400;
        margin: 0 0.57rem 0 0.29rem;
      }
    }
  }
`;

export const CardHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.786rem;
  padding-top: 0.57rem;

  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 8rem;
    font-size: 0.85714rem;
    font-weight: 500;
  }

  div {
    span {
      &:last-child {
        color: #767676;
        text-align: right;
        font-size: 0.57143rem;
        font-weight: 400;
        margin-left: 0.29rem;
      }
    }
  }
`;

export const PossibleSpan = styled.span`
  color: ${({ active }) => (active === 'true' ? '#3365fd' : '#E30000')};
  text-align: right;
  font-size: 0.57143rem;
  font-weight: 500;
`;

export const RentRegisterInfo = styled.div``;

export const RentFeeInfo = styled.div`
  margin-left: auto;
  padding: 0 0.57rem 0.57rem 0;

  strong {
    color: #767676;
    font-size: 0.85714rem;
    font-weight: 400;
  }
  span {
    font-size: 0.85714rem;
    font-weight: 700;
    margin-left: 0.57rem;
  }
`;

//[RentInfoAsideRight]
export const AsideRightDiv = styled.div`
  display: flex;
  width: 22.07143rem;
  height: fit-content;
  padding: 1.71429rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.42857rem;
  border-radius: 0.85714rem;
  background: #fff;
  margin-left: -3.57143rem;
`;

export const RentIntroDiv = styled.div`
  div {
    &:last-child {
      margin-top: 0.86rem;
      p {
        font-weight: 400;
      }
    }
  }
  h3 {
    font-size: 1.28571rem;
    font-weight: 500;
  }
  p {
    font-size: 0.85714rem;
    font-weight: 500;
    margin-top: 0.57rem;
  }
`;

export const RentSubmitDiv = styled.div`
  width: 100%;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.86rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
  h4 {
    color: #444;
    font-size: 1.14286rem;
    font-weight: 500;
  }
  select {
    width: 11.92857rem;
    height: fit-content;
    border-radius: 0.57143rem;
    border: 1px solid #d9d9d9;
    padding: 0.42857rem 0.85714rem 0.42857rem 0;
    text-align: center;
    font-size: 1.14286rem;
    font-weight: 500;
    border: 1px solid #00e37d;

    &:focus {
      outline: 1px solid #00e37d;
    }
  }

  button {
    border-radius: 0.57143rem;
    border: 1px solid #00e37d;
    margin: 0 auto;
    background-color: #fff;

    span {
      display: inline-block;
      padding: 0.86rem 8.04rem;
      color: #00162c;
      text-align: center;
      font-size: 1.14286rem;
      font-weight: 500;
    }
  }
`;
