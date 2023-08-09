import * as Styled from './Styled';

const BookCard = () => {
  return (
    <Styled.CardDiv>
      <Styled.RentsCardContainer>
        <Styled.CardContentsDiv>
          <Styled.ContentsTitleDiv>제목</Styled.ContentsTitleDiv>
          <Styled.ContentsAuthorDiv>
            <Styled.ContentSpan>저자</Styled.ContentSpan>
            <Styled.ContentSpanRight>저자</Styled.ContentSpanRight>
          </Styled.ContentsAuthorDiv>
          <Styled.ContentsPublishDiv>
            <Styled.ContentSpan>출판</Styled.ContentSpan>
            <Styled.ContentSpanRight>출판</Styled.ContentSpanRight>
          </Styled.ContentsPublishDiv>
        </Styled.CardContentsDiv>
        <Styled.CardImageDiv>
          <Styled.CardImage
            src="https://soccerquick.s3.ap-northeast-2.amazonaws.com/1687880142215.jpeg"
            alt="책 이미지"
          />
        </Styled.CardImageDiv>

        <Styled.CardFooterDiv>
          <ul>
            <Styled.RentsLi>
              <Styled.RentsLiSpan>정가</Styled.RentsLiSpan>
              <span>10000원</span>
            </Styled.RentsLi>
            <Styled.RentsLi>
              <Styled.RentsLiSpan>북링크의 대여료</Styled.RentsLiSpan>
              <span>1000원 ~</span>
            </Styled.RentsLi>
          </ul>
        </Styled.CardFooterDiv>
      </Styled.RentsCardContainer>
    </Styled.CardDiv>
  );
};

export default BookCard;
