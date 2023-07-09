import { useState, useEffect } from 'react';
import axios from 'axios';
import * as Styled from './BooksStyled';
import likesLogo from '../../images/likes.svg';
import commentsLogo from '../../images/comments.svg';
import viewsLogo from '../../images/views.svg';

const Books = ({ isBooks }) => {
  const initialState = [
    {
      key: 1,
      likes: 12,
      comments: 12,
      views: 12,
      image:
        'https://soccerquick.s3.ap-northeast-2.amazonaws.com/1687880142215.jpeg',
      title: '삶의 무기가 되는 한마디',
      author: '발자타르 그라시안',
      publish: '다른상상',
      price: '18,000원',
      quantitiy: 2,
    },
    {
      key: 2,
      likes: 12,
      comments: 12,
      views: 12,
      image:
        'https://soccerquick.s3.ap-northeast-2.amazonaws.com/1687880142215.jpeg',
      title: '삶의 무기가 되는 한마디',
      author: '발자타르 그라시안',
      publish: '다른상상',
      price: '18,000원',
      quantitiy: 2,
    },
    {
      key: 3,
      likes: 12,
      comments: 12,
      views: 12,
      image:
        'https://soccerquick.s3.ap-northeast-2.amazonaws.com/1687880142215.jpeg',
      title: '삶의 무기가 되는 한마디',
      author: '발자타르 그라시안',
      publish: '다른상상',
      price: '18,000원',
      quantitiy: 2,
    },
    {
      key: 4,
      likes: 12,
      comments: 12,
      views: 12,
      image:
        'https://soccerquick.s3.ap-northeast-2.amazonaws.com/1687880142215.jpeg',
      title: '삶의 무기가 되는 한마디',
      author: '발자타르 그라시안',
      publish: '다른상상',
      price: '18,000원',
      quantitiy: 2,
    },
    {
      key: 5,
      likes: 12,
      comments: 12,
      views: 12,
      image:
        'https://soccerquick.s3.ap-northeast-2.amazonaws.com/1687880142215.jpeg',
      title: '삶의 무기가 되는 한마디',
      author: '발자타르 그라시안',
      publish: '다른상상',
      price: '18,000원',
      quantitiy: 2,
    },
  ];

  const [cards, setCards] = useState(initialState);

  // [ 후에 api 요청 보내서 카드정보 받기 ]
  // useEffect(
  //   (async () => {
  //     try {
  //       const response = await axios.get();
  //       console.log(response);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })(),
  //   [cards]
  // );
  return (
    <Styled.BooksComponentDiv>
      {cards.map((card) => {
        const {
          key,
          likes,
          comments,
          views,
          image,
          title,
          author,
          publish,
          price,
          quantitiy,
        } = card;
        return (
          <Styled.CardDiv key={key}>
            <Styled.CardContainerDiv>
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
                      {comments}
                    </Styled.CardHeaderNumberSpan>
                  </Styled.CardHeaderWithMargin>
                </Styled.CardHeaderWithFlex>
                <div>
                  <span>
                    <img src={viewsLogo} alt="조회수 이미지" />
                    <Styled.CardHeaderNumberSpan>
                      {views}
                    </Styled.CardHeaderNumberSpan>
                  </span>
                </div>
              </Styled.CardHeaderDiv>
              <Styled.CardImageDiv>
                <Styled.CardImage src={image} alt="책 이미지" />
              </Styled.CardImageDiv>
              <Styled.CardContentsDiv isbooks={isBooks.toString()}>
                <Styled.ContentsTitleDiv>{title}</Styled.ContentsTitleDiv>
                <Styled.ContentsAuthorDiv>
                  <Styled.ContentSpan>저자</Styled.ContentSpan>
                  <Styled.ContentSpanRight>{author}</Styled.ContentSpanRight>
                </Styled.ContentsAuthorDiv>
                <Styled.ContentsPublishDiv>
                  <Styled.ContentSpan>출판</Styled.ContentSpan>
                  <Styled.ContentSpanRight>{publish}</Styled.ContentSpanRight>
                </Styled.ContentsPublishDiv>
                <Styled.ContentsPriceDiv>
                  <Styled.ContentSpan>정가</Styled.ContentSpan>
                  <Styled.ContentSpanRight>{price}</Styled.ContentSpanRight>
                </Styled.ContentsPriceDiv>
              </Styled.CardContentsDiv>
              <Styled.CardFooterDiv>
                <Styled.FooterSpan>
                  {quantitiy}명이 이 책을 소장하고 있어요!
                </Styled.FooterSpan>
              </Styled.CardFooterDiv>
            </Styled.CardContainerDiv>
            <Styled.CardButtonDiv>
              <Styled.CardButton>대여정보 확인하기</Styled.CardButton>
              <Styled.CardButtonRight>쇼핑 등록하기</Styled.CardButtonRight>
            </Styled.CardButtonDiv>
          </Styled.CardDiv>
        );
      })}
    </Styled.BooksComponentDiv>
  );
};

export default Books;
