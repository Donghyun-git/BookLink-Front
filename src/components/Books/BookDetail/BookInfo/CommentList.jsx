import { useState } from 'react';
import { useDetailContext } from '../../../../context/BookDetailContext/detailContext';
import CommentCard from './CommentCard';
import * as Styled from './Styled';

const CommentList = ({
  onSubmit,
  onCancel,
  commentInputRef,
  isClickedLiked,
  isClickedDate,
}) => {
  const { state } = useDetailContext();
  const comments = state.book.replies;

  const commentMap = {};
  const [showRepliesCount, setShowRepliesCount] = useState(12);

  [...comments].reverse().forEach((comment) => {
    const { id, parent_id: parentId } = comment;

    if (id === parentId) {
      commentMap[parentId] = { ...comment, children: [] };
    }
    if (id !== parentId) {
      if (commentMap[parentId]) {
        commentMap[parentId].children.unshift(comment);
      }
    }
  });

  let newComments = Object.values(commentMap);

  if (isClickedLiked) {
    newComments = [...newComments].sort((a, b) => {
      return a.like_cnt - b.like_cnt;
    });
  }

  if (isClickedDate) {
    newComments = [...newComments].sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
  }

  return (
    <div>
      {[...newComments]
        .reverse()
        .slice(0, showRepliesCount)
        .map((comment) => {
          const { id, parent_id: parentId } = comment;
          return (
            <CommentCard
              key={id}
              onSubmit={onSubmit}
              onCancel={onCancel}
              commentInputRef={commentInputRef}
              comment={comment}
              parentId={parentId}
            />
          );
        })}
      {newComments.length > showRepliesCount && (
        <Styled.MoreCommentButton
          onClick={() => setShowRepliesCount((prevCount) => prevCount + 12)}
        >
          <div>더보기</div>
        </Styled.MoreCommentButton>
      )}
    </div>
  );
};

export default CommentList;
