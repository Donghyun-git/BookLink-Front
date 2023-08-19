import styled from 'styled-components';

export const ChatContainer = styled.div`
  width: 50.571rem;
  height: 43.429rem;
  position: fixed;
  top: 160px;
  left: 360px;
  z-index: 999;
`;
export const Header = styled.div`
  height: 10%;
  width: 100%;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
`;
export const Main = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
`;
export const Aside = styled.div`
  height: 100%;
  width: 33.3%;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
`;
export const Section = styled.div`
  height: 100%;
  width: 66.6%;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
`;
export const Menu = styled.div`
  height: 3rem;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
`;
export const Messages = styled.div`
  width: 100%;
  height: 33.857rem;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
`;
export const ChatInput = styled.input`
  box-sizing: border-box;
  height: 2.214rem;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
`;
