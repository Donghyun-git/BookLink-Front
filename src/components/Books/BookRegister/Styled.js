import { styled } from 'styled-components';

export const MainTag = styled.div`
  margin: 4.286rem 0 4.286rem 0;
  width: 100%;
  text-align: center;
  font-size: 2.571rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;
export const Contents = styled.textarea`
  margin-top: 0.857rem;
  width: 100%;
  font-size: 0.857rem;
  height: 14.286rem;
  color: ${({ theme }) => theme.color.middleGray};
  border: 0.143rem solid ${({ theme }) => theme.color.lightGray};
`;
export const Tag = styled.div`
  font-size: 1.714rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;
export const Recommend = styled(Contents)`
  height: 8.571rem;
`;
