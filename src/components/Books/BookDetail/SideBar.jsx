import { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import * as Styled from './Styled';
import * as bookService from '../../../lib/apis/booksService';
import bookLikeImage from '../../../images/heart.svg';
import bookConnectImage from '../../../images/connect.svg';

const SideBar = ({ isLiked, likes }) => {
  const { params } = useParams();

  const [likeCnt, setLikeCnt] = useState(likes);
  const [liked, setLiked] = useState(isLiked);

  const handleLikeBook = useCallback(async () => {
    try {
      const { data } = await bookService.addLikeBook(params);

      console.log(data);
      setLikeCnt(data.data.like_cnt);
      setLiked(!liked);
    } catch (error) {
      console.error(error);
    }
  }, [liked, params]);

  console.log(likeCnt, liked);
  return (
    <Styled.SideBarDiv>
      <div>
        <button onClick={() => handleLikeBook()}>
          <img src={bookLikeImage} alt="하트 이미지" />
          {!liked && <span>이 책이 마음에 드시나요?</span>}
        </button>
      </div>
      <div>{likeCnt}</div>
      <div>
        <button>
          <img src={bookConnectImage} alt="공유 이미지" />
        </button>
      </div>
    </Styled.SideBarDiv>
  );
};

export default SideBar;
