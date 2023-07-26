import { useState } from 'react';
import CommentCard from './CommentCard';
import * as Styled from './Styled';

const CommentList = ({ onSubmit, onCancel, commentInputRef, comments }) => {
  const commentMap = {};
  const [showRepliesCount, setShowRepliesCount] = useState(12);

  //배열복사 안해서 개삽질...ㅠㅠ
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

  const newComments = Object.values(commentMap);

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
