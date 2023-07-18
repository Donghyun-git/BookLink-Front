import { useState } from 'react';
import * as Styled from './Styled';
import CommentForm from './CommentForm';
import optionImage from '../../../../images/comment_option.svg';
import thumbsImage from '../../../../images/thumbs.svg';

const CommentCard = ({ commentInputRef, onSubmit, onCancel }) => {
  const [isRecommentClicked, setIsRecommentClicked] = useState(false);
  const [isOptionClicked, setIsOptionClicked] = useState(false);

  const handleOptionClick = () => {
    setIsOptionClicked(!isOptionClicked);
  };

  const handleRecommentClick = () => {
    setIsRecommentClicked(!isRecommentClicked);
  };

  return (
    <Styled.CommentCardDiv>
      <div>
        <Styled.CommentCardUserProfileDiv>
          {/* <img src="" alt="프로필 이미지" /> */}
        </Styled.CommentCardUserProfileDiv>
        <div>
          <Styled.CommentListUserInfo>
            <div>
              <span>고구마방귀뽕</span> <span>2022.06.21</span>
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
            <p>
              예리한 칼날 같고 냉정하지만 그 안에는 사람을 위하는 진실된
              마음이있다. 사는동안 수십 번은 더 읽고 싶은 책. 뜬구름 잡는 얘기가
              아닌 그야말로 현실속에 녹아내리는 체험담이며 질문에 대한 응답도
              구체적으로 적용할수 있게 해주신다.그저 저렴한 값에 이렇게 귀한
              책을 접하게 할수있게 해주신 세이노님께 감사할 따름이다.
            </p>
          </Styled.CommentListContentDiv>

          <Styled.CommentReviewDiv>
            <Styled.CommentThumbsDiv>
              <img src={thumbsImage} alt="좋아요 이미지" />
            </Styled.CommentThumbsDiv>
            <Styled.CommentThumbsCountDiv>1</Styled.CommentThumbsCountDiv>
            <Styled.CommentReviewWriteDiv
              active={isRecommentClicked.toString()}
            >
              <button onClick={handleRecommentClick}>
                <span>답글 달기</span>
              </button>
            </Styled.CommentReviewWriteDiv>
          </Styled.CommentReviewDiv>
        </div>
      </div>
      <div>
        {isRecommentClicked && (
          <Styled.BookReviewWriteForm>
            <Styled.BookReviewUserProfileDiv>
              {/* <img src="" alt="프로필 이미지" /> */}
            </Styled.BookReviewUserProfileDiv>
            <CommentForm
              onSubmit={onSubmit}
              onCancel={onCancel}
              commentInputRef={commentInputRef}
            />
          </Styled.BookReviewWriteForm>
        )}
      </div>
    </Styled.CommentCardDiv>
  );
};

export default CommentCard;
