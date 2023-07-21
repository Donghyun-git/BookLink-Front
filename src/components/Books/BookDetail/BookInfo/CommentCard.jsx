import { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import * as Styled from './Styled';
import * as bookService from '../../../../lib/apis/booksService';
import RecommentCard from './RecommentCard';
import CommentForm from './CommentForm';
import optionImage from '../../../../images/comment_option.svg';
import thumbsImage from '../../../../images/thumbs.svg';
import likedThumbsImage from '../../../../images/liked_thumbs.svg';

const CommentCard = ({
  commentInputRef,
  onSubmit,
  onCancel,
  comment,
  parentId,
}) => {
  const [likes, setLikes] = useState(comment.like_cnt);
  const [isLiked, setIsLiked] = useState(comment.liked);
  const { params } = useParams();
  const [isRecommentClicked, setIsRecommentClicked] = useState(false);
  const [isShowRecomment, setIsShowRecomment] = useState(false);
  const [isOptionClicked, setIsOptionClicked] = useState(false);

  const handleOptionClick = useCallback(() => {
    setIsOptionClicked(!isOptionClicked);
  }, [isOptionClicked]);

  const handleRecommentClick = useCallback(() => {
    setIsRecommentClicked(!isRecommentClicked);
  }, [isRecommentClicked]);

  const handleShowRecomment = useCallback(() => {
    setIsShowRecomment(!isShowRecomment);
  }, [isShowRecomment]);

  const handleLikeClick = useCallback(async () => {
    try {
      const { data } = await bookService.addLikeComment(params, comment.id);

      console.log(data);

      setLikes((prevLikes) => {
        if (isLiked) return prevLikes - 1;

        return prevLikes + 1;
      });

      setIsLiked(!isLiked);
      return;
    } catch (error) {
      throw new Error(error.message);
    }
  }, [params, comment.id, isLiked]);

  const recommentParentId = isRecommentClicked ? parentId : 0;

  const {
    content,
    children,
    date,
    image,
    writer,
    sub_reply_cnt: subReplyCnt,
  } = comment;

  console.log('커멘트카드 배열', comment.children);

  const formattedDate = date.split('T')[0].split('-').join('.');

  return (
    <Styled.CommentCardDiv>
      <div>
        <Styled.CommentCardUserProfileDiv>
          <img src={image} alt="프로필 이미지" />
        </Styled.CommentCardUserProfileDiv>
        <div>
          <Styled.CommentListUserInfo>
            <div>
              <span>{writer}</span> <span>{formattedDate}</span>
            </div>
            <div>
              <Styled.CommentOptionDiv
                active={isOptionClicked.toString()}
                onClick={handleOptionClick}
              >
                <div>
                  <img src={optionImage} alt="옵션 이미지" />
                  <ul>
                    <li>
                      <span>신고하기</span>
                    </li>
                    <li>
                      <span>수정</span>
                    </li>
                    <li>
                      <span>삭제</span>
                    </li>
                  </ul>
                </div>
              </Styled.CommentOptionDiv>
            </div>
          </Styled.CommentListUserInfo>
          <Styled.CommentListContentDiv>
            <p>{content}</p>
          </Styled.CommentListContentDiv>

          <Styled.CommentReviewDiv>
            <Styled.CommentThumbsDiv
              active={isLiked.toString()}
              onClick={handleLikeClick}
            >
              <img
                src={isLiked ? likedThumbsImage : thumbsImage}
                alt="좋아요 이미지"
              />
            </Styled.CommentThumbsDiv>
            <Styled.CommentThumbsCountDiv active={isLiked.toString()}>
              {likes}
            </Styled.CommentThumbsCountDiv>
            <Styled.CommentReviewWriteDiv
              active={isRecommentClicked.toString()}
            >
              <button onClick={handleRecommentClick}>
                <span>답글 달기</span>
              </button>
            </Styled.CommentReviewWriteDiv>
          </Styled.CommentReviewDiv>
          {subReplyCnt > 0 ? (
            <Styled.ShowCommentButtonDiv>
              <button onClick={handleShowRecomment}>
                답글 {subReplyCnt}개
              </button>
            </Styled.ShowCommentButtonDiv>
          ) : (
            <></>
          )}
          {subReplyCnt > 0 && isShowRecomment ? (
            children.length > 0 &&
            children.map((reComment) => {
              return (
                <RecommentCard
                  key={reComment.id}
                  comments={reComment}
                  isRecommentClicked={isRecommentClicked}
                />
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
      <div>
        {isRecommentClicked && (
          <Styled.BookReviewWriteForm>
            <Styled.BookReviewUserProfileDiv>
              <img src={image} alt="프로필 이미지" />
            </Styled.BookReviewUserProfileDiv>
            <CommentForm
              onSubmit={onSubmit}
              onCancel={onCancel}
              commentInputRef={commentInputRef}
              parentId={recommentParentId}
            />
          </Styled.BookReviewWriteForm>
        )}
      </div>
    </Styled.CommentCardDiv>
  );
};

export default CommentCard;
