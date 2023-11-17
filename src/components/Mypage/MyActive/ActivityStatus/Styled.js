import styled from 'styled-components';

export const ActivityStatusDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.93rem;
  margin-bottom: 10.57rem;
`;
export const ActivityDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1.714rem;
`;

export const Tag = styled.div`
  font-size: 1.143rem;
`;
export const Activity = styled.div`
  display: flex;
  justify-content: space-between;
  width: 23.286rem;
  flex-wrap: wrap;
`;

export const StatusBoxDiv = styled.div`
  width: 10.286rem;
  border-radius: 0.57143rem;
  border: 1px solid #00e37d;
  margin: 0.857rem 0.857rem 0 0;

  div {
    text-align: center;
    padding: 0.86rem 0;

    h4 {
      font-size: 0.85714rem;
      font-weight: 500;
    }

    span {
      font-size: 1.71429rem;
      font-weight: 500;
    }
  }
`;
