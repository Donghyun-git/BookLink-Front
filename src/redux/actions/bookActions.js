import { createAction } from 'redux-actions';

const BOOKS_REQUEST = 'BOOKS/REQUEST';
const BOOKS_SUCCESS = 'BOOKS/SUCCESS';
const BOOKS_FAILURE = 'BOOKS/FAILURE';
const BOOKS_FILTER = 'BOOKS/FILTER';

export const REQUEST = createAction(BOOKS_REQUEST);

export const SUCCESS = createAction(BOOKS_SUCCESS, (books) => ({
  payload: books,
}));

export const FAILURE = createAction(BOOKS_FAILURE, (error) => ({
  payload: error,
}));

export const FILTER = createAction(BOOKS_FILTER, (books) => ({
  payload: books,
}));
