import styled from 'styled-components';

export const Wrapper = styled.div`
  h2 {
    color: #000;
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 7.19rem;
  }

  & .writed {
    border-top: 2px solid #00e37d;
    width: 100%;
    margin-top: 10rem;
    margin: 0 auto;
    min-height: 40rem;
    border-radius: 0.57143rem;
    background: #fff;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);

    & .title {
      display: flex;
      width: 100%;
      height: 4.28571rem;
      justify-content: center;
      align-items: center;
      align-self: stretch;
      border-bottom: 1px solid #dedede;
      margin-bottom: 2rem;

      h3 {
        text-align: center;
        font-size: 1.42857rem;
        font-weight: 500;
      }
    }

    & .writed-container {
      padding: 0 2rem;
    }
  }

  & .message {
    margin-top: 10rem;
    & .message-container {
      display: flex;
      margin: 0 auto;
      width: 80.71429rem;
      min-height: 40rem;
      margin-top: 2.57rem;
      padding-bottom: 0px;
      justify-content: center;
      border-radius: 0.57143rem;
      border-top: 2px solid #00e37d;
      background: #fff;
      box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);

      & .title {
        display: flex;
        width: 100%;
        height: 4.28571rem;
        justify-content: center;
        align-items: center;
        align-self: stretch;
        border-bottom: 1px solid #dedede;

        h3 {
          text-align: center;
          font-size: 1.42857rem;
          font-weight: 500;
        }
      }
    }
  }
`;
export const CardBox = styled.div`
  display: flex;
  height: 4.28571rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-bottom: 0.5px solid #848484;

  h3 {
    text-align: center;
    font-size: 1.42857rem;
    font-weight: 500;
  }
`;
