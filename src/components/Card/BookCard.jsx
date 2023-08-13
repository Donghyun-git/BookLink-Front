import likesLogo from '../../images/likes.svg';
import commentsLogo from '../../images/comments.svg';
import * as Styled from './Styled';

const BookCard = () => {
  return (
    <Styled.CardDiv>
      <Styled.CardContainerDiv>
        <Styled.CardHeaderDiv>
          <Styled.CardHeaderWithFlex>
            <span>
              <img src={likesLogo} alt="좋아요 이미지" />
              <Styled.CardHeaderNumberSpan>12</Styled.CardHeaderNumberSpan>
            </span>
            <Styled.CardHeaderWithMargin>
              <img src={commentsLogo} alt="댓글 이미지" />
              <Styled.CardHeaderNumberSpan>12</Styled.CardHeaderNumberSpan>
            </Styled.CardHeaderWithMargin>
          </Styled.CardHeaderWithFlex>
        </Styled.CardHeaderDiv>
        <Styled.CardImageDiv>
          <Styled.CardImage
            src="https://image.aladin.co.kr/product/31100/55/cover/k492831631_1.jpg"
            alt="책 이미지"
          />
        </Styled.CardImageDiv>
        <Styled.CardContentsDiv>
          <Styled.ContentsTitleDiv>
            당신은 결국 무엇이든 해내는 사람
          </Styled.ContentsTitleDiv>
          <Styled.ContentsAuthorDiv>
            <Styled.ContentSpan>저자</Styled.ContentSpan>
            <Styled.ContentSpanRight>김상현</Styled.ContentSpanRight>
          </Styled.ContentsAuthorDiv>
          <Styled.ContentsPublishDiv>
            <Styled.ContentSpan>출판</Styled.ContentSpan>
            <Styled.ContentSpanRight>YES24</Styled.ContentSpanRight>
          </Styled.ContentsPublishDiv>
          <Styled.ContentsPriceDiv>
            <Styled.ContentSpan>정가</Styled.ContentSpan>
            <Styled.ContentSpanRight>18,000원</Styled.ContentSpanRight>
          </Styled.ContentsPriceDiv>
        </Styled.CardContentsDiv>
        <Styled.CardFooterDiv>
          <Styled.FooterSpan>2명이 이 책을 소장하고 있어요!</Styled.FooterSpan>
        </Styled.CardFooterDiv>
      </Styled.CardContainerDiv>
      <Styled.CardButtonDiv>
        <Styled.CardButton>대여정보 확인하기</Styled.CardButton>
        <Styled.CardButtonRight>쇼핑 등록하기</Styled.CardButtonRight>
      </Styled.CardButtonDiv>
    </Styled.CardDiv>
  );
};

export default BookCard;
