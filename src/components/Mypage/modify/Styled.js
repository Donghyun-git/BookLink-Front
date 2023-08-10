import styled from 'styled-components';

export const MyInfoDiv = styled.div`
  border-top: 2px solid #00e37d;
  width: 100%;
`;

export const MyInfoMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MainTag = styled.div`
  font-weight: 500;
  font-size: 1.429rem;
  margin-top: 1.107rem;
`;
export const MainForm = styled.form`
  margin-top: 1.107rem;
  width: 51.286rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Tag = styled.div`
  margin-top: 2.571rem;
  font-size: 1.714rem;
  font-weight: bold;
`;
export const InputForm = styled.div`
  display: flex;
  align-items: center;
`;
export const Input = styled.input`
  box-sizing: border-box;
  width: 42.857rem;
  height: 4.286rem;
  border-radius: 1.714rem;
  border: 1px solid #d9d9d9;
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
export const profileName = styled(Input)`
  width: 34.714rem;
`;
export const ProfileBtn = styled.label`
  width: 7.571rem;
  height: 4.286rem;
  border-radius: 1.714rem;
  margin-left: 0.857rem;
  border: 1px solid #d9d9d9;
  color: ${({ theme }) => theme.color.middleGray};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProfileInput = styled(Input)`
  display: none;
`;

export const ModifyBtn = styled.button`
  width: 7.571rem;
  height: 4.286rem;
  border-radius: 1.714rem;
  margin-left: 0.857rem;
`;

export const RegisterBtn = styled.button`
  width: 42.857rem;
  height: 6.071rem;
  margin-top: 6.857rem;
  background: #d9d9d9;
  border-radius: 1.714rem;
  font-weight: bold;
  font-size: 1.714rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;
