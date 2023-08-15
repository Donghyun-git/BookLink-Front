import { useState, useEffect } from 'react';
import {
  MainContainerDiv,
  MainContentsDiv,
} from '../../../styles/globalStyled';
import * as Styled from './Styled';
import BookSearchForm from '../../Common/Search/BookSearch/BookSearchForm';
import AddressSearchForm from '../../AddressSearch/AddressSearchForm';
import { useLocation } from 'react-router-dom';
import { bookRegister } from '../../../lib/apis/booksService';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
const BookRegisterForm = () => {
  const { register, handleSubmit, setValue, reset } = useForm({
    mode: 'onChange',
  });
  const address = useSelector((state) => state.USER.address);
  const location = useLocation();
  const { bookInfo } = location.state;
  console.log(bookInfo);
  const [rentStatus, setRentStatus] = useState(true);
  const [bookRating, setBookRating] = useState(false);
  const [imgUrls, setImgUrls] = useState([]);
  const [imgFiles, setImgFiles] = useState([]);
  const [addressClick, setAddressClick] = useState(false);

  useEffect(() => {
    reset({ ...bookInfo, rent_signal: true, rent_location: address });
  }, []);

  const onSubmit = async (data) => {
    console.log(data);
    const { images, ...bookDto } = data;
    bookDto.min_date = Number(bookDto.min_date);
    bookDto.max_date = Number(bookDto.max_date);
    bookDto.rental_fee = Number(bookDto.rental_fee);
    const { data: data1 } = await bookRegister(images, bookDto);
    console.log(data1);
  };

  const onRentSelectHandler = (e) => {
    if (e.target.closest('li').id === 'true') {
      setRentStatus(true);
      setValue('rent_signal', true);
    } else {
      setRentStatus(false);
      setValue('rent_signal', false);
    }
  };

  const onRatingHandler = (e) => {
    setBookRating(e.target.closest('li').id);
    setValue('book_rating', e.target.closest('li').id);
  };

  const onImgHandler = (e) => {
    const files = e.target.files;
    const fileList = [];
    for (let file of files) {
      fileList.push(file);
      const image = URL.createObjectURL(file);
      setImgUrls((state) => [...state, image]);
    }
    console.log(...fileList);
    setImgFiles((state) => [...state, ...fileList]);
    setValue('images', [...imgFiles, ...fileList]);
  };
  console.log(imgUrls);
  console.log(imgFiles);
  const handleAddressClick = (address) => {
    setValue('rent_location', address);
    setAddressClick(false);
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
            <Styled.Message>
              대여 신청 받기를 선택하고 대여 정보를 입력하시면 이 책이 필요한
              이용자에게 대여료를 받고 책을 대여해 줄 수 있습니다. 대여 정보를
              입력하고 내 주변에서 책이 필요한 사람들에게 책을 대여해 보세요!
            </Styled.Message>
            <Styled.Choice onClick={onRentSelectHandler}>
              <Styled.Card id="true" isClicked={rentStatus === true}>
                <Styled.Title>대여신청받기</Styled.Title>
                <Styled.Content>
                  다른 이용자가 대여료를 지불하고 대여를 신청할 수 있습니다.
                </Styled.Content>
              </Styled.Card>
              <Styled.Card id="false" isClicked={rentStatus === false}>
                <Styled.Title>대여신청받지않기</Styled.Title>
                <Styled.Content>
                  다른 이용자에게 대여 신청을 받을 수 없습니다.
                </Styled.Content>
              </Styled.Card>
            </Styled.Choice>
          </Styled.RegisterChoice>
          {rentStatus && (
            <>
              <Styled.Tag>도서 품질</Styled.Tag>
              <Styled.Choice onClick={onRatingHandler}>
                <Styled.Card id="최상급" isClicked={bookRating === '최상급'}>
                  <Styled.Title>최상급</Styled.Title>
                  <Styled.Content>
                    거의 새 책 수준으로 완벽한 상태입니다.
                  </Styled.Content>
                </Styled.Card>
                <Styled.Card id="상급" isClicked={bookRating === '상급'}>
                  <Styled.Title>상급</Styled.Title>
                  <Styled.Content>
                    매우 깨끗하며 사용감이 거의 없습니다.
                  </Styled.Content>
                </Styled.Card>
                <Styled.Card id="중상급" isClicked={bookRating === '중상급'}>
                  <Styled.Title>중상급</Styled.Title>
                  <Styled.Content>
                    약간의 사용감이 있지만 전반적으로 깔끔합니다.
                  </Styled.Content>
                </Styled.Card>
                <Styled.Card id="중급" isClicked={bookRating === '중급'}>
                  <Styled.Title>중급</Styled.Title>
                  <Styled.Content>
                    보통 사용한 흔적이 있으나 내용에는 큰 지장이 없습니다.
                  </Styled.Content>
                </Styled.Card>
                <Styled.Card id="하급" isClicked={bookRating === '하급'}>
                  <Styled.Title>하급</Styled.Title>
                  <Styled.Content>
                    사용감이 많이 느껴지며 외관에 손상이 있습니다.
                  </Styled.Content>
                </Styled.Card>
                <Styled.Card id="최하급" isClicked={bookRating === '최하급'}>
                  <Styled.Title>최하급</Styled.Title>
                  <Styled.Content>
                    심한 사용감으로 내외부 모두 손상이 있습니다.
                  </Styled.Content>
                </Styled.Card>
              </Styled.Choice>
              <Styled.Tag>도서 참고사진 등록하기</Styled.Tag>
              <Styled.PhotoBtn for="img">사진 등록하기</Styled.PhotoBtn>
              <Styled.PhotoInput
                type="file"
                name="img"
                id="img"
                multiple
                {...register('images')}
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
                <Styled.RentalTag>대여료</Styled.RentalTag>
                <Styled.RentalPriceInput
                  type="number"
                  min="1000"
                  step="100"
                  {...register('rental_fee')}
                />
                원
              </Styled.RentalFee>
              <Styled.RentalTime>
                <Styled.RentalTag>대여기간</Styled.RentalTag>
                <Styled.Select {...register('min_date')}>
                  <option>14</option>
                </Styled.Select>
                <Styled.Select {...register('max_date')}>
                  <option>84</option>
                </Styled.Select>
              </Styled.RentalTime>
              <Styled.Tag>대여장소</Styled.Tag>
              <Styled.Address {...register('rent_location')} />
              <button
                type="button"
                onClick={() => setAddressClick((state) => !state)}
              >
                변경하기
              </button>
              {addressClick && (
                <AddressSearchForm onAddressClick={handleAddressClick} />
              )}
              <Styled.Tag>대여방법 작성</Styled.Tag>
              <Styled.Contents
                placeholder="다른 사람들이 도서를 대여할 수 있도록 대여 안내 글을 작성해 보세요! 상세히 작성할수록 대여를 보다 원활히 진행할 수 있습니다."
                {...register('rent_method')}
              />
            </>
          )}

          <Styled.RegisterBtn type="submit">도서 기록하기</Styled.RegisterBtn>
        </form>
      </MainContentsDiv>
    </MainContainerDiv>
  );
};

export default BookRegisterForm;
