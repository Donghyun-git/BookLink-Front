import styled, { keyframes } from 'styled-components';
import communityBannerImage from '../../images/community_banner.png';

const rotateAnimation = keyframes`
  0%, 100% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
`;

//[ banner ]
export const BannerContent = styled.div`
  display: flex;
  width: 102.85714rem;
  padding: 6.85714rem;
  align-items: flex-start;
  gap: 12rem;
  flex-shrink: 0;
  border-radius: 3.42857rem;
  background: #00162c;
  margin: 0 auto;
`;

export const BannerLeft = styled.div`
  color: #fff;

  h1 {
    font-size: 4.28571rem;
    font-weight: 700;
    margin: 1.71rem 0;
  }
  p {
    font-size: 1.71429rem;
    font-weight: 500;
  }
`;

export const BannerFooterDiv = styled.div`
  margin-top: 6.79rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.71429rem;
`;

export const BannerButtonDiv = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.71429rem;

  button {
    border-radius: 0.57143rem;
    border: 1px solid #00e37d;
    background: 0;
    transition: all 0.1s ease;

    span {
      display: inline-block;
      padding: 0.86rem 7.14rem;
      color: #00e37d;
      text-align: center;
      font-size: 1rem;
      font-weight: 700;
    }

    &:hover {
      background-color: #00e37d;

      span {
        color: #00162c;
      }
    }
  }
`;

export const BannerLinkDiv = styled.div`
  margin-top: 0.86rem;

  ul {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 4.8rem;

    li {
      &:first-child {
        span {
          color: #d9d9d9;
          font-size: 1rem;
          font-weight: 500;
        }
      }
      span {
        color: #00e37d;
        font-size: 1rem;
        font-weight: 700;
      }

      &:last-child {
        cursor: pointer;
      }
    }
  }
`;

export const LastChildOfP = styled.p`
  font-size: 1.78571rem;
  font-weight: 700;
`;

export const BannerRight = styled.div`
  div {
    width: 43.71429rem;
    height: 36.71429rem;
    animation: ${rotateAnimation} 3s ease-in-out infinite alternate;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

//[ books - Main ]
export const MainBooks = styled.div`
  margin: 8.57rem 0;
`;

export const MainBooksTitle = styled.div`
  h2 {
    color: #000;
    font-size: 2.57143rem;
    font-weight: 700;
  }
`;

export const MainBooksContent = styled.div`
  display: flex;
  width: 102.85714rem;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CardDiv = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.71429rem;
  margin-top: 2.97rem;
`;

export const BooksImageSectionDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 3.143rem;

  div {
    &:first-child {
      width: 42.85714rem;
      height: 27.71429rem;
      border-radius: 0.85714rem;
      background: #003c74;
      box-shadow: 0px 0px 250px 0px #00162c inset;

      img {
        width: 100%;
        height: 100%;
        border-radius: 0.85714rem;
        object-fit: cover;
      }
    }
  }

  p {
    margin: 2.57rem;
    color: #000;
    font-family: Inter;
    font-size: 1.71429rem;
    font-weight: 500;
  }
`;

export const MainBooksButtonDiv = styled.div`
  margin-top: 2px;
  button {
    border-radius: 1.71429rem;
    background: #00e37d;
    transition: all 0.1s ease;
    &:hover {
      background: #00ff9b;
    }
    span {
      display: inline-block;
      padding: 1.71rem 16.5rem;
      color: #00162c;
      text-align: center;
      font-size: 1.71429rem;
      font-weight: 700;
    }
  }
`;

//[ 커뮤니티 배너]
export const CommunityBannerDiv = styled.div`
  width: 102.85714rem;
  height: 21.42857rem;
  padding: 3.42857rem;
  color: #fff;
  background: linear-gradient(
      135deg,
      rgba(0, 22, 44, 0.8) 0%,
      rgba(0, 60, 116, 0.1) 100%
    ),
    url(${communityBannerImage}) center top / cover no-repeat;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 1.71429rem;
  margin: 8.57rem 0;
`;

export const CommunityBannerTitleDiv = styled.div`
  h2 {
    font-family: Inter;
    font-size: 3.42857rem;
    font-weight: 700;
  }
  div {
    margin-top: 1.71rem;
    p {
      font-family: Inter;
      font-size: 1.71429rem;
      font-weight: 500;
      line-height: 2.57143rem;
    }
  }
`;
export const CommunityBannerButtonDiv = styled.div`
  align-self: flex-end;
  button {
    border-radius: 0.85714rem;
    background: #00e37d;
    transition: all 0.1s ease;
    &:hover {
      background: #00ff9b;
    }
    span {
      display: inline-block;
      padding: 0.86rem 3.93rem;
      color: #00162c;
      text-align: center;
      font-size: 1rem;
      font-weight: 700;
    }
  }
`;

//[ reports - Main ]
export const MainReports = styled.div``;

export const MainReportTitle = styled.div`
  margin-bottom: 0.86rem;
`;

export const MainReportContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.57rem;
`;

export const MainReportImageDiv = styled.div`
  width: 55.28571rem;
  height: 33.71429rem;
  border-radius: 1.71429rem;
  border: 4px solid #003c74;
  background: #00a779;
  box-shadow: 0px 0px 120px 0px rgba(0, 60, 116, 0.35) inset;
`;

export const MainReportListDiv = styled.div`
  margin-left: 3.43rem;
  ul {
    li {
      &:nth-child(2) {
        margin: 1.71rem 0;
      }

      &:last-child {
        margin-bottom: 1.71rem;
      }

      div {
        position: relative;

        h3 {
          font-size: 1.71429rem;
          font-weight: 700;
          margin-bottom: 0.43rem;
          p {
            font-size: 1.14286rem;
            font-weight: 500;
          }
        }

        &::before {
          content: '';
          width: 0.85714rem;
          height: 0.85714rem;
          border-radius: 50%;
          background-color: #003c74;
          position: absolute;
          top: 8px;
          left: -18px;
        }
      }
    }
  }
`;

export const MainReportButtonDiv = styled.div`
  margin-top: 2px;
  button {
    border-radius: 1.71429rem;
    background: #00e37d;
    transition: all 0.1s ease;
    &:hover {
      background: #00ff9b;
    }
    span {
      display: inline-block;
      padding: 1.71rem 16.5rem;
      color: #00162c;
      text-align: center;
      font-size: 1.71429rem;
      font-weight: 700;
    }
  }
`;
