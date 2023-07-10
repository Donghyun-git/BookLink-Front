//import React from 'react'
import { useSearchParams } from 'react-router-dom';
import * as Styled from './Styled';
/*const initialState = [
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
];*/
const SearchResultForm = () => {
  const [searchParams /*setSearchParams*/] = useSearchParams();
  const topic = searchParams.get('book');
  console.log(topic);
  return (
    <div>
      <h2>{topic} 관련 도서 검색 결과</h2>
      <div>
        <span>도서 검색 결과</span>
        <a href="">정확도순</a>
        <a href="">최신순</a>
      </div>
      <Styled.InfoDiv>
        <div>표지</div>
        <div>카테고리</div>
        <div>제목</div>
        <div>저자</div>
        <div>출판</div>
        <div>정가</div>
        <div>책 소개</div>
        <div>후기</div>
        <div>좋아요</div>
        <div>조회수</div>
        <div>소장</div>
        <div>등록</div>
      </Styled.InfoDiv>
    </div>
  );
};

export default SearchResultForm;
