import { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import * as bookService from '../../../../lib/apis/booksService';
import * as Styled from './Styled';
import optionImage from '../../../../images/comment_option.svg';
import thumbsImage from '../../../../images/thumbs.svg';
import likedThumbsImage from '../../../../images/liked_thumbs.svg';

const RecommentCard = ({ comments }) => {
  const [likes, setLikes] = useState(comments.like_cnt);
  const [isLiked, setIsLiked] = useState(comments.liked);
  const [isOptionClicked, setIsOptionClicked] = useState(false);
  console.log(likes, isLiked);
  const { params } = useParams();

  const handleOptionClick = useCallback(() => {
    setIsOptionClicked(!isOptionClicked);
  }, [isOptionClicked]);

  const handleLikeClick = useCallback(
    async (id) => {
      try {
        const { data } = await bookService.addLikeComment(params, id);

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
    [params, isLiked]
  );

  const { id, content, date, image, writer } = comments;

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
              <Styled.ReCommentOptionDiv
                active={isOptionClicked.toString()}
                onClick={() => handleOptionClick}
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
