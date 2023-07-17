import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import * as Styled from './Styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { communitiesRegisterSchema } from '../../../validators/communityValidator';
import {
  freeRegister,
  bookClubRegister,
} from '../../../apis/communitiesService';

const CommunitiesRegisterForm = () => {
  const [bookReportClick, setBookReportClick] = useState(false);
  const [bookClubsReportClick, setBookClubsReportClick] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(communitiesRegisterSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    console.log(data);
    const { title, content, location } = data;
    if (location) {
      const data1 = await bookClubRegister(title, location, content);
      console.log(data1);
    } else {
      const data1 = await freeRegister(title, content);
      console.log(data1);
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
              <input type="search" placeholder="도서명 검색하세요" />
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
