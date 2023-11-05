import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { dateFormatYear } from '../../../../utils/date';
import { generateUniqueKey } from '../../../../utils/generateUnique';
import RentCard from '../../../Card/RentCard';
import { useGetRentMoreQuery } from '../../../../services/rent/useGetRentMoreQuery';
import * as Styled from './Styled';

const RentInfo = ({
  isbn,
  cover,
  createdTime,
  title,
  authors,
  publisher,
  writer,
  recommendation,
  bookRating,
  imageUrls,
  bookStatus,
}) => {
  const navigate = useNavigate();

  const { data } = useGetRentMoreQuery({
    title,
  });

  const filteredSameWriter = data
    ?.filter((book) => book.writer !== writer)
    .slice(0, 2);

  const handleBookDetailMove = (isbn) => {
    navigate(`/books/${isbn}`);
    return;
  };

  return (
    <>
      <Styled.RentInfoContent>
        <Styled.RentInfoImageDiv>
          <img src={cover} alt="book_image" />
        </Styled.RentInfoImageDiv>
        <Styled.RentInfoContentBody>
          <ul>
            <li>
              <h4>소장 도서 등록일</h4>
              <span>{dateFormatYear(createdTime)}</span>
            </li>
            <li>
              <h3 className="book-title">{title}</h3>
            </li>
            <li>
              <h4 className="book-author">저자</h4>
              <span>{authors}</span>
            </li>
            <li>
              <h4>출판</h4>
              <span>{publisher}</span>
            </li>
            <li>
              <div className="book-writer">{writer} 님의 추천사</div>
              <p>{recommendation}</p>
            </li>
            <li>
              <h4 className="book-quality">도서 품질</h4>
              <div>
                <span>{bookRating}</span>
              </div>
            </li>
          </ul>
          <div>
            <button onClick={() => handleBookDetailMove(isbn)}>
              <span>도서정보 보기</span>
            </button>
          </div>
        </Styled.RentInfoContentBody>
      </Styled.RentInfoContent>

      <Styled.RentInfoStatusContent>
        <div>
          <h2>대여 정보</h2>
        </div>
        <div>
          <h3>도서 사진</h3>
        </div>
        {imageUrls.length > 0 ? (
          <div>
            {imageUrls.map((imageSrc) => (
              <Fragment key={generateUniqueKey()}>
                <img
                  src={imageSrc}
                  alt="rent_info"
                  style={{ width: '54.85714rem', objectFit: 'cover' }}
                />
              </Fragment>
            ))}
          </div>
        ) : (
          <Styled.NotFoundImage>
            이미지가 존재하지 않아요..
          </Styled.NotFoundImage>
        )}

        <Styled.BookStatusDiv>
          <h4>도서 상태 설명</h4>
          <p>{bookStatus}</p>
        </Styled.BookStatusDiv>
      </Styled.RentInfoStatusContent>

      <Styled.OtherRentInfo>
        <Styled.OtherRentInfoTitle>
          <h3> 이 책을 소장한 다른 곳의 책방 </h3>
        </Styled.OtherRentInfoTitle>
        <Styled.RentCardDiv>
          {filteredSameWriter.length > 0 ? (
            filteredSameWriter?.map((book) => (
              <RentCard
                key={book.rent_id}
                rent_id={book.rent_id}
                writer={book.writer}
                book_rating={book.book_rating}
                rental_fee={book.rental_fee}
                max_date={book.max_date}
                rent_location={book.rent_location}
              />
            ))
          ) : (
            <p>다른 책방이 없어요. </p>
          )}
        </Styled.RentCardDiv>
      </Styled.OtherRentInfo>
    </>
  );
};

export default RentInfo;
