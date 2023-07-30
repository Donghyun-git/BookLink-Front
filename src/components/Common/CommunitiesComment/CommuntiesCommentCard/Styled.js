import styled from 'styled-components';

export const CommentForm = styled.div`
  display: flex;
  margin-bottom: 2.571rem;
`;

export const WriterImg = styled.div`
  width: 3.428rem;
  height: 100%;
  border-radius: 3.428rem;
  margin-right: 0.857rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 3.428rem;
  }
`;

export const CommentInfo = styled.div`
  margin-left: 0.857rem;
  font-size: 0.857rem;
`;
export const CommentInfoHeader = styled.div`
  display: flex;
  height: 1.714rem;
  width: 71.357rem;
  justify-content: space-between;
`;
export const CommentInfoHeaderLeft = styled.div`
  span:first-child {
    font-weight: bold;
    margin-right: 0.571rem;
  }
`;
export const CommentInfoHeaderRight = styled.div`
  display: flex;
  div {
    position: relative;
    z-index: 999;
    margin-right: 0.286rem;
  }
  img {
    height: 1.286rem;
    margin-top: 0.286rem;
  }
`;
export const Button = styled.div`
  height: 1.857rem;
  width: 4.357rem;
  border: 0.071rem solid #d9d9d9;
  border-radius: 0.286rem 0.286rem 0 0;
  text-align: center;
`;
export const CommentInfoMain = styled.div`
  max-width: 70.214rem;
  max-height: 5.143rem;
`;
export const CommentInfoFooter = styled.div``;
