import { useState, useCallback, useRef, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getDateDistance } from '../../../../utils/date';
import * as bookService from '../../../../lib/apis/booksService';
import * as Styled from './Styled';
import optionImage from '../../../../images/comment_option.svg';
import thumbsImage from '../../../../images/thumbs.svg';
import likedThumbsImage from '../../../../images/liked_thumbs.svg';
import { useDetailContext } from '../context/detailContext';

const RecommentCard = ({ comments }) => {
  const {
    id,
    content,
    date,
    isLiked,
    like_cnt: likeCnt,
    image,
    writer,
  } = comments;

  const { dispatch } = useDetailContext();

  const userNickName = useSelector((state) => state.USER.nickname);

  const { isbn } = useParams();

  const [isOptionClicked, setIsOptionClicked] = useState(false);
  const [isUpdateClicked, setIsUpdateClicked] = useState(false);

  const commentInputRef = useRef();

  const handleOptionClick = useCallback(() => {
    setIsOptionClicked(!isOptionClicked);
  }, [isOptionClicked]);

  const handleCancelUpdateComment = useCallback(() => {
    setIsUpdateClicked(!isUpdateClicked);
  }, [isUpdateClicked]);

  //[ 좋아요 등록, 취소 ]

  const handleLikeClick = useCallback(
    async (id) => {
      try {
        const { data } = await bookService.addLikeComment(isbn, id);

        console.log(data);

        dispatch({ type: 'TOGGLE_COMMENT_LIKE', payload: { id } });
        return;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    [isbn, dispatch]
  );

  // [ 답글 수정 ]
  const handleOpenUpdateComment = useCallback(() => {
    setIsUpdateClicked(!isUpdateClicked);
  }, [isUpdateClicked]);

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

  //[ 답글 삭제 ]
  const handleDeleteComment = useCallback(async () => {
    try {
      await bookService.deleteComment(isbn, id);

      dispatch({ type: 'DELETE_COMMENT', payload: { id } });
      return;
    } catch (error) {
      throw new Error(error.message);
    }
  }, [isbn, id, dispatch]);

  const distance = getDateDistance(date);

  return (
    <Styled.CommentCardDiv>
      <div>
        <Styled.CommentCardUserProfileDiv>
          <img src={image} alt="프로필 이미지" />
        </Styled.CommentCardUserProfileDiv>
        <div>
          <Styled.CommentListUserInfo>
            <div>
              <span>{writer}</span> <span>{distance} 전</span>
            </div>
            <div>
              <Styled.ReCommentOptionDiv
                active={isOptionClicked.toString()}
                onClick={() => handleOptionClick()}
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
              </Styled.ReCommentOptionDiv>
            </div>
          </Styled.CommentListUserInfo>
          <Styled.ReCommentListContentDiv>
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
          </Styled.ReCommentListContentDiv>

          <Styled.CommentReviewDiv>
            <Styled.CommentThumbsDiv
              active={isLiked.toString()}
              onClick={() => handleLikeClick(id)}
            >
              <img
                src={isLiked ? likedThumbsImage : thumbsImage}
                alt="좋아요 이미지"
              />
            </Styled.CommentThumbsDiv>
            <Styled.CommentThumbsCountDiv active={isLiked.toString()}>
              {likeCnt}
            </Styled.CommentThumbsCountDiv>
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
        </div>
      </div>
    </Styled.CommentCardDiv>
  );
};

export default RecommentCard;
