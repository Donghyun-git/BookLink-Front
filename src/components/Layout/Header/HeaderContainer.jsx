import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../../../images/BookLink_Logo.svg';
import * as Styled from './HeaderStyled';

const HeaderContainer = () => {
  const path = useLocation().pathname;
  const [pathName, setPathName] = useState(path);

  const [isCategoryListOpen, setIsCategoryListOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('도서');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSelectClick = () => {
    setIsCategoryListOpen(!isCategoryListOpen);
  };

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setIsCategoryListOpen(false);
  };

  useEffect(() => {
    setPathName(path);
  }, [path]);

  return (
    <Styled.HeaderContainer>
      <Styled.LogoDiv>
        <Styled.StyledLink to="/books">
          <Styled.Img src={Logo} />
        </Styled.StyledLink>
      </Styled.LogoDiv>
      <div>
        <Styled.StyledLink
          to="/home"
          active={(pathName === '/home').toString()}
        >
          홈
        </Styled.StyledLink>
        <Styled.LinkWithMargin
          to="/books"
          active={(pathName === '/books').toString()}
        >
          책방
        </Styled.LinkWithMargin>
        <Styled.StyledLink
          to="/book-meetings"
          active={(pathName === '/book-meetings').toString()}
        >
          커뮤니티
        </Styled.StyledLink>
      </div>
      <div>
        <Styled.SearchDiv>
          <Styled.SelectContainer>
            <Styled.CategorySelect
              value={selectedValue}
              onChange={handleSelectChange}
            >
              <option value="도서">도서</option>
              <option value="게시글">게시글</option>
            </Styled.CategorySelect>
            <Styled.SelectSpan onClick={handleSelectClick}>
              {selectedValue}
            </Styled.SelectSpan>
            {isCategoryListOpen && (
              <Styled.OptionsList>
                <Styled.OptionItem onClick={() => handleOptionClick('도서')}>
                  도서
                </Styled.OptionItem>
                <Styled.OptionItem onClick={() => handleOptionClick('게시글')}>
                  게시글
                </Styled.OptionItem>
              </Styled.OptionsList>
            )}
          </Styled.SelectContainer>
          <div>
            <Styled.SearchInput
              type="search"
              placeholder="책을 검색해보세요!"
            />
          </div>
        </Styled.SearchDiv>
      </div>
    </Styled.HeaderContainer>
  );
};

export default HeaderContainer;
