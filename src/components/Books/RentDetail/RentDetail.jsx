import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useRentContext } from '../../../context/RentContext/rentContext';
import { getRentDetail } from '../../../lib/apis/rentService';
import RentInfo from './RentInfo/RentInfo';
import AsideLeft from './RentAside/AsideLeft';
import AsideRight from './RentAside/AsideRight';
import Loading from '../../Loading/Loading';
import * as Styled from './Styled';

const RentDetail = () => {
  const { id } = useParams();
  const { state, dispatch } = useRentContext();

  const { isDetailLoading, detail } = state;

  const bookRecordDtoList = detail.bookRecordDtoList || [];

  const imageUrls = detail.image_urls || [];
  const {
    cover,
    book_rating: bookRating,
    book_status: bookStatus,
    max_date: maxDate,
    min_date: minDate,
    publisher,
    recommendation,
    rent_location: rentLocation,
    rent_method: rentMethod,
    rental_fee: rentalFee,
    created_time: createdTime,
    title,
    authors,
    writer,
  } = detail;

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getRentDetail(id);
        dispatch({ type: 'RENT/DETAIL', payload: data.data });
      } catch (error) {
        console.error(error);

        dispatch({
          type: 'RENT/ERROR',
          payload: '데이터 받아오는데에 실패했어요',
        });
      }
    })();
  }, [dispatch, id]);

  console.log(detail);

  return (
    <Styled.RentDetailContainer>
      {isDetailLoading ? (
        <Loading />
      ) : (
        <>
          <AsideLeft writer={writer} cardList={bookRecordDtoList} />
          <Styled.RentDetailCotent>
            <RentInfo
              cover={cover}
              createdTime={createdTime}
              title={title}
              authors={authors}
              publisher={publisher}
              writer={writer}
              recommendation={recommendation}
              bookRating={bookRating}
              imageUrls={imageUrls}
              bookStatus={bookStatus}
            />
          </Styled.RentDetailCotent>
          <AsideRight
            title={title}
            rentalFee={rentalFee}
            rentLocation={rentLocation}
            rentMethod={rentMethod}
            maxDate={maxDate}
            minDate={minDate}
          />
        </>
      )}
    </Styled.RentDetailContainer>
  );
};

export default RentDetail;
