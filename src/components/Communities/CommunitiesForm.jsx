import * as Styled from './Styled';

const CommunitiesForm = () => {
  return (
    <Styled.MainContainerDiv>
      <Styled.MainContentsDiv>
        <Styled.PopularDiv>
          <Styled.TagDiv>
            <a href="/communities">🔥주간 인기글</a>
            <a href="/communities/popular">전체보기</a>
          </Styled.TagDiv>
          <Styled.PopularContentSDiv>
            <Styled.CardDiv></Styled.CardDiv>
            <Styled.CardDiv></Styled.CardDiv>
            <Styled.CardDiv></Styled.CardDiv>
            <Styled.CardDiv></Styled.CardDiv>
          </Styled.PopularContentSDiv>
        </Styled.PopularDiv>
        <Styled.BookClubsDiv>
          <Styled.TagDiv>
            <a href="/communities">🔔독서 모임 모집</a>
            <a href="/communities/book-clubs">전체보기</a>
          </Styled.TagDiv>
          <Styled.BookClubsContentSDiv>
            <Styled.BookClubsCardDiv></Styled.BookClubsCardDiv>
            <Styled.BookClubsCardDiv></Styled.BookClubsCardDiv>
            <Styled.BookClubsCardDiv></Styled.BookClubsCardDiv>
            <Styled.BookClubsCardDiv></Styled.BookClubsCardDiv>
          </Styled.BookClubsContentSDiv>
        </Styled.BookClubsDiv>
        <Styled.BoardsDiv>
          <Styled.TagDiv>
            <a href="/communities">📖게시판</a>
            <a href="/communities/boards">전체보기</a>
          </Styled.TagDiv>
          <Styled.BoardsContentsDiv>
            <Styled.CardDiv></Styled.CardDiv>
            <Styled.CardDiv></Styled.CardDiv>
            <Styled.CardDiv></Styled.CardDiv>
            <Styled.CardDiv></Styled.CardDiv>
            <Styled.CardDiv></Styled.CardDiv>
            <Styled.CardDiv></Styled.CardDiv>
            <Styled.CardDiv></Styled.CardDiv>
            <Styled.CardDiv></Styled.CardDiv>
          </Styled.BoardsContentsDiv>
        </Styled.BoardsDiv>
      </Styled.MainContentsDiv>
    </Styled.MainContainerDiv>
  );
};

export default CommunitiesForm;
