import { useState, useCallback, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getDateDistance } from '../../../../utils/date';
import * as bookService from '../../../../lib/apis/booksService';
import * as Styled from './Styled';
import optionImage from '../../../../images/comment_option.svg';
import thumbsImage from '../../../../images/thumbs.svg';
import likedThumbsImage from '../../../../images/liked_thumbs.svg';

const RecommentCard = ({ comments }) => {
  const { id, content, date, like_cnt, image, writer } = comments;

  const userNickName = useSelector((state) => state.USER.nickname);
  const [likes, setLikes] = useState(like_cnt);
  const [isLiked, setIsLiked] = useState(comments.isLiked);
  const [isOptionClicked, setIsOptionClicked] = useState(false);

  // const [updatedContent, setUpdatedContent] = useState(content);
  const [isUpdateClicked, setIsUpdateClicked] = useState(false);

  const { isbn } = useParams();

  const handleOptionClick = useCallback(() => {
    setIsOptionClicked(!isOptionClicked);
  }, [isOptionClicked]);

  //[ 좋아요 등록, 취소 ]

  const handleLikeClick = useCallback(
    async (id) => {
      try {
        const { data } = await bookService.addLikeComment(isbn, id);

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
    },
    [isbn, isLiked]
  );

  // [ 댓글 수정 ]
  const handleOpenUpdateComment = useCallback(() => {
    setIsUpdateClicked(!isUpdateClicked);
  }, [isUpdateClicked]);

  //[ 댓글 삭제 ]
  const handleDeleteComment = useCallback(async () => {
    try {
      const { status, data } = await bookService.deleteComment(isbn, id);

      console.log(data);

      return;
    } catch (error) {
      throw new Error(error.message);
    }
  }, [isbn, id]);

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
            <p>{content}</p>
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
              {likes}
            </Styled.CommentThumbsCountDiv>
          </Styled.CommentReviewDiv>
        </div>
      </div>
    </Styled.CommentCardDiv>
  );
};

export default RecommentCard;
