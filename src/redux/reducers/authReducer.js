const initialState = {
  email: '',
  name: '',
  nickname: '',
  isLoggedIn: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH/LOGIN': {
      const { email, name, nickname, isLoggedIn } = action.payload;
      return {
        ...state,
        email,
        name,
        nickname,
        isLoggedIn,
      };
    }
    case 'AUTH/LOGOUT': {
      const { isLoggedIn } = action.payload;
      return {
        ...state,
        email: '',
        name: '',
        nickname: '',
        isLoggedIn,
      };
    }
    default: {
      return state;
    }
  }
};
