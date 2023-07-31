import * as bookActions from '../../redux/actions/bookActions';
import * as bookService from '../apis/booksService';

export const getAllBooks = (category) => async (dispatch) => {
  dispatch(bookActions.REQUEST());

  try {
    const { data } = await bookService.getAllBooks(category);

    dispatch(bookActions.SUCCESS([...data.data.item]));
  } catch (error) {
    dispatch(bookActions.FAILURE('데이터를 받아오는데 에러 발생'));
  }
};

export const getCategoryBooks = (CID) => async (dispatch) => {
  dispatch(bookActions.REQUEST());

  try {
    const { data } = await bookService.getCategoryBooks(CID);

    dispatch(bookActions.FILTER([...data.data.item]));
  } catch (error) {
    dispatch(bookActions.FAILURE('데이터를 받아오는데 에러 발생'));
  }
};

export const getSearchBooks = (keyword, CID) => async (dispatch) => {
  console.log('@@@@@@@', keyword);

  dispatch(bookActions.REQUEST());

  try {
    const { data } = await bookService.getSearchBooks(keyword, CID);

    dispatch(bookActions.SEARCH([...data.data.item]));
  } catch (error) {
    dispatch(bookActions.FAILURE('데이터 검색 실패'));
  }
};
