import { useState, useCallback } from 'react';
import * as Styled from './BooksStyled';
import Books from '../../Books/Books';
import Rents from '../../Books/Rents';
import rentButtonLogo from '../../../images/rent_logo.svg';
import bookStoreLogo from '../../../images/bookstore_logo.svg';

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
              <Styled.NavLiDiv>
                <Styled.NavLiLogo
                  src={bookStoreLogo}
                  alt="책방 버튼 로고"
                  active={showBooksComponent.toString()}
                />
                책방
              </Styled.NavLiDiv>
            </Styled.NavLi>
            <Styled.NavLi
              onClick={handleClickRents}
              active={showRentsComponent.toString()}
            >
              <Styled.NavLiDiv>
                <Styled.NavLiRentLogo
                  src={rentButtonLogo}
                  alt="대여하기 버튼 로고"
                  active={showRentsComponent.toString()}
                />
                대여하기
              </Styled.NavLiDiv>
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
