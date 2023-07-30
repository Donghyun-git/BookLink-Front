import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import * as Styled from './Styled';
import threePointUrl from '../../../../images/threePoints.png';
import Thumbs from '../../../../images/thumbs.svg';
import LikeThumbs from '../../../../images/liked_thumbs.svg';
import DownToggle from '../../../../images/down_toggle.svg';
//import UpToggle from '../../../../images/up_toggle.svg';
import { getDateDistance } from '../../../../utils/date';
import {
  bookClubsCommentDelete,
  bookClubsCommentModify,
  bookClubsCommentLike,
} from '../../../../lib/apis/communities/comment/communitiesCommentService';
const CommunitiesCommentCardForm = ({
  replyId,
  image,
  writer,
  date,
  isLiked,
  content,
  like_cnt,
  sub_reply_cnt,
}) => {
  const contentRef = useRef(null);
  const [contentEditable, setContentEditable] = useState(false);
  const { id } = useParams();

  const [likeStatus, setLikeStatus] = useState(isLiked);
  const [likeNum, setLikeNum] = useState(like_cnt);

  const onCommentModify = async (e) => {
    if (e.key === 'Enter') {
      setContentEditable(!contentEditable);
      const content = contentRef.current.innerText;
      const { data } = await bookClubsCommentModify(content, id, replyId);
      console.log(data);
    }
  };
  const onCommentDelete = async () => {
    const { data } = await bookClubsCommentDelete(id, replyId);
    const { like_cnt } = data;
    console.log(like_cnt);
    setLikeNum(like_cnt);
    setLikeStatus(!likeStatus);
  };

  const onCommentLike = async () => {
    console.log(id, replyId);
    const { status } = await bookClubsCommentLike(id, replyId);
    console.log(status);
  };

  useEffect(() => {
    setLikeNum(like_cnt);
    setLikeStatus(isLiked);
  }, [like_cnt]);

  return (
    <div>
      <Styled.CommentForm>
        <Styled.WriterImg>
          <img src={image} />
        </Styled.WriterImg>
        <Styled.CommentInfo>
          <Styled.CommentInfoHeader>
            <Styled.CommentInfoHeaderLeft>
              <span>{writer}</span>
              <span>{getDateDistance(date)} 전</span>
            </Styled.CommentInfoHeaderLeft>
            <Styled.CommentInfoHeaderRight>
              <div>
                <Styled.Button
                  onClick={() => {
                    setContentEditable(!contentEditable);
                  }}
                >
                  수정
                </Styled.Button>
                <Styled.Button onClick={onCommentDelete}>
                  삭제하기
                </Styled.Button>
              </div>
              <img src={threePointUrl} />
            </Styled.CommentInfoHeaderRight>
          </Styled.CommentInfoHeader>
          <Styled.CommentInfoMain
            contentEditable={contentEditable}
            ref={contentRef}
            onKeyDown={onCommentModify}
          >
            {content}
          </Styled.CommentInfoMain>
          <Styled.CommentInfoFooter>
            <img src={isLiked ? LikeThumbs : Thumbs} onClick={onCommentLike} />
            <span>{likeNum}</span>
            {sub_reply_cnt > 0 && (
              <>
                <img src={DownToggle} />
                <span>{sub_reply_cnt}</span>
              </>
            )}
          </Styled.CommentInfoFooter>
        </Styled.CommentInfo>
      </Styled.CommentForm>
    </div>
  );
};

export default CommunitiesCommentCardForm;
