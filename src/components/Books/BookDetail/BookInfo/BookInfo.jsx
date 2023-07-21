import { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { persistor } from '../../../../main';
import * as Styled from './Styled';
import * as bookService from '../../../../lib/apis/booksService';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const BookInfo = ({ book, isbn, comments, setComments }) => {
  const [replies, setReplies] = useState(comments);

  const navigate = useNavigate();
  const commentInputRef = useRef();

  const handleCommentCancel = useCallback(() => {
    commentInputRef.current.value = '';
  }, []);

  const handleCommentSubmit = useCallback(
    (parentId) => async (e) => {
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

        setReplies([...data.data.replies]);
        setComments([...data.data.replies]);

        commentInputRef.current.value = '';
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
    [isbn, navigate, setComments]
  );

  console.log('댓글목록', replies);

  return (
    <Styled.BookInfoWrap>
      <Styled.BookInfoContainer>
        <Styled.BookInfoLeftDiv>
          <Styled.BookImageBackgroundDiv>
            <Styled.BookImageDiv className="book-image">
              <img src={book.cover} alt="책 이미지" />
            </Styled.BookImageDiv>
          </Styled.BookImageBackgroundDiv>
          <Styled.BookInfoButtonDiv>
            <button>
              <div>대여정보 확인하기</div>
            </button>
            <button>
              <div>소장 등록하기</div>
            </button>
          </Styled.BookInfoButtonDiv>
        </Styled.BookInfoLeftDiv>

        <Styled.BookInfoRightDiv>
          <h3>{book.title}</h3>
          <div>
            <ul>
              <li>
                <span>저자</span>
                <strong>{book.title}</strong>
              </li>
              <li>
                <span>출판</span>
                <strong>{book.publisher}</strong>
              </li>
              <li>
                <span>출판일</span>
                <strong>{book.pubDate}</strong>
              </li>
            </ul>
          </div>
          <Styled.BookInfoDescriptionDiv>
            <h4>책 소개</h4>
            <p>{book.description}</p>
          </Styled.BookInfoDescriptionDiv>
        </Styled.BookInfoRightDiv>
      </Styled.BookInfoContainer>
      <Styled.BookReviewWrap>
        <h2>도서 후기</h2>
        <span>{comments.length}개</span>
        <Styled.BookReviewWriteForm>
          <Styled.BookReviewUserProfileDiv>
            {/* <img src="" alt="프로필 이미지" /> */}
          </Styled.BookReviewUserProfileDiv>
          <CommentForm
            onSubmit={handleCommentSubmit}
            onCancel={handleCommentCancel}
            commentInputRef={commentInputRef}
            parentId={0}
          />
        </Styled.BookReviewWriteForm>
        <Styled.CommentFilterDiv>
          <div>공감순</div>
          <div>최신순</div>
        </Styled.CommentFilterDiv>
        <CommentList
          onSubmit={handleCommentSubmit}
          onCancel={handleCommentCancel}
          commentInputRef={commentInputRef}
          comments={replies}
        />
        {/* {replies.map((comment) => {
          const { id, parent_id: parentId } = comment;

          return (
            id === parentId && (
              <CommentCard
                key={id}
                onSubmit={handleCommentSubmit}
                onCancel={handleCommentCancel}
                commentInputRef={commentInputRef}
                comment={comment}
                parentId={parentId}
              />
            )
          );
        })} */}
      </Styled.BookReviewWrap>
    </Styled.BookInfoWrap>
  );
};

export default BookInfo;
