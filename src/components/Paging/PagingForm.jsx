import Pagination from 'react-js-pagination';
import './Paging.css';

const PagingForm = ({
  activePage,
  itemsCountPerPage,
  totalItemsCount,
  onChange,
}) => {
  console.log(activePage, itemsCountPerPage, totalItemsCount, onChange);
  return (
    <Pagination
      activePage={activePage}
      itemsCountPerPage={itemsCountPerPage}
      totalItemsCount={totalItemsCount}
      pageRangeDisplayed={10}
      prevPageText={'‹'}
      nextPageText={'›'}
      onChange={onChange}
    />
  );
};

export default PagingForm;
