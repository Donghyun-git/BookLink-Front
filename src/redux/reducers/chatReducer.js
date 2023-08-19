const initialState = {
  isChatIn: false,
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHATIN': {
      const { isChatIn } = action.payload;
      return {
        ...state,
        isChatIn,
      };
    }
    case 'CHATOUT': {
      const { isChatIn } = action.payload;
      return {
        ...state,
        isChatIn,
      };
    }
    default:
      return state;
  }
};
