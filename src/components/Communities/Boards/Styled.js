import styled from 'styled-components';

export const MainContainerDiv = styled.div`
  width: 100vw;
  border: 1px solid black;
  display: flex;
  justify-content: center;
`;

export const MainContentsDiv = styled.div`
  width: 70%;
  height: 100%;
  border: 1px solid black;
`;

export const SelectDiv = styled.div`
  display: flex;
  height: 2.5rem;
  div {
    margin-right: 1.5rem;
  }
  select {
    height: 100%;
  }
  input {
    width: 25.7rem;
  }
`;

export const ContentsDiv = styled.div`
  width: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CardDiv = styled.div`
  width: 23%;
  height: 33rem;
  border: 1px solid black;
  margin: 1rem 0;
`;
