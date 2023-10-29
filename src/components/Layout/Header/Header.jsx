import { useState, useRef, useEffect, Fragment } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserStore } from '../../../store/useUserStore';
import { ToggleBox } from '../../ToggleBox';
import Logo from '../../../images/BookLink_Logo.svg';
import searchLogo from '../../../images/search_icon.svg';
import toggleImage from '../../../images/toggle.svg';
import * as S from './style';
import { useToggleList } from '../../../hooks/Header/useToggleList';

const HeaderContainer = () => {
  const navigate = useNavigate();

  const { isProfileListOpen, handleClickProfileList } = useToggleList();

  const isLogin = useUserStore((state) => state.isLogin);
  const nickname = useUserStore((state) => state.nickname);

  const path = useLocation().pathname;

  const [pathName, setPathName] = useState(path);
  const [isCategoryListOpen, setIsCategoryListOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('도서');

  const searchRef = useRef(null);

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

  const onSearchHandler = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search?query=${searchRef.current.value}&page=1`);
    }
  };

  // useLayoutEffect(() => {
  //   setIsLogin();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    setPathName(path);
  }, [path]);

  return (
    <S.Wrapper>
      <div className="container">
        <S.LogoDiv>
          <S.StyledLink to="/">
            <S.Img src={Logo} />
          </S.StyledLink>
        </S.LogoDiv>
        <div>
          <S.StyledLink to="/" active={(pathName === '/').toString()}>
            홈
          </S.StyledLink>
          <S.LinkWithMargin
            to="/books"
            active={(pathName === '/books').toString()}
          >
            책방
          </S.LinkWithMargin>
          <S.StyledLink
            to="/communities"
            active={(pathName === '/communities').toString()}
          >
            커뮤니티
          </S.StyledLink>
        </div>
        <div>
          <S.SearchDiv>
            <S.SelectContainer>
              <S.CategorySelect
                value={selectedValue}
                onChange={handleSelectChange}
              >
                <option value="도서">도서</option>
                <option value="게시글">게시글</option>
              </S.CategorySelect>
              <S.SelectSpan onClick={handleSelectClick}>
                {selectedValue}
              </S.SelectSpan>
              {isCategoryListOpen && (
                <S.OptionsList>
                  <S.OptionItem onClick={() => handleOptionClick('도서')}>
                    도서
                  </S.OptionItem>
                  <S.OptionItem onClick={() => handleOptionClick('게시글')}>
                    게시글
                  </S.OptionItem>
                </S.OptionsList>
              )}
            </S.SelectContainer>
            <div style={{ position: 'relative' }}>
              <S.SearchInput
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
          </S.SearchDiv>
        </div>
        <S.HeaderProfileDiv onClick={handleClickProfileList}>
          {isLogin ? (
            <>
              <S.ProfileText>{nickname}님 환영합니다!</S.ProfileText>
              <S.ProfileImgDiv>
                <img
                  src="https://soccerquick.s3.ap-northeast-2.amazonaws.com/1689834239634.png"
                  alt="프로필 이미지"
                />
              </S.ProfileImgDiv>
              <S.ProfileToggleDiv active={isProfileListOpen.toString()}>
                <div>
                  <img src={toggleImage} alt="toggle" />
                </div>
                {isProfileListOpen && <ToggleBox active={isLogin.toString()} />}
              </S.ProfileToggleDiv>
            </>
          ) : (
            <Fragment>
              <S.HeaderAuthButton>
                <S.LinkWithAuthHref to="/login">로그인</S.LinkWithAuthHref>
              </S.HeaderAuthButton>
              <S.HeaderAuthButton>
                <S.LinkWithAuthHref to="/register">회원가입</S.LinkWithAuthHref>
              </S.HeaderAuthButton>
            </Fragment>
          )}
        </S.HeaderProfileDiv>
      </div>
    </S.Wrapper>
  );
};

export default HeaderContainer;
