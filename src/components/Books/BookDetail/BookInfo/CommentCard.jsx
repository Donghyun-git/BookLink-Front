import { useState, useCallback, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getDateDistance } from '../../../../utils/date';
import * as Styled from './Styled';
import * as bookService from '../../../../lib/apis/booksService';
import RecommentCard from './RecommentCard';
import CommentForm from './CommentForm';
import optionImage from '../../../../images/comment_option.svg';
import thumbsImage from '../../../../images/thumbs.svg';
import likedThumbsImage from '../../../../images/liked_thumbs.svg';
import upToggleImage from '../../../../images/up_toggle.svg';
import downToggleImage from '../../../../images/down_toggle.svg';
import { useDetailContext } from '../../../../context/BookDetailContext/detailContext';

const CommentCard = ({
  commentInputRef,
  onSubmit,
  onCancel,
  comment,
  parentId,
}) => {
  const {
    id,
    content,
    children,
    like_cnt: likeCnt,
    isLiked,
    date,
    image,
    writer,
    sub_reply_cnt: subReplyCnt,
  } = comment;

  const { state, dispatch } = useDetailContext();
  const [isRecommentClicked, setIsRecommentClicked] = useState(false);
  const [isShowRecomment, setIsShowRecomment] = useState(false);
  const [isOptionClicked, setIsOptionClicked] = useState(false);
  const [isUpdateClicked, setIsUpdateClicked] = useState(false);

  const userNickName = useSelector((state) => state.USER.nickname);

  const { isbn } = useParams();

  const handleOptionClick = useCallback(() => {
    setIsOptionClicked(!isOptionClicked);
  }, [isOptionClicked]);

  const handleRecommentClick = useCallback(() => {
    setIsRecommentClicked(!isRecommentClicked);
  }, [isRecommentClicked]);

  const handleShowRecomment = useCallback(() => {
    setIsShowRecomment(!isShowRecomment);
  }, [isShowRecomment]);

  //[ 좋아요 취소, 등록 ]
  const handleLikeClick = useCallback(async () => {
    try {
      const { data } = await bookService.addLikeComment(isbn, id);
      console.log(data);

      dispatch({ type: 'TOGGLE_COMMENT_LIKE', payload: { id } });

      return;
    } catch (error) {
      throw new Error(error.message);
    }
  }, [isbn, id, dispatch]);
  console.log('컨텍스트 상태', state.book.replies);

  //[ 댓글 수정 ]
  const handleUpdateComment = useCallback(
    async (content) => {
      try {
        const { data } = await bookService.updateComment(isbn, id, content);

        dispatch({
          type: 'UPDATE_COMMENT',
          payload: { id: id, content: data.data.content },
        });

        setIsUpdateClicked(!isUpdateClicked);
        return;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    [dispatch, id, isUpdateClicked, isbn]
  );

  const handleOpenUpdateComment = useCallback(() => {
    setIsUpdateClicked(!isUpdateClicked);
  }, [isUpdateClicked]);

  const handleCancelUpdateComment = useCallback(() => {
    setIsUpdateClicked(!isUpdateClicked);
  }, [isUpdateClicked]);

  //[ 댓글 삭제 ]
  const handleDeleteComment = useCallback(async () => {
    try {
      await bookService.deleteComment(isbn, id);

      dispatch({ type: 'DELETE_COMMENT', payload: { id } });
      return;
    } catch (error) {
      throw new Error(error.message);
    }
  }, [isbn, id, dispatch]);

  const recommentParentId = isRecommentClicked ? parentId : 0;

  let distance = false;

  if (date) {
    distance = getDateDistance(date);
  }

  return (
    <Styled.CommentCardDiv>
      <div>
        <Styled.CommentCardUserProfileDiv>
          <img src={image} alt="프로필 이미지" />
        </Styled.CommentCardUserProfileDiv>
        <div>
          <Styled.CommentListUserInfo>
            <div>
              <span>{writer}</span>
              <span>{distance} 전</span>
            </div>
            <div>
              <Styled.CommentOptionDiv
                active={isOptionClicked.toString()}
                onClick={handleOptionClick}
              >
                <div>
                  <img src={optionImage} alt="옵션 이미지" />
                  <ul>
                    {writer === userNickName ? (
                      <Fragment>
                        <li onClick={() => handleOpenUpdateComment()}>
                          <span>수정</span>
                        </li>
                        <li onClick={() => handleDeleteComment()}>
                          <span>삭제</span>
                        </li>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <li>
                          <span>신고하기</span>
                        </li>
                      </Fragment>
                    )}
                  </ul>
                </div>
              </Styled.CommentOptionDiv>
            </div>
          </Styled.CommentListUserInfo>
          <Styled.CommentListContentDiv>
            {isUpdateClicked ? (
              <Fragment>
                <Styled.UpdateCommentInput
                  id="comment"
                  defaultValue={content}
                  ref={commentInputRef}
                  placeholder="댓글을 입력해주세요."
                />
              </Fragment>
            ) : (
              <Fragment>
                <p>{content}</p>
              </Fragment>
            )}
          </Styled.CommentListContentDiv>

          <Styled.CommentReviewDiv>
            <Styled.CommentThumbsDiv onClick={() => handleLikeClick()}>
              <img
                src={isLiked ? likedThumbsImage : thumbsImage}
                alt="좋아요 이미지"
              />
            </Styled.CommentThumbsDiv>
            <Styled.CommentThumbsCountDiv
              active={isLiked !== null && isLiked.toString()}
            >
              {likeCnt}
            </Styled.CommentThumbsCountDiv>
            <Styled.CommentReviewWriteDiv
              active={isRecommentClicked.toString()}
            >
              <button onClick={() => handleRecommentClick()}>
                <span>답글 달기</span>
              </button>
            </Styled.CommentReviewWriteDiv>
            {isUpdateClicked && (
              <Styled.UpdateCommentButtonDiv>
                <span onClick={() => handleCancelUpdateComment()}>취소</span>
                <button
                  onClick={() =>
                    handleUpdateComment(commentInputRef.current.value)
                  }
                >
                  <span className="write">수정하기</span>
                </button>
              </Styled.UpdateCommentButtonDiv>
            )}
          </Styled.CommentReviewDiv>
          {subReplyCnt > 0 ? (
            <Styled.ShowCommentButtonDiv>
              <button onClick={() => handleShowRecomment()}>
                <img
                  src={isShowRecomment ? upToggleImage : downToggleImage}
                  alt="토글 이미지"
                />
                답글 {subReplyCnt}개
              </button>
            </Styled.ShowCommentButtonDiv>
          ) : (
            <></>
          )}
          {subReplyCnt > 0 && isShowRecomment ? (
            children.length > 0 &&
            children.map((reComment) => {
              return <RecommentCard key={reComment.id} comments={reComment} />;
            })
          ) : (
            <></>
          )}
        </div>
      </div>
      <div>
        {isRecommentClicked && (
          <Styled.BookReviewWriteForm style={{ justifyContent: 'center' }}>
            <Styled.BookReviewUserProfileDiv>
              <img src={image} alt="프로필 이미지" />
            </Styled.BookReviewUserProfileDiv>
            <CommentForm
              onSubmit={onSubmit}
              onCancel={onCancel}
              commentInputRef={commentInputRef}
              parentId={recommentParentId}
              handleRecommentClick={handleRecommentClick}
            />
          </Styled.BookReviewWriteForm>
        )}
      </div>
    </Styled.CommentCardDiv>
  );
};

export default CommentCard;
