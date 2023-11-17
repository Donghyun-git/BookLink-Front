import { useToggleList } from '../../hooks/Header/useToggleList';
import * as S from './style';

const ToggleBox = ({ active }) => {
  const {
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
    handleLogOut,
    handleNavigateMypage,
    handleChat,
    handleToggleMessageBox,
  } = useToggleList();

  const handleOpenMessageBox = () => {};

  return (
    <S.ToggleBox active={active}>
      <ul>
        <li>
          <button onClick={handleNavigateMypage}>마이페이지</button>
        </li>
        <li>
          <button onClick={handleToggleMessageBox}> 쪽지함 </button>
        </li>
        {/* <li>
          <button onClick={handleChat}>1:1 채팅</button>
        </li> */}
        {/* <li>
          <button>소장 도서</button>
        </li> */}
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <button onClick={handleLogOut}>
            <span>로그아웃</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M10 0V2H2V12H10V14H0V0H10ZM12 4L16 7L12 10V8H4V6H12V4Z"
                fill={isHovered ? '#003c74' : '#848484'}
              />
            </svg>
          </button>
        </li>
      </ul>
    </S.ToggleBox>
  );
};

export default ToggleBox;
