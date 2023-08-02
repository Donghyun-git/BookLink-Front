import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as Styled from './Styled';
import { generateUniqueKey } from '../../utils/generateUnique';
import likesLogo from '../../images/likes.svg';
import commentsLogo from '../../images/comments.svg';
import Loading from '../Loading/Loading';

const Books = ({ isBooks }) => {
  const navigate = useNavigate();
  const card = useSelector((state) => state.BOOK.books);
  const current = useSelector((state) => state.BOOK.initial);
  const isLikes = useSelector((state) => state.BOOK.isLikes);
  const isLoading = useSelector((state) => state.BOOK.isLoading);
  const error = useSelector((state) => state.BOOK.error);

  const goToDetailPage = useCallback(
    (isbn) => {
      navigate(`/books/${isbn}`);
    },
    [navigate]
  );

  return (
    <Styled.BooksComponentDiv>
      {error ? (
        <div>{error}</div>
      ) : isLoading ? (
        <Loading />
      ) : isLikes ? ( //후에 컴포넌트 분리할것.
        card.map((card) => {
          const {
            isbn13,
            cover,
            title,
            author,
            publisher,
            priceStandard,
            like_cnt: likes,
            owner_cnt: owners,
            reply_cnt: reviews,
          } = card;

          const formattedPrice = priceStandard.toLocaleString('ko-KR');

          return (
            <Styled.CardDiv key={`${generateUniqueKey()}`}>
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
                      {formattedPrice}원
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
      ) : (
        current.map((card) => {
          const {
            isbn13,
            cover,
            title,
            author,
            publisher,
            priceStandard,
            like_cnt: likes,
            owner_cnt: owners,
            reply_cnt: reviews,
          } = card;

          const formattedPrice = priceStandard.toLocaleString('ko-KR');

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
                      {formattedPrice}원
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
