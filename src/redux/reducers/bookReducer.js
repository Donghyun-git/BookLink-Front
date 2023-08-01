const initialState = {
  initial: [],
  books: [],
  isCurrent: true,
  isLikes: false,
  isLoading: true,
  error: null,
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS/REQUEST': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'BOOKS/FILTER': {
      return {
        ...state,
        initial: action.payload.books,
        books: action.payload.books,
        isLoading: false,
      };
    }
    case 'BOOKS/SUCCESS': {
      return {
        ...state,
        initial: action.payload.books,
        books: action.payload.books,
        isLoading: false,
        isCurrent: true,
        isLikes: false,
      };
    }
    case 'BOOKS/FAILURE': {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }

    case 'BOOKS/SEARCH': {
      return {
        ...state,
        initial: action.payload.search,
        books: action.payload.search,
        isLoading: false,
      };
    }

    case 'BOOKS/SORT_CURRENT': {
      return {
        ...state,
        isCurrent: true,
        isLikes: false,
      };
    }

    case 'BOOKS/SORT_LIKES': {
      const sortedLikes = [...state.books].sort((a, b) => {
        return b.like_cnt - a.like_cnt;
      });

      return {
        ...state,
        books: sortedLikes,
        isCurrent: false,
        isLikes: true,
      };
    }

    case 'ERROR': {
      return {
        ...state,
        error: true,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
