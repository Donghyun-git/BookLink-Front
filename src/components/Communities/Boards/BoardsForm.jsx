//import React from 'react'
import * as Styled from './Styled';
const BoardsForm = () => {
  return (
    <Styled.MainContainerDiv>
      <Styled.MainContentsDiv>
        <h2>📖게시판</h2>
        <Styled.SelectDiv>
          <div>
            <select>
              <option value="전체보기">전체보기</option>
              <option value="자유글">자유글</option>
              <option value="독후감">독후감</option>
            </select>
          </div>
          <input type="search" placeholder="검색어를 입력해보세요" />
        </Styled.SelectDiv>
        <Styled.ContentsDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
        </Styled.ContentsDiv>
      </Styled.MainContentsDiv>
    </Styled.MainContainerDiv>
  );
};

export default BoardsForm;
