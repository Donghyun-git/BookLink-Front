const initialState = {
  email: '',
  name: '',
  nickname: '',
  isLoggedIn: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH/LOGIN': {
      console.log('action.type');
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
        nickname: action.payload.nickname,
        isLoggedIn: action.payload.isLoggedIn,
      };
    }
    case 'AUTH/LOGOUT': {
      return {
        ...state,
        email: '',
        name: '',
        nickname: '',
        isLoggedIn: action.payload.isLoggedIn,
      };
    }
    default: {
      return state;
    }
  }
};
