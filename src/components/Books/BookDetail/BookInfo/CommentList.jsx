import CommentCard from './CommentCard';

const CommentList = ({ onSubmit, onCancel, commentInputRef, comments }) => {
  const commentMap = {};

  comments.reverse().forEach((comment) => {
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
      {[...newComments].reverse().map((comment) => {
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
    </div>
  );
};

export default CommentList;
