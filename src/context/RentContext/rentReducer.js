export const initialState = {
  rents: [],
  detail: {},
  isRentsLoading: true,
  isDetailLoading: true,
  error: null,
};

export const rentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RENT/GETDATA': {
      return {
        ...state,
        rents: action.payload,
        isRentsLoading: false,
        isDetailLoading: true,
      };
    }

    case 'RENT/DETAIL': {
      return {
        ...state,
        detail: action.payload,
        isRentsLoading: true,
        isDetailLoading: false,
      };
    }

    case 'RENT/ERROR': {
      return {
        ...state,
        error: action.payload,
        isRentsLoading: false,
        isDetailLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};
