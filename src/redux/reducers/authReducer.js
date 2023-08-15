const initialState = {
  email: '',
  name: '',
  nickname: '',
  address: '',
  isLoggedIn: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH/LOGIN': {
      const { email, name, nickname, address, isLoggedIn } = action.payload;
      return {
        ...state,
        email,
        name,
        nickname,
        address,
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
        address: '',
        isLoggedIn,
      };
    }
    default: {
      return state;
    }
  }
};
