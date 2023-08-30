import styled from 'styled-components';

export const RentInfoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RentInfoImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30.14286rem;
  height: 30.14286rem;
  padding: 2.21429rem;
  border-radius: 0.85714rem;
  background: lightgray;

  img {
    width: 70%;
    object-fit: cover;
    box-shadow: -2px -2px 12px 0px rgba(0, 0, 0, 0.15);
  }
`;

// book_rating: '중급';
// book_status: '표지에 흠이 조금 있지만 괜찮아요.';
// cover: 'https://image.aladin.co.kr/product/30590/78/cover/k662830816_2.jpg';
// isbn: '9791191056556';
// max_date: 14;
// min_date: 7;
// publisher: '인플루엔셜(주)';
// recommendation: '20대에 심한 우울증을 겪으며 정신적 붕괴를 경험했던 작가 매트 헤이그는 ‘살아야 할 이유’에 대해서 끊임없이 고민해왔고, 신작 장편소설 《미드나잇 라이브러리》에서 자신만의 해답을 구한다.';
// record_cnt: 8;
// rent_available_cnt: 8;
// rent_location: '서울특별시 영등포구 신길동';
// rent_method: '만나서 계좌이체해요~~';
// rental_fee: 1500;
// renting_cnt: 0;
// title: '미드나잇 라이브러리';

export const RentInfoContentBody = styled.div`
  display: flex;
  height: 32.57143rem;
  padding: 1.01429rem 0.85714rem 1.01429rem 1rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #fff;
  border-radius: 0.85714rem;

  ul {
    li {
      width: 17.78571rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      &:last-child {
        div {
          text-align: center;
          span {
            color: #000;
            font-size: 1.14286rem;
            font-weight: 500;
          }
        }
      }

      .book-title {
        color: #000;
        font-size: 1.28571rem;
        font-weight: 500;
        margin-top: 0.86rem;
        width: 17.78571rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .book-author {
        margin-top: 0.57rem;
      }

      .book-writer {
        margin: 0.86rem 0 0.57rem 0;
        font-size: 1.28571rem;
      }
      .book-quality {
        margin: 0.86rem 0;
        color: #000;
        font-size: 1.28571rem;
        font-weight: 500;
        text-align: center;
      }

      h3,
      h4 {
        display: inline-block;
        color: #767676;
        font-size: 1rem;
        font-weight: 400;
      }

      span {
        margin-left: 0.57rem;
        color: #000;
        font-size: 1rem;
        font-weight: 400;
      }
      div {
        color: #000;
        font-size: 1.14286rem;
        font-weight: 500;
      }
      p {
        width: 17.78571rem;
        height: auto; /* 높이 자동 조절 */
        overflow: hidden;
        color: #000;
        display: -webkit-box;
        -webkit-line-clamp: 3; /* 세 줄까지만 보이도록 */
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        white-space: normal; /* 줄바꿈을 허용 */
        font-family: Noto Sans KR;
        font-size: 0.85714rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }

  div {
    &:last-child {
      button {
        border-radius: 0.57143rem;
        border: 1px solid #d9d9d9;
        background-color: #fff;
        transition: all 0.1s ease;

        span {
          display: inline-block;
          color: #000;
          padding: 0.86rem 6.04rem;
          text-align: center;
          font-size: 1.14286rem;
          font-weight: 500;
        }

        &:hover {
          background-color: #e7ecf1;
        }
      }
    }
  }
`;

export const NotFoundImage = styled.div`
  min-height: 40rem;
`;

export const RentInfoStatusContent = styled.div`
  h2 {
    color: #000;
    font-size: 2.28571rem;
    font-weight: 500;
    margin-bottom: 0.86rem;
  }

  h3 {
    color: #000;
    font-size: 1.71429rem;
    font-weight: 500;
    margin-bottom: 1.71rem;
  }
`;

export const BookStatusDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.71429rem;

  h4 {
    color: #000;
    font-size: 1.71429rem;
    font-weight: 500;
    margin-top: 2.57rem;
  }
`;

export const OtherRentInfo = styled.div`
  margin-top: 4.31129rem;
`;

export const OtherRentInfoTitle = styled.div`
  display: flex;
  align-items: center;

  h3 {
    font-size: 1.71429rem;
    font-weight: 500;
  }
  span {
    margin-left: 0.86rem;
    color: #767676;
    text-align: right;
    font-weight: 500;
    cursor: pointer;
  }
`;

export const RentCardDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.71rem;
`;
