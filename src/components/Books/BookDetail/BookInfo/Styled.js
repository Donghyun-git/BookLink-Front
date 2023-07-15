import styled from 'styled-components';

//[ BookInfo ]
export const BookInfoWrap = styled.div`
  /* width: 75%; */
  display: flex;
  flex-direction: column;
  h2 {
    color: #3a3a3a;
    font-size: 2.28571rem;
    font-weight: 500;
  }

  /* h2:nth-child(2) {
    font-size: 1.71429rem;
    font-weight: 700;
  } */
`;

export const BookInfoContainer = styled.div`
  display: flex;
`;

export const BookInfoLeftDiv = styled.div``;

export const BookInfoButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    width: 21rem;
    border-radius: 0.85714rem;
    border: 1px solid #d9d9d9;
    background: #fff;
    margin-top: 0.86rem;
    padding: 0.86rem 5.71rem;
    transition: all 0.1s;
    &:hover {
      background-color: rgba(0, 227, 125, 1);
    }

    &:active {
      background-color: #00723f;
    }

    &:hover div {
      color: #fff;
    }

    &:active div {
      color: #fff;
    }

    div {
      color: #3a3a3a;
      text-align: center;
      font-size: 1.14286rem;
      font-weight: 500;
    }
  }
`;

export const BookInfoRightDiv = styled.div`
  margin-left: 1.71rem;

  h3 {
    color: #000;
    font-size: 2.57143rem;
    font-weight: 500;
    margin-bottom: 1.64rem;
  }

  ul {
    margin-bottom: 4.29rem;
    li {
      span {
        color: #848484;
        font-size: 1rem;
        font-weight: 400;
        margin-right: 0.57rem;
      }

      strong {
        color: #000;
        font-size: 1rem;
        font-weight: 400;
      }
    }
  }
`;

export const BookImageBackgroundDiv = styled.div`
  width: 21rem;
  height: 21rem;
  border-radius: 0.85714rem;
  background: #f4f4f4;
`;

export const BookImageDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.85714rem;

  img {
    margin: auto;
    box-shadow: -2px -2px 12px 0px rgba(0, 0, 0, 0.15);
  }
`;

export const BookInfoDescriptionDiv = styled.div`
  h4 {
    color: #848484;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 0.86rem;
  }

  p {
    overflow: hidden;
    color: #000;
    text-overflow: ellipsis;
    white-space: wrap;
    font-size: 0.85714rem;
    font-weight: 400;
    letter-spacing: -0.04286rem;
  }
`;

// [BookReview]
export const BookReviewWrap = styled.div`
  margin-top: 6.86rem;

  h2 {
    display: inline-block;
    color: #3a3a3a;
    font-size: 1.71429rem;
    font-weight: 700;
    margin-right: 0.86rem;
  }

  > span {
    color: #848484;
    font-size: 1.14286rem;
    font-weight: 500;
  }
`;

export const BookReviewWriteForm = styled.form`
  display: flex;
  margin-top: 3.43rem;
  text-align: right;
`;

export const BookReviewUserProfileDiv = styled.div`
  width: 3.42857rem;
  height: 3.42857rem;
  border-radius: 50%;
  background-color: #00e37d;
  margin-right: 1.71rem;
`;

export const BookReviewCommentDiv = styled.div`
  input {
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid #000;
    background: 0;
    width: 59.5rem;
    height: 1.42857rem;
    font-size: 0.85714rem;
    padding-bottom: 0.11rem;

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: #d9d9d9;
      font-size: 0.85714rem;
      font-weight: 400;
    }
  }

  div {
    margin-top: 1rem;

    span {
      color: #d9d9d9;
      font-size: 0.85714rem;
      font-weight: 500;
      margin-right: 2rem;
      cursor: pointer;
    }

    .write {
      margin-right: 0;
    }

    button {
      padding: 0.29rem 0.57rem;
      border-radius: 0.92857rem;
      background: #848484;
    }
  }
`;

export const CommentFilterDiv = styled.div`
  display: flex;
  align-items: center;
  div {
    //활성화되면  color: #000;
    color: #d9d9d9;
    font-size: 0.85714rem;
    font-weight: 500;
    &:first-child {
      color: #000;
      margin-right: 0.86rem;
    }
  }
`;

export const CommentCardDiv = styled.div`
  position: relative;
  display: flex;
  margin-top: 1.71rem;
`;

export const CommentCardUserProfileDiv = styled.div`
  width: 3.42857rem;
  height: 3.42857rem;
  border-radius: 50%;
  background-color: #00e37d;
  margin-right: 1.71rem;
`;

export const CommentListUserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: #848484;
    font-size: 0.85714rem;
    font-weight: 400;

    &:first-child {
      color: #000;
      font-size: 0.85714rem;
      font-weight: 700;
      margin-right: 0.57rem;
    }
  }
`;

export const CommentOptionDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 1rem;
  cursor: pointer;
  div {
    position: relative;
    width: 0.28571rem;

    img {
      width: 100%;
      height: 100%;
    }

    ul {
      position: absolute;
      top: 0;
      left: -4.58rem;
      display: none;
      width: 4.35714rem;
      border-radius: 0.28571rem;
      border: 1px solid #d9d9d9;

      li {
        border-bottom: 1px solid #d9d9d9;
        border-radius: 0.28571rem;
        background: #fff;
        text-align: center;
        cursor: pointer;

        span {
          display: inline-block;
          color: #3a3a3a;
          font-size: 0.85714rem;
          font-weight: 400;
          padding: 0.29rem 0.57rem;
        }

        &:last-child {
          margin-bottom: -1px;
        }
      }
    }
  }
`;

export const CommentListContentDiv = styled.div`
  margin-top: 0.29rem;
  p {
    width: 59.42857rem;
    color: #000;
    font-size: 0.85714rem;
    font-weight: 400;
  }
`;

//[ 좋아요, 대댓글 영역 ]

export const CommentReviewDiv = styled.div`
  display: flex;
  margin-top: 1.14rem;
`;

export const CommentThumbsDiv = styled.div`
  width: 1.42857rem;
  height: 1.42857rem;
  margin-right: 0.57rem;
  cursor: pointer;

  img {
    //클릭시 fill:#E33600;
    width: 100%;
  }
`;

export const CommentThumbsCountDiv = styled.div`
  margin-right: 1.71rem;
  color: #d9d9d9;
  font-size: 0.85714rem;
  font-weight: 700;
  line-height: 2.5;
  //클릭시 color: #E33600;
`;

export const CommentReviewWriteDiv = styled.div`
  button {
    color: #d9d9d9;
    font-size: 0.85714rem;
    font-weight: 500;
    background: 0;
  }
`;
