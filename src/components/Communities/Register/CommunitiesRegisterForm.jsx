import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import * as Styled from './Styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { communitiesRegisterSchema } from '../../../validators/communityValidator';
import { useNavigate } from 'react-router-dom';
import {
  freeRegister,
  bookClubRegister,
  reportRegister,
  bookSearch,
} from '../../../apis/communitiesService';

const CommunitiesRegisterForm = () => {
  const navigate = useNavigate();
  const [bookReportClick, setBookReportClick] = useState(false);
  const [bookClubsReportClick, setBookClubsReportClick] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(communitiesRegisterSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    console.log(data);
    const {
      title,
      content,
      location,
      book_title,
      authors,
      publisher,
      pud_date,
    } = data;
    if (location) {
      const data1 = await bookClubRegister(title, content, location);
      console.log(data1);
      navigate('/communities/book-clubs');
    } else if (book_title && authors && publisher && pud_date) {
      const data1 = await reportRegister(
        title,
        content,
        book_title,
        authors,
        publisher,
        pud_date
      );
      console.log(data1);
      navigate('/communities/boards');
    } else {
      const data1 = await freeRegister(title, content);
      console.log(data1);
      navigate('/communities/boards');
    }
  };

  const onSelectHandler = (e) => {
    console.log(e.target.checked);
    if (e.target.value == 'bookReport') {
      setBookReportClick(true);
      setBookClubsReportClick(false);
    } else if (e.target.value == 'bookClubsReport') {
      setBookClubsReportClick(true);
      setBookReportClick(false);
    } else {
      setBookReportClick(false);
      setBookClubsReportClick(false);
    }
  };
  const onBookInfoHandler = async (e) => {
    console.log(e.target.value);
    const { item } = await bookSearch(e.target.value);
    if (item) {
      const { title, author, pubDate, publisher } = item[0];
      console.log(item[0]);
      setValue('book_title', title);
      setValue('authors', author);
      setValue('publisher', publisher);
      setValue('pud_date', pubDate);
    }
  };
  const onContentsHandler = (value) => {
    console.log(typeof value);
    setValue('content', value === '<p><br></p>' ? '' : value);
    trigger('content');
  };
  return (
    <Styled.MainContainerDiv>
      <Styled.MainContentsDiv>
        <div>
          <div>
            <input
              type="radio"
              name="writing"
              value="freeReport"
              onChange={onSelectHandler}
            />
            <label htmlFor="freeReport">자유글 작성하기</label>
          </div>
          <div>
            <input
              type="radio"
              name="writing"
              value="bookReport"
              onChange={onSelectHandler}
            />
            <label htmlFor="bookReport">독후감 작성하기</label>
          </div>
          <div>
            <input
              type="radio"
              name="writing"
              value="bookClubsReport"
              onChange={onSelectHandler}
            />
            <label htmlFor="bookClubsReport">독서 모임 모집글 작성하기</label>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {bookReportClick && (
            <div>
              <h4>도서명</h4>{' '}
              <input
                type="search"
                placeholder="도서명 검색하세요"
                onChange={onBookInfoHandler}
              />
              <p>{getValues('book_title')}</p>
              <p>{getValues('authors')}</p>
              <p>{getValues('publisher')}</p>
              <p>{getValues('pud_date')}</p>
            </div>
          )}
          {bookClubsReportClick && (
            <div>
              <h4>모임위치</h4> <input type="text" {...register('location')} />
              {errors.location && <p>{errors.location.message}</p>}
            </div>
          )}
          <h2>제목</h2>
          <Styled.Title type="text" {...register('title')} />
          {errors.title && <p>{errors.title.message}</p>}
          <h2>내용</h2>
          <ReactQuill onChange={onContentsHandler} />
          <button type="submit">게시글 등록하기</button>
        </form>
      </Styled.MainContentsDiv>
    </Styled.MainContainerDiv>
  );
};
export default CommunitiesRegisterForm;
