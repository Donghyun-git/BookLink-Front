import { useState } from 'react';
import * as Styled from './Styled';
import optionImage from '../../../../images/comment_option.svg';
import thumbsImage from '../../../../images/thumbs.svg';

const RecommentCard = ({ comments }) => {
  const [isOptionClicked, setIsOptionClicked] = useState(false);

  const handleOptionClick = () => {
    setIsOptionClicked(!isOptionClicked);
  };

  const {
    id,
    parent_id: parentId,
    content,
    date,
    image,
    liked,
    writer,
    like_cnt: likeCnt,
  } = comments;

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
              </Styled.ReCommentOptionDiv>
            </div>
          </Styled.CommentListUserInfo>
          <Styled.ReCommentListContentDiv>
            <p>{content}</p>
          </Styled.ReCommentListContentDiv>

          <Styled.CommentReviewDiv>
            <Styled.CommentThumbsDiv active={liked.toString()}>
              <img src={thumbsImage} alt="좋아요 이미지" />
            </Styled.CommentThumbsDiv>
            <Styled.CommentThumbsCountDiv>
              {likeCnt}
            </Styled.CommentThumbsCountDiv>
          </Styled.CommentReviewDiv>
        </div>
      </div>
    </Styled.CommentCardDiv>
  );
};

export default RecommentCard;
