import { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { persistor } from '../../../../main';
import * as Styled from './Styled';
import * as bookService from '../../../../lib/apis/booksService';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import { useDetailContext } from '../../../../context/BookDetailContext/detailContext';
import { useGoToMap } from '../../../../hooks/Map/useGotoMap';

const BookInfo = ({ isbn }) => {
  const { state, dispatch } = useDetailContext();
  const { cover, isbn13, author, title, publisher, pubDate, description } =
    state.book.item[0];
  const [isClickedDate, setIsClickedDate] = useState(false);
  const [isClickedLiked, setIsClickedLiked] = useState(true);

  const navigate = useNavigate();
  const commentInputRef = useRef();

  const { goToMap } = useGoToMap();

  const handleClickFilterDate = useCallback(() => {
    setIsClickedLiked(!isClickedLiked);
    setIsClickedDate(true);
  }, [isClickedLiked]);

  const handleClickFilterLiked = useCallback(() => {
    setIsClickedDate(!isClickedDate);
    setIsClickedLiked(true);
  }, [isClickedDate]);

  const handleCommentCancel = useCallback(() => {
    commentInputRef.current.value = '';
  }, []);

  const handleCommentSubmit = useCallback(
    (parentId, handleRecommentClick) => async (e) => {
      e.preventDefault();
      console.log('부모아이디', parentId);
      const content = commentInputRef.current.value;

      if (!content) {
        alert('작성 내용을 입력해주세요!');
        return;
      }

      try {
        await bookService.addComment({
          content,
          isbn,
          parentId,
        });

        const { data } = await bookService.getOneBooks(isbn);

        dispatch({ type: 'ADD_COMMENT', payload: data.data.replies });

        commentInputRef.current.value = '';

        if (parentId !== 0) return handleRecommentClick();
      } catch (error) {
        console.error(error);
        const { message } = error;
        const status = parseInt(message.split(' ')[5]);

        if (status === 403) {
          alert('세션이 만료되었습니다. 다시 로그인해주세요!');
          persistor.purge();
          navigate('/login');
          return;
        }
      }
    },
    [dispatch, isbn, navigate]
  );

  return (
    <Styled.BookInfoWrap>
      <Styled.BookInfoContainer>
        <Styled.BookInfoLeftDiv>
          <Styled.BookImageBackgroundDiv>
            <Styled.BookImageDiv className="book-image">
              <img src={cover} alt="책 이미지" />
            </Styled.BookImageDiv>
          </Styled.BookImageBackgroundDiv>
          <Styled.BookInfoButtonDiv>
            <button>
              <div>독서 기록하기</div>
            </button>
            <button
              onClick={() =>
                goToMap({ isbn13, title, author, pubDate, publisher, cover })
              }
            >
              <div>이 책이 있는 주변 도서관</div>
            </button>
          </Styled.BookInfoButtonDiv>
        </Styled.BookInfoLeftDiv>

        <Styled.BookInfoRightDiv>
          <h3>{title}</h3>
          <div>
            <ul>
              <li>
                <span>저자</span>
                <strong>{author}</strong>
              </li>
              <li>
                <span>출판</span>
                <strong>{publisher}</strong>
              </li>
              <li>
                <span>출판일</span>
                <strong>{pubDate}</strong>
              </li>
            </ul>
          </div>
          <Styled.BookInfoDescriptionDiv>
            <h4>책 소개</h4>
            <p>{description}</p>
          </Styled.BookInfoDescriptionDiv>
        </Styled.BookInfoRightDiv>
      </Styled.BookInfoContainer>
      <Styled.BookReviewWrap>
        <h2>도서 후기</h2>
        <span>{state.book.replies.length}개</span>
        <Styled.BookReviewWriteForm>
          <Styled.BookReviewUserProfileDiv>
            <img
              src="https://soccerquick.s3.ap-northeast-2.amazonaws.com/1689834239634.png"
              alt="프로필 이미지"
            />
          </Styled.BookReviewUserProfileDiv>
          <CommentForm
            onSubmit={handleCommentSubmit}
            onCancel={handleCommentCancel}
            commentInputRef={commentInputRef}
            parentId={0}
          />
        </Styled.BookReviewWriteForm>
        <Styled.CommentFilterDiv
          active={isClickedLiked ? 'like' : isClickedDate ? 'date' : null}
        >
          <div onClick={() => handleClickFilterLiked()}>공감순</div>
          <div onClick={() => handleClickFilterDate()}> 최신순</div>
        </Styled.CommentFilterDiv>
        <CommentList
          onSubmit={handleCommentSubmit}
          onCancel={handleCommentCancel}
          commentInputRef={commentInputRef}
          isClickedLiked={isClickedLiked}
          isClickedDate={isClickedDate}
        />
      </Styled.BookReviewWrap>
    </Styled.BookInfoWrap>
  );
};

export default BookInfo;
