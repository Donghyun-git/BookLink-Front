export const initialState = {
  book: [],
  isLoading: true,
  error: false,
  errorMessage: null,
};

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BOOK': {
      return {
        book: action.payload,
        isLoading: false,
      };
    }
    case 'TOGGLE_BOOK_LIKE': {
      const book = state.book.item[0];
      const updatedBook =
        book.liked === true
          ? {
              ...book,
              like_cnt: book.like_cnt - 1,
              liked: false,
            }
          : {
              ...book,
              like_cnt: book.like_cnt + 1,
              liked: true,
            };

      return {
        ...state,
        book: {
          ...state.book,
          item: [updatedBook],
        },
      };
    }

    case 'TOGGLE_COMMENT_LIKE': {
      const { replies } = state.book;
      const updatedReplies = replies.map((comment) => {
        return comment.id === action.payload.id
          ? {
              ...comment,
              like_cnt: comment.isLiked
                ? comment.like_cnt - 1
                : comment.like_cnt + 1,
              isLiked: !comment.isLiked,
            }
          : comment;
      });

      return {
        ...state,
        book: {
          ...state.book,
          replies: updatedReplies,
        },
      };
    }

    case 'ADD_COMMENT': {
      return {
        ...state,
        book: {
          ...state.book,
          replies: action.payload,
        },
      };
    }

    case 'UPDATE_COMMENT': {
      const { replies } = state.book;
      const updateReplies = replies.map((comment) =>
        comment.id === action.payload.id
          ? {
              ...comment,
              content: action.payload.content,
            }
          : comment
      );

      return {
        ...state,
        book: {
          ...state.book,
          replies: updateReplies,
        },
      };
    }

    case 'DELETE_COMMENT': {
      const { replies } = state.book;
      const updatedReplies = replies.filter(
        (comment) => action.payload.id !== comment.id
      );
      return {
        ...state,
        book: {
          ...state.book,
          replies: updatedReplies,
        },
      };
    }

    case 'ERROR': {
      return {
        ...state,
        error: true,
      };
    }

    default:
      return state;
  }
};
