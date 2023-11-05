import { useNavigate } from 'react-router-dom';
import likesLogo from '../../images/likes.svg';
import commentsLogo from '../../images/comments.svg';
import * as Styled from './Styled';

const BookCard = (props) => {
  const navigate = useNavigate();

  const {
    author,

    cover,

    isbn13,
    like_cnt,
    owner_cnt,

    priceStandard,
    publisher,
    reply_cnt,
    title,
  } = props.data;

  const handleBookDetailMove = () => {
    navigate(`/books/${isbn13}`);
    return;
  };

  return (
    <Styled.CardDiv>
      <Styled.CardContainerDiv onClick={() => handleBookDetailMove()}>
        <Styled.CardHeaderDiv>
          <Styled.CardHeaderWithFlex>
            <span>
              <img src={likesLogo} alt="좋아요 이미지" />
              <Styled.CardHeaderNumberSpan>
                {like_cnt}
              </Styled.CardHeaderNumberSpan>
            </span>
            <Styled.CardHeaderWithMargin>
              <img src={commentsLogo} alt="댓글 이미지" />
              <Styled.CardHeaderNumberSpan>
                {reply_cnt}
              </Styled.CardHeaderNumberSpan>
            </Styled.CardHeaderWithMargin>
          </Styled.CardHeaderWithFlex>
        </Styled.CardHeaderDiv>
        <Styled.CardImageDiv>
          <Styled.CardImage src={cover} alt="책 이미지" />
        </Styled.CardImageDiv>
        <Styled.CardContentsDiv>
          <Styled.ContentsTitleDiv>{title}</Styled.ContentsTitleDiv>
          <Styled.ContentsAuthorDiv>
            <Styled.ContentSpan>저자</Styled.ContentSpan>
            <Styled.ContentSpanRight>{author}</Styled.ContentSpanRight>
          </Styled.ContentsAuthorDiv>
          <Styled.ContentsPublishDiv>
            <Styled.ContentSpan>출판</Styled.ContentSpan>
            <Styled.ContentSpanRight>{publisher}</Styled.ContentSpanRight>
          </Styled.ContentsPublishDiv>
          <Styled.ContentsPriceDiv>
            <Styled.ContentSpan>정가</Styled.ContentSpan>
            <Styled.ContentSpanRight>{priceStandard}</Styled.ContentSpanRight>
          </Styled.ContentsPriceDiv>
        </Styled.CardContentsDiv>
        <Styled.CardFooterDiv>
          <Styled.FooterSpan>
            {owner_cnt}명이 이 책을 소장하고 있어요!
          </Styled.FooterSpan>
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
