import styled from 'styled-components';

export const NavMenu = styled.nav`
  position: relative;
  margin: 0 auto;
  div {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;

      li {
        padding: 0.81rem 3.61rem;
        text-align: center;
        font-size: 1.42857rem;
        font-weight: 500;
        transition: all 0.1s ease;
        border-bottom: 2px solid #00e37d;
        color: #00e37d;
        cursor: pointer;

        /* &:first-child {
          color: ${({ ismyactive }) =>
          ismyactive === 'true' ? '#00e37d' : '#d9d9d9'};
        }
        &:last-child {
          color: ${({ ismybooks }) =>
          ismybooks === 'true' ? '#00e37d' : '#d9d9d9'};
        } */
      }
    }
  }
`;

export const UnderLine = styled.div`
  position: absolute;
  width: 11.75rem;
  border: 1.5px solid #00e37d;
  bottom: 0;
  transition: all 0.2s ease;

  left: ${({ ismyactive, ismybooks }) => {
    return ismyactive === 'true'
      ? '38.2%'
      : ismybooks === 'true'
      ? '50.03%'
      : '0';
  }};
`;
