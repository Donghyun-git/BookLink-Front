import styled from 'styled-components';

export const MainContainerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MainContentsDiv = styled.div`
  width: 102.857rem;
  height: 100%;
`;
export const SelectDiv = styled.div`
  margin-top: 3.429rem;
`;
export const SelectContainerDiv = styled.div`
  width: 100%;
  height: 5.714rem;
  margin-top: 0.857rem;
  font-size: 1.143rem;
  border: ${({ isClicked }) =>
    isClicked ? '0.071rem solid #00e37d' : '0.071rem solid #d9d9d9'};
  border-radius: 0.857rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SelectContentDiv = styled.div`
  display: flex;
  margin-left: 1.714rem;
  label {
    margin-left: 1.714rem;
    font-weight: bold;
  }
  p {
    color: #848484;
    margin-left: 1.714rem;
  }
`;

export const Input = styled.input`
  &:checked {
    background-color: #00e37d;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2.071rem;
  button {
    box-sizing: border-box;
    font-weight: bold;
    width: 13rem;
    background-color: #ffffff;
    height: 3.857rem;
    border: 0.143rem solid #00e37d;
    border-radius: 0.571rem;
  }
`;
