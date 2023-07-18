import * as bookActions from '../../redux/actions/bookActions';
import * as bookService from '../apis/booksService';

export const getAllBooks = () => async (dispatch) => {
  dispatch(bookActions.REQUEST());

  try {
    const { data } = await bookService.getAllBooks();

    dispatch(bookActions.SUCCESS([...data.data.item]));
  } catch (error) {
    dispatch(bookActions.FAILURE('데이터를 받아오는데 에러 발생'));
  }
};
