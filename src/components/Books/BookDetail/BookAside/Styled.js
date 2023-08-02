import styled from 'styled-components';

//[ BookAside ]
export const BookAside = styled.aside`
  width: 34rem;
`;

export const BookAsideSection = styled.div`
  margin-top: 2.71rem;

  &:first-child {
    margin-top: 0;
  }
`;

export const AsideCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border: 0;
    background: 0;

    div {
      color: #848484;
      font-size: 0.85714rem;
      font-weight: 500;
    }
  }

  h2 {
    font-size: 1.71429rem;
    font-weight: 500;
  }
`;

// [ aside card section 1]

export const AsideCard1 = styled.li`
  display: flex;
  align-items: center;
  border-radius: 0.85714rem;
  border: 1px solid #d9d9d9;
  width: 33.14286rem;
  height: 6.85714rem;
  margin-top: 1.71rem;
  margin-bottom: 0.86rem;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const AsideCard1_ImageDiv = styled.div`
  width: 3.85714rem;
  height: 5.85714rem;
  border-radius: 0.85714rem;
  background: #f4f4f4;
  padding: 0.5rem 1rem;
  margin-right: 0.86rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const AsideCard1_ContentDiv = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  h3 {
    color: #3a3a3a;
    font-size: 1.14286rem;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  ul {
    display: flex;
    align-items: center;

    li {
      span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #848484;
        font-size: 0.85714rem;
        font-weight: 400;
        margin-right: 0.57rem;
      }

      strong {
        color: #000;
        font-size: 0.85714rem;
        font-weight: 400;
      }

      &:first-child {
        margin-right: 1.14rem;
        width: 8.286rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
`;

// [ aside card section 2]

export const AsideCard2 = styled.ul`
  display: flex;
  align-items: center;
  border-radius: 0.85714rem;
  border: 1px solid #d9d9d9;
  width: 33.14286rem;
  margin-top: 1.71rem;
  margin-bottom: 0.86rem;
`;

export const AsideCard2_ImageDiv = styled.div`
  width: 3.42857rem;
  height: 3.42857rem;
  border-radius: 50%;
  margin: 0.86rem;
  background-color: #00e37d;
`;

export const AsideCard2_UserInfoDiv = styled.div`
  span {
    color: #d9d9d9;
    font-size: 0.85714rem;
    font-weight: 400;

    &:first-child {
      color: #3a3a3a;
      font-size: 1.14286rem;
      font-weight: 500;
      margin-right: 0.86rem;
    }
  }
`;

export const AsideCard2_RentInfoDiv = styled.div`
  ul {
    display: flex;
    align-items: center;

    li {
      margin-right: 1.14rem;

      &:last-child {
        margin-right: 0;
      }

      span {
        color: #848484;
        font-size: 0.85714rem;
        font-weight: 400;
        margin-right: 0.57rem;

        &:last-child {
          margin-right: 0;
          color: #000;
          font-size: 0.85714rem;
          font-weight: 700;
        }
      }
    }
  }
`;

//[aside card3]

export const AsideCard3 = styled.ul`
  padding: 0.57rem 0.86rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;

  li:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  border-radius: 0.85714rem;
  border: 1px solid #d9d9d9;
  margin-top: 1.71rem;
  margin-bottom: 0.86rem;

  h4 {
    color: #3a3a3a;
    font-size: 1.14286rem;
    font-weight: 700;
  }

  span,
  p {
    color: #848484;
    font-size: 0.85714rem;
    font-weight: 400;
  }
`;

export const AsideCard3_UserInfoDiv = styled.div`
  display: flex;
  align-items: center;

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 1.28571rem;
    height: 1.28571rem;
    border-radius: 50%;
    margin-right: 0.57rem;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      margin-top: 2px;
    }
  }
`;
