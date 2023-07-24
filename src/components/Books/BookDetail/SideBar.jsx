import { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import * as Styled from './Styled';
import * as bookService from '../../../lib/apis/booksService';
import heart from '../../../images/heart.svg';
import heartGray from '../../../images/heart_gray.svg';
import share from '../../../images/share.svg';

const SideBar = ({ isLiked, likes }) => {
  const { isbn } = useParams();

  const [likeCnt, setLikeCnt] = useState(likes);
  const [liked, setLiked] = useState(isLiked);

  const handleLikeBook = useCallback(async () => {
    try {
      const { data } = await bookService.addLikeBook(isbn);

      console.log(data);
      setLikeCnt(data.data.like_cnt);
      setLiked(!liked);
    } catch (error) {
      console.error(error);
    }
  }, [isbn, liked]);

  console.log(likeCnt, liked);
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
