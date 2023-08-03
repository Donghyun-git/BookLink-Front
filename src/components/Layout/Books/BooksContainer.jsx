import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import * as Styled from './Styled';
import Books from '../../Books/Books';
import Rents from '../../Books/Rents';
import CategorySelects from '../../Books/CategorySelects';
import rentButtonLogo from '../../../images/rent_logo.svg';
import bookStoreLogo from '../../../images/bookstore_logo.svg';

const BooksContainer = ({
  handleCategorySelect,
  handleCategorySearchWithKeyword,
  handleSortedCurrent,
  handleSortedLikes,
}) => {
  const isSortCurrent = useSelector((state) => state.BOOK.isCurrent);
  const isSortLikes = useSelector((state) => state.BOOK.isLikes);

  //책방, 대여 관련
  const [showBooksComponent, setShowBooksComponent] = useState(true);
  const [showRentsComponent, setShowRentsComponent] = useState(false);

  const handleClickBooks = useCallback(() => {
    setShowRentsComponent(false);
    setShowBooksComponent(true);
  }, []);

  const handleClickRents = useCallback(() => {
    setShowBooksComponent(false);
    setShowRentsComponent(true);
  }, []);

  //[ 엔터키 여부 ]
  const handleKeyDownSearch = useCallback(
    async (keyword, e = { key: 'Not' }, CID) => {
      if (e.key === 'Enter') {
        handleCategorySearchWithKeyword(true, keyword, CID);
        return;
      } else {
        handleCategorySearchWithKeyword(false, keyword, CID);
        return;
      }
    },
    [handleCategorySearchWithKeyword]
  );

  return (
    <Styled.BooksContainer>
      <Styled.NavDiv>
        <div>
          <Styled.NavList>
            <Styled.NavLi
              onClick={handleClickBooks}
              active={showBooksComponent.toString()}
            >
              <Styled.NavLiDiv active={showBooksComponent.toString()}>
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
              <Styled.NavLiDiv active={showRentsComponent.toString()}>
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
              onClick={handleSortedCurrent}
              active={isSortCurrent.toString()}
            >
              관련도순(기본)
            </Styled.NavSortLi>
            <Styled.NavSortLi
              onClick={handleSortedLikes}
              active={isSortLikes.toString()}
            >
              인기순
            </Styled.NavSortLi>
          </Styled.NavSortUl>
        </div>
      </Styled.NavDiv>
      <CategorySelects
        handleCategorySelect={handleCategorySelect}
        handleKeyDownSearch={handleKeyDownSearch}
      />
      {showBooksComponent && <Books isBooks={showBooksComponent} />}
      {showRentsComponent && <Rents />}
    </Styled.BooksContainer>
  );
};

export default BooksContainer;
