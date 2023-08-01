import { useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';
import * as Styled from './Styled';
import {
  bookClubsCommentRegister,
  bookReportCommentRegister,
  freeReportCommentRegister,
} from '../../../lib/apis/communities/comment/communitiesCommentService';
import CommunitiesCommentCardForm from './CommuntiesCommentCard/CommunitiesCommentCardForm';
import { CommunitiesDetailContext } from '../../../context/communitiesDetailContext';
const CommunitiesCommentForm = () => {
  const { id } = useParams();
  const commentRef = useRef(null);
  const { info, setInfo } = useContext(CommunitiesDetailContext);
  const { category, replies, reply_cnt } = info;
  /*{
    "id": 24,
    "parent_id": 24,
    "writer": "SCY",
    "content": "수정된 댓글",
    "date": "2023-07-27T01:31:02.980184",
    "image": "https://soccerquick.s3.ap-northeast-2.amazonaws.com/1689834239634.png",
    "like_cnt": 0,
    "sub_reply_cnt": 0,
    "isLiked": false,
    "isUpdated": true
    }
        "data": {
        "replyId": 1,
        "date": "2023-07-25T01:11:54.7072866",
        "content": "부모댓글",
        "writer": "SCY",
        "image": "https://soccerquick.s3.ap-northeast-2.amazonaws.com/1689834239634.png"
    }*/
  const onCommentPost = async (e) => {
    let data1;
    if (e.key === 'Enter') {
      const Content = commentRef.current.value;
      if (category === '독서 모임') {
        const { data } = await bookClubsCommentRegister(Content, id, 0);
        data1 = data;
      } else if (category === '독후감') {
        const { data } = await bookReportCommentRegister(Content, id, 0);
        data1 = data;
      } else {
        const { data } = await freeReportCommentRegister(Content, id, 0);
        data1 = data;
      }
      console.log(data1);
      const { replyId, date, content, writer, image } = data1;
      const replies = [
        {
          id: replyId,
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
      setInfo({ ...info, reply_cnt: reply_cnt + 1, replies });
    }
  };

  return (
    <>
      <Styled.CommentTag>
        댓글 <span>{reply_cnt}</span>
      </Styled.CommentTag>
      <Styled.CommentPostForm>
        <Styled.WriterImg>
          <img src="https://soccerquick.s3.ap-northeast-2.amazonaws.com/1689834239634.png" />
        </Styled.WriterImg>
        <Styled.CommentInputForm
          placeholder="댓글 작성하기"
          ref={commentRef}
          onKeyDown={onCommentPost}
        />
      </Styled.CommentPostForm>
      <Styled.CommentSortForm>
        <span>공감순</span>
        <span>최신순</span>
      </Styled.CommentSortForm>
      <Styled.CommentListForm>
        {replies &&
          replies
            .filter(({ id, parent_id }) => id === parent_id)
            .map(
              ({
                id,
                image,
                writer,
                date,
                isLiked,
                isUpdated,
                content,
                like_cnt,
                sub_reply_cnt,
              }) => (
                <CommunitiesCommentCardForm
                  key={id}
                  replyId={id}
                  image={image}
                  writer={writer}
                  date={date}
                  isLiked={isLiked}
                  isUpdated={isUpdated}
                  content={content}
                  like_cnt={like_cnt}
                  sub_reply_cnt={sub_reply_cnt}
                />
              )
            )}
      </Styled.CommentListForm>
    </>
  );
};

export default CommunitiesCommentForm;
