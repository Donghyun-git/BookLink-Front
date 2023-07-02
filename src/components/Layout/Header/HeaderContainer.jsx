import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../../../images/BookLink_Logo.svg';
import * as Styled from './HeaderStyled';

const HeaderContainer = () => {
  const path = useLocation().pathname;
  const [pathName, setPathName] = useState(path);

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
          to="/books"
          active={(pathName === '/books').toString()}
        >
          책방
        </Styled.StyledLink>
        <Styled.LinkWithMargin
          to="/book-meetings"
          active={(pathName === '/book-meetings').toString()}
        >
          독서모임
        </Styled.LinkWithMargin>
        <Styled.StyledLink
          to="/mypage"
          active={(pathName === '/mypage').toString()}
        >
          마이페이지
        </Styled.StyledLink>
      </div>
      <Styled.SearchDiv>
        <Styled.CategorySelect>
          <option value="책">책</option>
          <option value="게시글">게시글</option>
        </Styled.CategorySelect>
        <Styled.SearchInput type="search" placeholder="책을 검색해보세요!" />
      </Styled.SearchDiv>
    </Styled.HeaderContainer>
  );
};

export default HeaderContainer;
