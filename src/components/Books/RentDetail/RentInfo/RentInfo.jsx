import { Fragment } from 'react';
import { dateFormatYear } from '../../../../utils/date';
import { generateUniqueKey } from '../../../../utils/generateUnique';
import RentCard from '../../../Card/RentCard';
import * as Styled from './Styled';

const RentInfo = ({
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
            <button>
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
          <h3> 이 책을 소장한 다른 책방 </h3> <span>더보기</span>
        </Styled.OtherRentInfoTitle>
        <Styled.RentCardDiv>
          <RentCard
            name={'길동아'}
            distance={3.6}
            quality={'상'}
            rentFee={'2,500'}
            rentMonth={4}
            location={'서울시 청담동'}
          />

          <RentCard
            name={'길동아'}
            distance={3.6}
            quality={'상'}
            rentFee={'2,500'}
            rentMonth={4}
            location={'서울시 청담동'}
          />
        </Styled.RentCardDiv>
      </Styled.OtherRentInfo>
    </>
  );
};

export default RentInfo;
