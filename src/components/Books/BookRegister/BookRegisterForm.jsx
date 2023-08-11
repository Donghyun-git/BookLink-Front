import React from 'react';
import {
  MainContainerDiv,
  MainContentsDiv,
} from '../../../styles/globalStyled';
import * as Styled from './Styled';
import BookSearchForm from '../../Common/Search/BookSearch/BookSearchForm';
import { useParams } from 'react-router-dom';
const BookRegisterForm = () => {
  const { isbn } = useParams();
  /*{
    "title": "불편한 편의점 2 (단풍 에디션)",
    "author": "김호연 (지은이)",
    "pud_date": "2022-08-10",
    "isbn13": "9791161571188",
    "price_sales": 12600,
    "cover": "https://image.aladin.co.kr/product/29045/74/cover/k192836746_2.jpg",
    "category_name": "국내도서>소설/시/희곡",
    "publisher": "나무옆의자",
    "recommendation": "출간 후 1년이 넘도록 독자의 사랑을 받으며 베스트셀러 상위권을 지키고 있는 소설, 김호연 작가의 『불편한 편의점』이 그 두 번째 이야기로 다시 찾아왔다. 청파동 골목의 작은 편의점을 무대로 힘겨운 시대를 살아가는 우리 이웃들의 삶을 따뜻하고 유쾌하게 그렸다.",
    "rent_signal": "True",
    "book_rating": "최상급",
    "book_status": "새책처럼 깨끗합니다.",
    "rental_fee": 2500,
    "min_date": 7,
    "max_date": 21,
    "rent_location": "서울특별시 영등포구 신길동",
    "rent_method": "만나서 현금으로 주시면 됩니다~~~"
    
    }
    사용자가 대여 신청 가능하게 설정할 경우 rent_signal을 True
    사용자가 대여 신청 불가하게 설정할 경우 rent_signal을 False*/
  return (
    <MainContainerDiv>
      <MainContentsDiv>
        <Styled.MainTag>읽은 도서 기록하기</Styled.MainTag>
        <BookSearchForm />
        <Styled.Tag>추천사 작성하기</Styled.Tag>
        <Styled.Recommend placeholder="회원님만의 추천사를 작성해보세요" />
        <Styled.RegisterChoice>
          <Styled.Tag>책을 소장하고 계신가요?</Styled.Tag>
          <p>
            대여 신청 받기를 선택하고 대여 정보를 입력하시면 이 책이 필요한
            이용자에게 대여료를 받고 책을 대여해 줄 수 있습니다.
          </p>
          <p>
            대여 정보를 입력하고 내 주변에서 책이 필요한 사람들에게 책을 대여해
            보세요!
          </p>
          <Styled.Choice>
            <Styled.Card>
              <p>대여신청받기</p>
              <p>다른 이용자가 대여료를 지불하고 대여를 신청할 수 있습니다.</p>
            </Styled.Card>
            <Styled.Card>
              <p>대여신청받지않기</p>
              <p>다른 이용자에게 대여 신청을 받을 수 없습니다.</p>
            </Styled.Card>
          </Styled.Choice>
        </Styled.RegisterChoice>
        <Styled.Tag>도서 품질</Styled.Tag>
        <Styled.Choice>
          <Styled.Card></Styled.Card>
          <Styled.Card></Styled.Card>
          <Styled.Card></Styled.Card>
          <Styled.Card></Styled.Card>
          <Styled.Card></Styled.Card>
          <Styled.Card></Styled.Card>
        </Styled.Choice>
        <Styled.Tag>도서 참고사진 등록하기</Styled.Tag>
        <Styled.PhotoBtn for="img">사진 등록하기</Styled.PhotoBtn>
        <Styled.PhotoInput type="file" multiple name="img" id="img" />
        <Styled.Upload></Styled.Upload>
        <Styled.Tag>도서 상태 설명하기</Styled.Tag>
        <Styled.Contents placeholder="도서의 구매일자, 상태를 설명해주세요" />
        <Styled.RentalFee>
          <Styled.Tag>대여료</Styled.Tag>
          <Styled.RentalPriceInput />
        </Styled.RentalFee>
        <Styled.RentalTime>
          <Styled.Tag>대여기간</Styled.Tag>
          <Styled.Select>
            <option>14일</option>
          </Styled.Select>
          <Styled.Select>
            <option>3개월</option>
          </Styled.Select>
        </Styled.RentalTime>
        <Styled.Tag>대여장소</Styled.Tag>
        <Styled.Address />
        <button type="button">변경하기</button>
        <Styled.Tag>대여방법 작성</Styled.Tag>
        <Styled.Contents placeholder="다른 사람들이 도서를 대여할 수 있도록 대여 안내 글을 작성해 보세요! 상세히 작성할수록 대여를 보다 원활히 진행할 수 있습니다." />
        <Styled.RegisterBtn type="submit">도서 기록하기</Styled.RegisterBtn>
      </MainContentsDiv>
    </MainContainerDiv>
  );
};

export default BookRegisterForm;
