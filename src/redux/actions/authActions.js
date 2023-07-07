import { createAction } from 'redux-actions';

const LOGIN = 'AUTH/LOGIN';
const LOGOUT = 'AUTH/LOGOUT';

export const login = createAction(LOGIN);
export const logout = createAction(LOGOUT);
