import styled from 'styled-components';

export const CommentTag = styled.div`
  margin-top: 4.286rem;
  font-weight: bold;
  font-size: 1.714rem;
  span {
    font-weight: normal;
    font-size: 1.143rem;
  }
`;
export const CommentPostForm = styled.div`
  margin-top: 3.429rem;
  height: 3.429rem;
  width: 100%;
  display: flex;
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
export const CommentInputForm = styled.input`
  box-sizing: border-box;
  margin-left: 0.857rem;
  height: 1.714rem;
  font-size: 0.857rem;
  width: 72rem;
  border-bottom: 0.143rem solid #848484;
`;
export const CommentSortForm = styled.ul`
  margin-top: 2.857rem;
  font-size: 0.857rem;
  display: flex;
  color: #d9d9d9;
  font-size: bold;
`;
export const Sort = styled.li`
  margin-right: 0.857rem;
  color: ${({ isClicked }) => isClicked && 'black'};
  }};
`;
export const CommentListForm = styled.div`
  margin-top: 1.5rem;
`;
