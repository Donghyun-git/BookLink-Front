import { createAction } from 'redux-actions';

const BOOKS_REQUEST = 'BOOKS/REQUEST';
const BOOKS_SUCCESS = 'BOOKS/SUCCESS';
const BOOKS_FAILURE = 'BOOKS/FAILURE';
const BOOKS_FILTER = 'BOOKS/FILTER';
const BOOKS_SEARCH = 'BOOKS/SEARCH';
const BOOKS_SORT_CURRENT = 'BOOKS/SORT_CURRENT';
const BOOKS_SORT_LIKES = 'BOOKS/SORT_LIKES';

export const REQUEST = createAction(BOOKS_REQUEST);

export const SUCCESS = createAction(BOOKS_SUCCESS, (books) => ({
  books,
}));

export const FAILURE = createAction(BOOKS_FAILURE, (error) => ({
  error,
}));

//[ 카테고리만 검색했을 경우 ]
export const FILTER = createAction(BOOKS_FILTER, (books) => ({
  books,
}));

//검색하면 api 요청 한번 더 날리는구나.
export const SEARCH = createAction(BOOKS_SEARCH, (search) => ({
  search,
}));

export const SORT_CURRENT = createAction(BOOKS_SORT_CURRENT);
export const SORT_LIKES = createAction(BOOKS_SORT_LIKES);
