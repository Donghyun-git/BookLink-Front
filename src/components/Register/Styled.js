import styled from "styled-components";

export const MainDiv = styled.div`
  width: 100vw;
  height: 200vh;
  display: flex;
  justify-content: center;
`;
export const RegisterDiv = styled.div`
  width: 62.5vw;
  height: 150vh;
  border: 1px solid black;
  margin-top: 3.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;
export const Div = styled.div`
  margin-top: 2rem;
  width: 100%;
  box-sizing: border-box;
`;

export const noTagDiv = styled(Div)`
  position: relative;
  button {
    position: absolute;
    right: 0rem;
    top: 2rem;
  }
`;
export const buttonIncludedDiv = styled(Div)`
  position: relative;
  button {
    position: absolute;
    right: 0rem;
    top: 4rem;
  }
`;
export const genderDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  margin-top: 1rem;
  height: 3.75rem;
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 1.5rem;
`;
export const searchInput = styled(Input)`
  width: 50%;
`;

export const RegisterBtn = styled.button`
  width: 100%;
  margin-top: 2rem;
  border-radius: 1.5rem;
  height: 5rem;
`;
