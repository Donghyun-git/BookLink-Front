import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as Styled from './Styled';
import likesLogo from '../../images/likes.svg';
import commentsLogo from '../../images/comments.svg';

const Books = ({ isBooks }) => {
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.BOOK.isLoading);
  const error = useSelector((state) => state.BOOK.error);
  const cards = useSelector((state) => state.BOOK.books);

  const goToDetailPage = (isbn) => {
    navigate(`/books/${isbn}`);
  };

  return (
    <Styled.BooksComponentDiv>
      {error ? (
        <div>{error}</div>
      ) : isLoading ? (
        <div>로딩중입니다.</div>
      ) : (
        cards.map((card) => {
          const { isbn13, cover, title, author, publisher, priceStandard } =
            card;

          const likes = card.like_cnt;
          const owners = card.owner_cnt;
          const reviews = card.reply_cnt;

          return (
            <Styled.CardDiv key={isbn13}>
              <Styled.CardContainerDiv onClick={() => goToDetailPage(isbn13)}>
                <Styled.CardHeaderDiv isbooks={isBooks.toString()}>
                  <Styled.CardHeaderWithFlex>
                    <span>
                      <img src={likesLogo} alt="좋아요 이미지" />
                      <Styled.CardHeaderNumberSpan>
                        {likes}
                      </Styled.CardHeaderNumberSpan>
                    </span>
                    <Styled.CardHeaderWithMargin>
                      <img src={commentsLogo} alt="댓글 이미지" />
                      <Styled.CardHeaderNumberSpan>
                        {reviews}
                      </Styled.CardHeaderNumberSpan>
                    </Styled.CardHeaderWithMargin>
                  </Styled.CardHeaderWithFlex>
                  {/* <div>
                    <span>
                      <img src={viewsLogo} alt="조회수 이미지" />
                      <Styled.CardHeaderNumberSpan>
                        32
                      </Styled.CardHeaderNumberSpan>
                    </span>
                  </div> */}
                </Styled.CardHeaderDiv>
                <Styled.CardImageDiv>
                  <Styled.CardImage src={cover} alt="책 이미지" />
                </Styled.CardImageDiv>
                <Styled.CardContentsDiv isbooks={isBooks.toString()}>
                  <Styled.ContentsTitleDiv>{title}</Styled.ContentsTitleDiv>
                  <Styled.ContentsAuthorDiv>
                    <Styled.ContentSpan>저자</Styled.ContentSpan>
                    <Styled.ContentSpanRight>{author}</Styled.ContentSpanRight>
                  </Styled.ContentsAuthorDiv>
                  <Styled.ContentsPublishDiv>
                    <Styled.ContentSpan>출판</Styled.ContentSpan>
                    <Styled.ContentSpanRight>
                      {publisher}
                    </Styled.ContentSpanRight>
                  </Styled.ContentsPublishDiv>
                  <Styled.ContentsPriceDiv>
                    <Styled.ContentSpan>정가</Styled.ContentSpan>
                    <Styled.ContentSpanRight>
                      {priceStandard}원
                    </Styled.ContentSpanRight>
                  </Styled.ContentsPriceDiv>
                </Styled.CardContentsDiv>
                <Styled.CardFooterDiv>
                  <Styled.FooterSpan>
                    {owners}명이 이 책을 소장하고 있어요!
                  </Styled.FooterSpan>
                </Styled.CardFooterDiv>
              </Styled.CardContainerDiv>
              <Styled.CardButtonDiv>
                <Styled.CardButton>대여정보 확인하기</Styled.CardButton>
                <Styled.CardButtonRight>쇼핑 등록하기</Styled.CardButtonRight>
              </Styled.CardButtonDiv>
            </Styled.CardDiv>
          );
        })
      )}
    </Styled.BooksComponentDiv>
  );
};

export default Books;
