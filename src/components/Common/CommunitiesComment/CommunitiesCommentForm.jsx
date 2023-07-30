import { /*useState, useEffect,*/ useRef } from 'react';
import { useParams } from 'react-router-dom';
import * as Styled from './Styled';
import { bookClubsCommentRegister } from '../../../lib/apis/communities/comment/communitiesCommentService';
import CommunitiesCommentCardForm from './CommuntiesCommentCard/CommunitiesCommentCardForm';

const CommunitiesCommentForm = ({ replies }) => {
  const { id } = useParams();
  const commentRef = useRef(null);

  const onCommentPost = async (e) => {
    if (e.key === 'Enter') {
      const content = commentRef.current.value;
      const { data } = await bookClubsCommentRegister(content, id, 0);
      console.log(data);
    }
  };

  return (
    <>
      <Styled.CommentTag>
        댓글 {replies && <span>{replies.length}</span>}
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
