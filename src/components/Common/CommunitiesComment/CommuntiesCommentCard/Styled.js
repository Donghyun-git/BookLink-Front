import styled from 'styled-components';

export const CommentForm = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2.571rem;
`;

export const WriterImg = styled.div`
  width: 4.44%;
  height: 100%;
  border-radius: 3.428rem;
  margin-right: 3.06%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
  }
`;

export const CommentInfo = styled.div`
  width: 92.5%;
  font-size: 0.857rem;
`;
export const CommentInfoHeader = styled.div`
  display: flex;
  width: 100%;
  height: 1.714rem;
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
export const CommentInfoFooter = styled.div`
  width: 100%;
`;
export const CommentInfoFooterTop = styled.div`
  img {
    height: 1.426rem;
  }
  span {
    margin: 0.571rem 0.571rem 0 0.571rem;
  }
  margin-bottom: 1rem;
`;

export const ReplyPostForm = styled.div`
  margin-bottom: 2.571rem;
  height: 2.571rem;
  width: 100%;
  display: flex;
`;
export const ReplyWriterImg = styled(WriterImg)`
  width: 2.571rem;
  border-radius: 2.571rem;
  margin-right: 0.857rem;
`;

export const ReplyInputForm = styled.input`
  box-sizing: border-box;
  margin-left: 0.571rem;
  height: 1.428rem;
  font-size: 0.857rem;
  width: 68.714rem;
  border-bottom: 0.143rem solid #848484;
`;
