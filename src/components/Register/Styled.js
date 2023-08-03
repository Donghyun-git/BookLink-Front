import styled from 'styled-components';

export const MainContainerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MainContentsDiv = styled.div`
  width: 85.714rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4.287rem 0;
  box-shadow: 0rem 0.286rem 1.714rem rgba(0, 0, 0, 0.2);
  border-radius: 3.429rem;
`;
export const MainTag = styled.div`
  margin-top: 3.5rem;
  font-weight: bold;
  font-size: 3.429rem;
  color: #003c74;
`;
export const Tag = styled.div`
  font-weight: bold;
  font-size: 1.714rem;
`;
export const RegisterForm = styled.form`
  margin: 1rem 0 3.429rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`;
export const Div = styled.div`
  margin-top: 2.571rem;
  width: 100%;
  box-sizing: border-box;
`;

export const noTagDiv = styled(Div)`
  position: relative;
  button {
    position: absolute;
    right: 0rem;
    top: 1.714rem;
  }
`;
export const buttonIncludedDiv = styled(Div)`
  position: relative;
  button {
    position: absolute;
    right: 0rem;
    top: 4.287rem;
  }
`;
export const genderDiv = styled.div`
  display: flex;
  justify-content: center;
`;
export const searchDiv = styled(buttonIncludedDiv)`
  width: 50%;
`;

export const Input = styled.input`
  margin-top: 0.857rem;
  height: 4.289rem;
  width: 100%;
  border: 0.071rem solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 1.714rem;
`;
export const Btn = styled.button`
  font-size: 0.857rem;
  background-color: #f0f0f0;
  padding: 0.643rem 0.857rem;
  border-radius: 0.857rem;
  font-weight: 500;
  color: #848484;
`;
export const RegisterBtn = styled.button`
  width: 100%;
  margin-top: 4.286rem;
  padding: 1.714rem 0;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.714rem;
  background: #00e37d;
  border-radius: 1.714rem;
`;
