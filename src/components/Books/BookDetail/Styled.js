import styled, { keyframes } from 'styled-components';

// [좋아요 애니메이션]
const fadeScale = keyframes`
    0% {
    transform: scale(1);
    opacity: 1;
  }
  20% {
    transform: scale(1.2);
    opacity: 0.8;
  }
  40% {
    transform: scale(1.5);
    opacity: 0.6;
  }
  60% {
    transform: scale(1.2);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
  
`;

//[책 상세페이지 레이아웃]
export const BookDetailWrap = styled.div`
  display: flex;
`;
export const BookDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const BookDetailTitle = styled.div`
  margin-top: 3.43rem;
  margin-bottom: 2.57rem;
`;

export const BookDetailWithFlexDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.43rem;
`;

// [사이드 바]
export const SideBarDiv = styled.div`
  width: 5.28571rem;
  height: fit-content;
  position: sticky;
  top: 14rem;
  margin-right: 4.64rem;
  padding: 20px;
  z-index: 999;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  div {
    position: relative;
    width: 4.28571rem;
    height: 4.28571rem;

    &:nth-child(2) {
      color: #900000;
      margin-top: 0.27rem;
      &:last-child {
        color: #000;
        text-align: center;
        font-size: 0.71429rem;

        font-weight: 500;
      }
    }

    button {
      width: 100%;
      height: 100%;
      border: 0;
      background: 0;

      span {
        position: absolute;
        display: inline-block;
        padding: 0.28571rem 0.57143rem;
        left: 50%;
        top: -4.5rem;
        width: 10.92857rem;
        color: #000;
        transform: translateX(-50%);
        border-radius: 0.28571rem;
        background: #fff;
        font-size: 0.85714rem;
        font-weight: 500;
        opacity: 0;
        transition: all 0.3s ease;
        box-shadow: -2px -2px 12px 0px rgba(0, 0, 0, 0.15);
        text-align: center;

        &::before {
          content: '';
          position: absolute;
          left: 50%;
          bottom: -5px;
          border-top: 5px solid #fff;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          margin-left: -4px;
          box-shadow: transparent;
        }
      }

      &:hover span {
        opacity: 1;
        top: -3.368rem;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        &:active {
          animation: ${fadeScale} 2s ease-in-out;
        }
      }
    }
  }
`;
