import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { bookReducer } from './bookReducer';

const rootReducer = combineReducers({
  USER: authReducer,
  BOOK: bookReducer,
});

export default rootReducer;
