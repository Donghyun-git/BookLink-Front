import { useState } from 'react';
import {
  MainContainerDiv,
  MainContentsDiv,
} from '../../../styles/globalStyled';
import * as Styled from './Styled';
import BookSearchForm from '../../Common/Search/BookSearch/BookSearchForm';
import { useParams, useLocation } from 'react-router-dom';
import { bookRegister } from '../../../lib/apis/booksService';
import { useForm } from 'react-hook-form';
const BookRegisterForm = () => {
  const { register, handleSubmit, setValue } = useForm({
    mode: 'onChange',
  });
  //const { isbn } = useParams();
  const location = useLocation();
  console.log(location);
  const { bookInfo } = location.state;
  console.log(bookInfo);
  /* 
  const { isbn13, cover, book_title, authors, publisher, pud_date } =
      bookInfo;
 "isbn13": "9791165269937",
  "title": "예비 매3비 : 매일 지문 3개씩 푸는 비문학 독서 기출 (개정 9판) -  준비편 ( 짝꿍)",
  "author": "안인숙 (지은이)",
  "publisher": "키출판사",
  "pubDate": "2023-06-15",
  "description": "『예비 매3비』는 『매3비』의 구성 및 체제를 따르되 ‘준비편(입문편)’의 성격에 맞게 좋은 문제와 잘 다듬어진 지문이면서 수능 기출보다 쉬운 지문과 문제들로 구성하였다.",
  "cover": "https://image.aladin.co.kr/product/31831/98/cover/k712833127_1.jpg",
  "categoryName": "고등학교참고서",*/
  const [rentStatus, setRentStatus] = useState(true);
  const [bookRating, setBookRating] = useState(false);
  const [imgUrls, setImgUrls] = useState([]);
  const onRentSelectHandler = (e) => {
    console.log(e.target.id);
    if (e.target.id) {
      setRentStatus(true);
      setValue('rent_signal', true);
    } else {
      setRentStatus(false);
      setValue('rent_signal', false);
    }
  };
  const onRatingHandler = (e) => {
    console.log(e.target.innerText);
    setBookRating(e.target.innerText);
    setValue('book_rating', e.target.innerText);
  };
  const onSubmit = async (data) => {
    const { image, ...bookDto } = data;
    bookDto.min_date = Number(bookDto.min_date);
    bookDto.max_date = Number(bookDto.max_date);
    bookDto.rental_fee = Number(bookDto.rental_fee);
    const { data: data1 } = await bookRegister(image, bookDto);
    console.log(data1);
  };

  const onImgHandler = (e) => {
    const files = e.target.files;
    for (let file of files) {
      const image = URL.createObjectURL(file);
      console.log(image);
      setImgUrls((state) => [...state, image]);
    }
    setValue('image', files[0]);
  };

  /*{
    image
    "book_title": "불편한 편의점 2 (단풍 에디션)", ok
    "authors": "김호연 (지은이)",             ok
    "pud_date": "2022-08-10",               ok
    "isbn": "9791161571188",              ok
    "price_sales": 12600,                   ok
    "cover": "https://image.aladin.co.kr/product/29045/74/cover/k192836746_2.jpg", ok
    "category_name": "국내도서>소설/시/희곡",          ok
    "publisher": "나무옆의자",                        ok
    "recommendation": "출간 후 1년이 넘도록 독자의 사랑을 받으며 베스트셀러 상위권을 지키고 있는 소설, 김호연 작가의 『불편한 편의점』이 그 두 번째 이야기로 다시 찾아왔다. 청파동 골목의 작은 편의점을 무대로 힘겨운 시대를 살아가는 우리 이웃들의 삶을 따뜻하고 유쾌하게 그렸다.", ok
    "rent_signal": "True",                            ok
    "book_rating": "최상급",                          ok
    "book_status": "새책처럼 깨끗합니다.",             ok
    "rental_fee": 2500,                               ok
    "min_date": 7,                                    ok
    "max_date": 21,                                   ok
    "rent_location": "서울특별시 영등포구 신길동",     ok
    "rent_method": "만나서 현금으로 주시면 됩니다~~~"  ok
    
    }
    사용자가 대여 신청 가능하게 설정할 경우 rent_signal을 True
    사용자가 대여 신청 불가하게 설정할 경우 rent_signal을 False*/
  return (
    <MainContainerDiv>
      <MainContentsDiv>
        <Styled.MainTag>읽은 도서 기록하기</Styled.MainTag>
        <form onSubmit={handleSubmit(onSubmit)}>
          <BookSearchForm bookInfo={bookInfo} setValue={setValue} />
          <Styled.Tag>추천사 작성하기</Styled.Tag>
          <Styled.Recommend
            placeholder="회원님만의 추천사를 작성해보세요"
            {...register('recommendation')}
          />
          <Styled.RegisterChoice>
            <Styled.Tag>책을 소장하고 계신가요?</Styled.Tag>
            <p>
              대여 신청 받기를 선택하고 대여 정보를 입력하시면 이 책이 필요한
              이용자에게 대여료를 받고 책을 대여해 줄 수 있습니다.
            </p>
            <p>
              대여 정보를 입력하고 내 주변에서 책이 필요한 사람들에게 책을
              대여해 보세요!
            </p>
            <Styled.Choice onClick={onRentSelectHandler}>
              <Styled.Card id="true">
                대여신청받기
                {/*<p>대여신청받기</p>
                <p>
                  다른 이용자가 대여료를 지불하고 대여를 신청할 수 있습니다.
                </p>*/}
              </Styled.Card>
              <Styled.Card id="false">
                대여신청받지않기
                {/*<p>대여신청받지않기</p>
                <p>다른 이용자에게 대여 신청을 받을 수 없습니다.</p>*/}
              </Styled.Card>
            </Styled.Choice>
          </Styled.RegisterChoice>
          <Styled.Tag>도서 품질</Styled.Tag>
          <Styled.Choice onClick={onRatingHandler}>
            <Styled.Card id="최상급">최상급</Styled.Card>
            <Styled.Card id="상급">상급</Styled.Card>
            <Styled.Card id="중상급">중상급</Styled.Card>
            <Styled.Card id="중급">중급</Styled.Card>
            <Styled.Card id="하급">하급</Styled.Card>
            <Styled.Card id="최하급">최하급</Styled.Card>
          </Styled.Choice>
          <Styled.Tag>도서 참고사진 등록하기</Styled.Tag>
          <Styled.PhotoBtn for="img">사진 등록하기</Styled.PhotoBtn>
          <Styled.PhotoInput
            type="file"
            multiple
            name="img"
            id="img"
            {...register('image')}
            onChange={onImgHandler}
          />
          <Styled.Upload>
            {imgUrls.map((imgUrl) => {
              return <Styled.img key={imgUrl} src={imgUrl} />;
            })}
          </Styled.Upload>
          <Styled.Tag>도서 상태 설명하기</Styled.Tag>
          <Styled.Contents
            placeholder="도서의 구매일자, 상태를 설명해주세요"
            {...register('book_status')}
          />
          <Styled.RentalFee>
            <Styled.Tag>대여료</Styled.Tag>
            <Styled.RentalPriceInput {...register('rental_fee')} />
          </Styled.RentalFee>
          <Styled.RentalTime>
            <Styled.Tag>대여기간</Styled.Tag>
            <Styled.Select {...register('min_date')}>
              <option>14</option>
            </Styled.Select>
            <Styled.Select {...register('max_date')}>
              <option>84</option>
            </Styled.Select>
          </Styled.RentalTime>
          <Styled.Tag>대여장소</Styled.Tag>
          <Styled.Address {...register('rent_location')} />
          <button type="button">변경하기</button>
          <Styled.Tag>대여방법 작성</Styled.Tag>
          <Styled.Contents
            placeholder="다른 사람들이 도서를 대여할 수 있도록 대여 안내 글을 작성해 보세요! 상세히 작성할수록 대여를 보다 원활히 진행할 수 있습니다."
            {...register('rent_method')}
          />
          <Styled.RegisterBtn type="submit">도서 기록하기</Styled.RegisterBtn>
        </form>
      </MainContentsDiv>
    </MainContainerDiv>
  );
};

export default BookRegisterForm;
