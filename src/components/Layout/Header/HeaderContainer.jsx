import { useState, useRef, useEffect, useCallback, Fragment } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserToggle from '../../Header/UserToggle';
import Logo from '../../../images/BookLink_Logo.svg';
import searchLogo from '../../../images/search_icon.svg';
import toggleImage from '../../../images/toggle.svg';
import * as Styled from './Styled';

const HeaderContainer = () => {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const [pathName, setPathName] = useState(path);

  const [isCategoryListOpen, setIsCategoryListOpen] = useState(false);
  const [isProfileListOpen, setIsProfileListOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('도서');

  const searchRef = useRef(null);

  const nickName = useSelector((state) => state.USER.nickname);
  const isLoggedIn = useSelector((state) => state.USER.isLoggedIn);

  const handleSelectChange = useCallback((event) => {
    setSelectedValue(event.target.value);
  }, []);

  const handleClickProfileList = useCallback(() => {
    setIsProfileListOpen(!isProfileListOpen);
  }, [isProfileListOpen]);

  const handleSelectClick = useCallback(() => {
    setIsCategoryListOpen(!isCategoryListOpen);
  }, [isCategoryListOpen]);

  const handleOptionClick = useCallback((value) => {
    setSelectedValue(value);
    setIsCategoryListOpen(false);
  }, []);

  const onSearchHandler = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search?query=${searchRef.current.value}`);
    }
  };

  useEffect(() => {
    setPathName(path);
  }, [path]);

  return (
    <Styled.HeaderContainer>
      <Styled.LogoDiv>
        <Styled.StyledLink to="/">
          <Styled.Img src={Logo} />
        </Styled.StyledLink>
      </Styled.LogoDiv>
      <div>
        <Styled.StyledLink to="/" active={(pathName === '/').toString()}>
          홈
        </Styled.StyledLink>
        <Styled.LinkWithMargin
          to="/books"
          active={(pathName === '/books').toString()}
        >
          책방
        </Styled.LinkWithMargin>
        <Styled.StyledLink
          to="/communities"
          active={(pathName === '/communities').toString()}
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
          <div style={{ position: 'relative' }}>
            <Styled.SearchInput
              type="search"
              placeholder="책을 검색해보세요!"
              ref={searchRef}
              onKeyDown={onSearchHandler}
            />
            <div
              style={{
                position: 'absolute',
                top: '0.143rem',
                right: '0.429rem',
                cursor: 'pointer',
              }}
            >
              <img
                src={searchLogo}
                alt="검색 아이콘"
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </Styled.SearchDiv>
      </div>
      <Styled.HeaderProfileDiv onClick={handleClickProfileList}>
        {isLoggedIn ? (
          <>
            <Styled.ProfileText>{nickName}님 환영합니다!</Styled.ProfileText>
            <Styled.ProfileImgDiv>
              <img
                src="https://soccerquick.s3.ap-northeast-2.amazonaws.com/1689834239634.png"
                alt="프로필 이미지"
              />
            </Styled.ProfileImgDiv>
            <Styled.ProfileToggleDiv active={isProfileListOpen.toString()}>
              <div>
                <img src={toggleImage} alt="toggle" />
              </div>
              {isProfileListOpen && <UserToggle />}
            </Styled.ProfileToggleDiv>
          </>
        ) : (
          <Fragment>
            <Styled.HeaderAuthButton>
              <Styled.LinkWithAuthHref to="/login">
                로그인
              </Styled.LinkWithAuthHref>
            </Styled.HeaderAuthButton>
            <Styled.HeaderAuthButton>
              <Styled.LinkWithAuthHref to="/register">
                회원가입
              </Styled.LinkWithAuthHref>
            </Styled.HeaderAuthButton>
          </Fragment>
        )}
      </Styled.HeaderProfileDiv>
    </Styled.HeaderContainer>
  );
};

export default HeaderContainer;
