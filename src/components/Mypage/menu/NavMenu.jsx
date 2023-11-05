import { useIsActive } from '../../../hooks/Mypage/useIsActive';

import * as Styled from './Styled';

const NavMenu = () => {
  const { isMyActive, isMyBooks, handleClickMyActive, handleClickMyBooks } =
    useIsActive();

  return (
    <Styled.NavMenu
      ismyactive={isMyActive.toString()}
      ismybooks={isMyBooks.toString()}
    >
      <Styled.UnderLine
        ismyactive={isMyActive.toString()}
        ismybooks={isMyBooks.toString()}
      />
      <div>
        <ul>
          <li onClick={handleClickMyActive}>나의 활동</li>
          <li onClick={handleClickMyBooks}>나의 책방</li>
        </ul>
      </div>
    </Styled.NavMenu>
  );
};

export default NavMenu;
