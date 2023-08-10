import styled from 'styled-components';

// [ MapMain ]
export const MapMain = styled.main`
  width: 100%;
  min-height: 83rem;
`;
// [ MapContainer]
export const MapContainer = styled.div`
  width: 102.857rem;
  margin: 9.86rem auto 0 auto;

  h2 {
    color: #3a3a3a;
    font-size: 2.28571rem;
    font-weight: 500;
    margin-bottom: 1.71rem;
  }
`;

export const InfoSection = styled.section`
  display: flex;
  justify-content: center;
`;

//[RentsComponent]

export const RentsComponentDiv = styled.div`
  min-height: 86rem;
`;

export const CardProfileImageDiv = styled.div`
  width: 3.71429rem;
  height: 3.71429rem;
  clip-path: circle(50%);
`;

export const CardProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardProfileInfoDiv = styled.div`
  margin-left: 0.86rem;
`;

export const CardProfileInfoUl = styled.ul``;

export const CardProfileInfoLi = styled.li`
  color: #000;
  font-size: 1.42857rem;
  font-style: normal;
  font-weight: 500;

  &:last-child {
    color: #000;
    font-size: 0.85714rem;
    font-style: normal;
    font-weight: 400;
  }
`;

//[MapSection]

export const MapSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 0.86rem;
  border-radius: 0.85714rem;
  background: #fff;
`;

export const MapCategory = styled.div`
  width: 30rem;
  height: 40rem;
  box-sizing: border-box;
  overflow-y: scroll;
  div {
    ul {
      margin-right: 3.64rem;

      li:first-child {
        display: flex;
        align-items: center;
        margin-bottom: 0.86rem;

        h3 {
          margin-right: 0.71rem;
          color: #000;
          font-size: 1rem;
          font-weight: 500;
        }

        span {
          color: #767676;
          font-size: 0.85714rem;
          font-weight: 500;
        }
      }
    }
  }
`;
