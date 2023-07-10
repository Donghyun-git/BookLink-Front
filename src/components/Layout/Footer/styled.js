import styled from 'styled-components';

//[ FooterMain ]
export const FooterMain = styled.footer`
  width: 100%;
  background-color: rgba(64, 64, 64, 1);
  margin-top: 14.64rem;
  ${({ pathname }) =>
    pathname === '/login' || pathname === '/register' ? 'margin: 0;' : ''}
`;

//[ FooterContainer ]
export const FooterContainer = styled.div`
  margin: 0 auto;
  padding: 6rem 17.14rem;
  width: 103.71429rem;
  min-height: 22.28593rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:first-child {
    align-items: initial;
  }
`;
