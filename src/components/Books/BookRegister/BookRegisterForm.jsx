import React from 'react';
import {
  MainContainerDiv,
  MainContentsDiv,
} from '../../../styles/globalStyled';
import * as Styled from './Styled';
import BookSearchForm from '../../Common/Search/BookSearch/BookSearchForm';
import { useParams } from 'react-router-dom';
const BookRegisterForm = () => {
  const { isbn } = useParams();

  return (
    <MainContainerDiv>
      <MainContentsDiv>
        <Styled.MainTag>읽은 도서 기록하기</Styled.MainTag>
        <BookSearchForm />
        <Styled.Tag>추천사 작성하기</Styled.Tag>
        <Styled.Recommend placeholder="회원님만의 추천사를 작성해보세요" />
        <Styled.Tag>도서 상태 설명하기</Styled.Tag>
        <Styled.Contents placeholder="도서의 구매일자, 상태를 설명해주세요" />
        <Styled.Tag>대여방법 작성</Styled.Tag>
        <Styled.Contents placeholder="다른 사람들이 도서를 대여할 수 있도록 대여 안내 글을 작성해 보세요! 상세히 작성할수록 대여를 보다 원활히 진행할 수 있습니다." />
      </MainContentsDiv>
    </MainContainerDiv>
  );
};

export default BookRegisterForm;
