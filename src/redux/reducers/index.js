import { combineReducers } from 'redux';
import { authReducer } from './authReducer';

const rootReducer = combineReducers({
  USER: authReducer,
});

export default rootReducer;
