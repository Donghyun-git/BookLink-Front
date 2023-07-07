import { useState, useEffect, Fragment } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../../../redux/actions/authActions';
import Logo from '../../../images/BookLink_Logo.svg';
import searchLogo from '../../../images/search_icon.svg';
import * as Styled from './HeaderStyled';

const HeaderContainer = () => {
  const navigate = useNavigate();

  const path = useLocation().pathname;
  const [pathName, setPathName] = useState(path);

  const [isCategoryListOpen, setIsCategoryListOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('도서');

  const dispatch = useDispatch();
  const nickName = useSelector((state) => state.authReducer.nickname);
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn); // 후에 로그인 상태 전역 관리.

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

  const handleLogOut = () => {
    dispatch({ ...authActions.logout(), payload: { isLoggedIn: false } });
    alert('로그아웃 되었습니다!');
    navigate('/');
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
          <div style={{ position: 'relative' }}>
            <Styled.SearchInput
              type="search"
              placeholder="책을 검색해보세요!"
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
      <Styled.HeaderProfileDiv>
        {isLoggedIn ? (
          <Fragment>
            <Styled.ProfileText>{nickName}님 환영합니다!</Styled.ProfileText>
            <Styled.ProfileImgDiv>
              {/* <img src="" alt="프로필 이미지" /> */}
            </Styled.ProfileImgDiv>
            <button onClick={handleLogOut}>
              <div>로그아웃</div>
            </button>
          </Fragment>
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
