import { useState, useCallback } from 'react';
import * as Styled from './BooksStyled';
import Books from '../../Books/Books';
import Rents from '../../Books/Rents';

const BooksContainer = () => {
  const [showBooksComponent, setShowBooksComponent] = useState(true);
  const [showRentsComponent, setShowRentsComponent] = useState(false);
  const [sortCurrent, setSortCurrent] = useState(true);
  const [sortLikes, setSortLikes] = useState(false);

  const handleClickBooks = useCallback(() => {
    setShowRentsComponent(false);
    setShowBooksComponent(true);
  }, []);

  const handleClickRents = useCallback(() => {
    setShowBooksComponent(false);
    setShowRentsComponent(true);
  }, []);

  const handleClickSortCurrent = useCallback(() => {
    setSortLikes(false);
    setSortCurrent(true);
  }, []);

  const handleClickSortLikes = useCallback(() => {
    setSortCurrent(false);
    setSortLikes(true);
  }, []);

  return (
    <Styled.BooksContainer>
      <Styled.SearchDiv>
        <Styled.SearchInput type="search" placeholder="책을 검색해보세요!" />
      </Styled.SearchDiv>
      <Styled.NavDiv>
        <div>
          <Styled.NavList>
            <Styled.NavLi
              onClick={handleClickBooks}
              active={showBooksComponent.toString()}
            >
              책방
            </Styled.NavLi>
            <Styled.NavLi
              onClick={handleClickRents}
              active={showRentsComponent.toString()}
            >
              대여하기
            </Styled.NavLi>
          </Styled.NavList>
        </div>
        <div>
          <Styled.NavSortUl>
            <Styled.NavSortLi
              onClick={handleClickSortCurrent}
              active={sortCurrent.toString()}
            >
              최신순
            </Styled.NavSortLi>
            <Styled.NavSortLi
              onClick={handleClickSortLikes}
              active={sortLikes.toString()}
            >
              좋아요
            </Styled.NavSortLi>
          </Styled.NavSortUl>
        </div>
      </Styled.NavDiv>
      {showBooksComponent && <Books />}
      {showRentsComponent && <Rents />}
    </Styled.BooksContainer>
  );
};

export default BooksContainer;
