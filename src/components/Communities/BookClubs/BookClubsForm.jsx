//import React from 'react'
import * as Styled from './Styled';
const BookClubsForm = () => {
  return (
    <Styled.MainContainerDiv>
      <Styled.MainContentsDiv>
        <h2>🔔독서 모임 모집</h2>
        <Styled.SelectDiv>
          <div>
            <select>
              <option value="전체보기">전체보기</option>
              <option value="서울">서울</option>
              <option value="인천">인천</option>
              <option value="지역명">지역명</option>
            </select>
          </div>
          <input type="search" placeholder="독서 모임 위치로 검색해 보세요" />
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

export default BookClubsForm;
