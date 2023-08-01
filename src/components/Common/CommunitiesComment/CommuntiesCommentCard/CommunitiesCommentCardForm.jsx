import { useState, useEffect, useRef, useContext } from 'react';
import { useParams } from 'react-router-dom';
import * as Styled from './Styled';
import threePointUrl from '../../../../images/threePoints.png';
import Thumbs from '../../../../images/thumbs.svg';
import LikeThumbs from '../../../../images/liked_thumbs.svg';
import DownToggle from '../../../../images/down_toggle.svg';
import UpToggle from '../../../../images/up_toggle.svg';
import { getDateDistance } from '../../../../utils/date';
import {
  bookClubsCommentRegister,
  bookClubsCommentDelete,
  bookClubsCommentModify,
  bookClubsCommentLike,
  bookReportCommentRegister,
  bookReportCommentDelete,
  bookReportCommentModify,
  bookReportCommentLike,
  freeReportCommentRegister,
  freeReportCommentDelete,
  freeReportCommentModify,
  freeReportCommentLike,
} from '../../../../lib/apis/communities/comment/communitiesCommentService';
import { CommunitiesDetailContext } from '../../../../context/communitiesDetailContext';
const CommunitiesCommentCardForm = ({
  replyId,
  image,
  writer,
  date,
  isLiked,
  /*isUpdated,*/
  content,
  like_cnt,
  sub_reply_cnt,
}) => {
  const { info, setInfo } = useContext(CommunitiesDetailContext);
  const { category, replies, reply_cnt } = info;
  const contentRef = useRef(null);
  const replyRef = useRef(null);
  const { id } = useParams();

  const [contentEditable, setContentEditable] = useState(false);
  const [replyStatus, setReplyStatus] = useState(false);
  const [replyNum, setReplyNum] = useState(sub_reply_cnt);
  const [toggleStatus, setToggleStatus] = useState(false);
  const [likeStatus, setLikeStatus] = useState(isLiked);
  const [likeNum, setLikeNum] = useState(like_cnt);

  const onCommentModify = async (e) => {
    let data1;
    if (e.key === 'Enter') {
      setContentEditable(!contentEditable);
      const content = contentRef.current.innerText;
      if (category === '독서 모임') {
        const { data } = await bookClubsCommentModify(content, id, replyId);
        data1 = data;
      } else if (category === '독후감') {
        const { data } = await bookReportCommentModify(content, id, replyId);
        data1 = data;
      } else {
        const { data } = await freeReportCommentModify(content, id, replyId);
        data1 = data;
      }
      console.log(data1);
    }
  };
  const onCommentDelete = async () => {
    if (category === '독서 모임') {
      const { status } = await bookClubsCommentDelete(id, replyId);
      console.log(status);
    } else if (category === '독후감') {
      const { status } = await bookReportCommentDelete(id, replyId);
      console.log(status);
    } else {
      const { status } = await freeReportCommentDelete(id, replyId);
      console.log(status);
    }
    const replies = info.replies.filter(({ id }) => id !== replyId);
    setInfo({ ...info, reply_cnt: reply_cnt - 1 - replyNum, replies });
  };

  const onCommentLike = async () => {
    let data1;
    if (category === '독서 모임') {
      const { data } = await bookClubsCommentLike(id, replyId);
      const { like_cnt } = data;
      data1 = like_cnt;
    } else if (category === '독후감') {
      const { data } = await bookReportCommentLike(id, replyId);
      const { like_cnt } = data;
      data1 = like_cnt;
    } else {
      const { data } = await freeReportCommentLike(id, replyId);
      const { like_cnt } = data;
      data1 = like_cnt;
    }
    setLikeNum(data1);
    setLikeStatus(!likeStatus);
  };
  const onReplyPost = async (e) => {
    let data1;
    if (e.key === 'Enter') {
      const Content = replyRef.current.value;
      if (category === '독서 모임') {
        const { data } = await bookClubsCommentRegister(Content, id, replyId);
        data1 = data;
      } else if (category === '독후감') {
        const { data } = await bookReportCommentRegister(Content, id, replyId);
        data1 = data;
      } else {
        const { data } = await freeReportCommentRegister(Content, id, replyId);
        data1 = data;
      }

      const { replyId: subReplyId, date, content, writer, image } = data1;
      const replies = [
        {
          id: subReplyId,
          parent_id: replyId,
          writer,
          content,
          date,
          image,
          like_cnt: 0,
          sub_reply_cnt: 0,
          isLiked: false,
          isUpdated: false,
        },
        ...info.replies,
      ];
      setReplyNum(replyNum + 1);
      setInfo({ ...info, reply_cnt: reply_cnt + 1, replies });
    }
  };
  //console.log(replies);
  console.log(toggleStatus);
  useEffect(() => {
    setLikeNum(like_cnt);
    setLikeStatus(isLiked);
  }, [like_cnt]);

  return (
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
              <Styled.Button onClick={onCommentDelete}>삭제하기</Styled.Button>
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
          <Styled.CommentInfoFooterTop>
            <img
              src={likeStatus ? LikeThumbs : Thumbs}
              onClick={onCommentLike}
            />
            <span>{likeNum}</span>
            <span
              onClick={() => {
                setReplyStatus(!replyStatus);
              }}
            >
              답글 달기
            </span>
          </Styled.CommentInfoFooterTop>
          {replyNum > 0 && (
            <>
              <img
                src={toggleStatus ? UpToggle : DownToggle}
                onClick={() => setToggleStatus(!toggleStatus)}
              />
              <span>답글 {replyNum}개</span>
            </>
          )}
          {toggleStatus && (
            <>
              {replies
                .filter(
                  ({ id, parent_id }) =>
                    id !== parent_id && parent_id === replyId
                )
                .map(
                  ({
                    id,
                    image,
                    writer,
                    isLiked,
                    isUpdated,
                    date,
                    content,
                    like_cnt,
                    sub_reply_cnt,
                  }) => {
                    return (
                      <CommunitiesCommentCardForm
                        key={id}
                        replyId={id}
                        image={image}
                        writer={writer}
                        isLiked={isLiked}
                        isUpdated={isUpdated}
                        date={date}
                        content={content}
                        like_cnt={like_cnt}
                        sub_reply_cnt={sub_reply_cnt}
                      />
                    );
                  }
                )}
            </>
          )}
          {replyStatus && (
            <Styled.ReplyPostForm>
              <Styled.ReplyWriterImg>
                <img src="https://soccerquick.s3.ap-northeast-2.amazonaws.com/1689834239634.png" />
              </Styled.ReplyWriterImg>
              <Styled.ReplyInputForm ref={replyRef} onKeyDown={onReplyPost} />
            </Styled.ReplyPostForm>
          )}
        </Styled.CommentInfoFooter>
      </Styled.CommentInfo>
    </Styled.CommentForm>
  );
};

export default CommunitiesCommentCardForm;
