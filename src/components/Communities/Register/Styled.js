import styled from 'styled-components';

export const MainContainerDiv = styled.div`
  width: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
`;

export const MainContentsDiv = styled.div`
  width: 102.857rem;
  height: 100%;
  border: 1px solid black;
`;

export const SelectContainerDiv = styled.div`
  width: 100%;
  height: 5.7rem;
  border: 1px solid black;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SelectDiv = styled.div`
  display: flex;
  margin-left: 1.7rem;
  p {
    margin-left: 1.7rem;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2.071rem;
  button {
    box-sizing: border-box;
    width: 13rem;
    height: 3.857rem;
    border: 0.143rem solid #00e37d;
    border-radius: 0.571rem;
  }
`;
