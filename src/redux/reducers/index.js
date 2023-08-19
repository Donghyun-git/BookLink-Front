import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { bookReducer } from './bookReducer';
import { chatReducer } from './chatReducer';

const rootReducer = combineReducers({
  USER: authReducer,
  BOOK: bookReducer,
  CHAT: chatReducer,
});

export default rootReducer;
