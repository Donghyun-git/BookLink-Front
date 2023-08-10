export const initialState = [];

export const mypageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MYPAGE/MYBOOKLINK': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
