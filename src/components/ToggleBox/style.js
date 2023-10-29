import styled from 'styled-components';

export const ToggleBox = styled.div`
  pointer-events: ${({ active }) => (active === 'true' ? 'auto' : 'none')};

  & ul {
    border: 2px solid transparent;
    border-radius: 0.571rem;
    background-image: linear-gradient(#fff, #fff),
      linear-gradient(to right, rgba(0, 227, 125, 1), rgba(0, 60, 116, 1));
    background-origin: border-box;
    background-clip: content-box, border-box;

    position: absolute;
    top: 36px;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & li {
      width: 11.42857rem;

      margin: 0 0.61rem;
      border-bottom: 1px solid rgba(217, 217, 217, 1);

      &:last-child {
        border-bottom: 0;
      }

      &:hover button {
        color: #003c74;

        & img {
          fill: #003c74;
          color: #003c74;
        }
      }

      & button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 0.57rem 1.15rem;
        color: #848484;
        text-align: center;
        font-size: 0.85714rem;
        font-weight: 500;
        background: 0;
        border: 0;

        & img {
          width: 1.14286rem;
          height: 1rem;
        }

        & span {
          margin-right: 0.57rem;
        }
      }
    }
  }
`;
