import * as bookActions from '../../redux/actions/bookActions';
import * as bookService from '../apis/booksService';

//[ 전체 책 조회 ]
export const getAllBooks = () => async (dispatch) => {
  dispatch(bookActions.REQUEST());

  try {
    const { data } = await bookService.getAllBooks();

    dispatch(bookActions.SUCCESS(data.data.item));
  } catch (error) {
    dispatch(bookActions.FAILURE('데이터를 받아오는데 에러 발생'));
  }
};

//[ 카테고리만 검색했을 경우 ]
export const getCategoryBooks = (CID) => async (dispatch) => {
  dispatch(bookActions.REQUEST());

  try {
    const { data } = await bookService.getCategoryBooks(CID);

    dispatch(bookActions.FILTER(data.data.item));
  } catch (error) {
    dispatch(bookActions.FAILURE('데이터를 받아오는데 에러 발생'));
  }
};

//[ 카테고리와 키워드 둘다 존재할 경우 ]
export const getSearchBooks = (keyword, CID) => async (dispatch) => {
  console.log('@@@@@@@', keyword);

  dispatch(bookActions.REQUEST());

  try {
    const { data } = await bookService.getSearchBooks(keyword, CID);

    dispatch(bookActions.SEARCH(data.data.item));
  } catch (error) {
    dispatch(bookActions.FAILURE('데이터 검색 실패'));
  }
};
