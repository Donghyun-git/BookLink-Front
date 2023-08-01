import * as Styled from './Styled';

const CommentForm = ({
  commentInputRef,
  onSubmit,
  onCancel,
  parentId,
  handleRecommentClick,
}) => {
  return (
    <Styled.BookReviewCommentDiv>
      <label htmlFor="comment" className="hidden">
        댓글
      </label>
      <input
        type="text"
        id="comment"
        ref={commentInputRef}
        placeholder="댓글을 입력해주세요."
      />
      <div>
        <span onClick={onCancel}>취소</span>
        <button onClick={onSubmit(parentId, handleRecommentClick)}>
          <span className="write">작성하기</span>
        </button>
      </div>
    </Styled.BookReviewCommentDiv>
  );
};

export default CommentForm;
