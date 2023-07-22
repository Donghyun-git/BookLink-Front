import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllBooks } from '../lib/thunk/bookRequestThunk';
import Books from '../components/Books/Books';

const BookContainer = ({ isBooks, currentCategory }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return <Books isBooks={isBooks} currentCategory={currentCategory} />;
};

export default BookContainer;
