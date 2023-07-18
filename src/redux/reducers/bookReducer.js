const initialState = {
  books: [],
  isLoading: false,
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
    case 'BOOKS/SUCCESS': {
      return {
        ...state,
        books: action.payload.payload,
        isLoading: false,
      };
    }
    case 'BOOKS/FAILURE': {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
