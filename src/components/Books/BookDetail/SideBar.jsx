import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import * as Styled from './Styled';
import * as bookService from '../../../lib/apis/booksService';
import heart from '../../../images/heart.svg';
import heartGray from '../../../images/heart_gray.svg';
import share from '../../../images/share.svg';
import { useDetailContext } from './context/detailContext';

const SideBar = () => {
  const { state, dispatch } = useDetailContext();
  const { liked, like_cnt: likeCnt } = state.book.item[0];
  const { isbn } = useParams();

  const handleLikeBook = useCallback(async () => {
    try {
      await bookService.addLikeBook(isbn);

      dispatch({ type: 'TOGGLE_BOOK_LIKE' });
    } catch (error) {
      console.error(error);
    }
  }, [dispatch, isbn]);

  return (
    <Styled.SideBarDiv>
      <div>
        <button onClick={() => handleLikeBook()}>
          <img src={!liked ? heartGray : heart} alt="하트 이미지" />
          {!liked && <span>이 책이 마음에 드시나요?</span>}
        </button>
      </div>
      <div>{likeCnt}</div>
      <div>
        <button>
          <img src={share} alt="공유 이미지" />
          <div>공유하기</div>
        </button>
      </div>
    </Styled.SideBarDiv>
  );
};

export default SideBar;
