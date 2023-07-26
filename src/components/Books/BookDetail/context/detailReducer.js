const initialState = [];

export const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_COMMENTS': {
      return {
        ...state,
        value: action.payload,
      };
    }
    default:
      return state;
  }
};
