import { useState /*useEffect*/ } from 'react';
import * as Styled from './Styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { communitiesRegisterSchema } from '../../../validators/communityValidator';
import { useNavigate } from 'react-router-dom';
import {
  freeRegister,
  bookClubRegister,
  reportRegister,
} from '../../../lib/apis/communities/register/communitiesRegisterService';
import TopicContentForm from '../../Common/TopicContent/TopicContentForm';
import CityDistrictSelectorForm from '../../Common/CityDistrictSelector/CityDistrictSelectorForm';
import BookSearchForm from '../../Common/Search/BookSearch/BookSearchForm';
const CommunitiesRegisterForm = () => {
  const navigate = useNavigate();
  const [bookReportClick, setBookReportClick] = useState(false);
  const [bookClubsReportClick, setBookClubsReportClick] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    //formState: { errors },
  } = useForm({
    resolver: yupResolver(communitiesRegisterSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    console.log(data);
    const {
      title,
      content,
      city,
      district,
      book_image: cover,
      book_title,
      authors,
      publisher,
      pud_date,
    } = data;
    if (bookClubsReportClick) {
      const location = city + ' ' + district;
      console.log(location);
      const data1 = await bookClubRegister(title, content, location);
      console.log(data1);
      navigate('/communities/book-clubs');
    } else if (bookReportClick) {
      const data1 = await reportRegister(
        title,
        content,
        cover,
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
          <Styled.SelectContainerDiv>
            <Styled.SelectDiv>
              <input
                type="radio"
                name="writing"
                value="freeReport"
                onChange={onSelectHandler}
              />
              <label htmlFor="freeReport">자유글 작성하기</label>
              <p>자유롭게 글을 작성해보세요</p>
            </Styled.SelectDiv>
          </Styled.SelectContainerDiv>
          <div>
            <Styled.SelectContainerDiv>
              <Styled.SelectDiv>
                <input
                  type="radio"
                  name="writing"
                  value="bookReport"
                  onChange={onSelectHandler}
                />
                <label htmlFor="bookReport">독후감 작성하기</label>
                <p>책에 대한 독후감을 작성하여 의견을 나눠보세요!</p>
              </Styled.SelectDiv>
            </Styled.SelectContainerDiv>
          </div>
          <div>
            <Styled.SelectContainerDiv>
              <Styled.SelectDiv>
                <input
                  type="radio"
                  name="writing"
                  value="bookClubsReport"
                  onChange={onSelectHandler}
                />
                <label htmlFor="bookClubsReport">
                  독서 모임 모집글 작성하기
                </label>
                <p>게시글을 통해 직접 독서 모임을 만들어보세요!</p>
              </Styled.SelectDiv>
            </Styled.SelectContainerDiv>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {bookReportClick && (
            <div>
              <BookSearchForm setValue={setValue} />
            </div>
          )}
          {bookClubsReportClick && (
            <div>
              <CityDistrictSelectorForm setValue={setValue} />
              {/*errors.location && <p>{errors.location.message}</p>*/}
            </div>
          )}
          <TopicContentForm
            register={register}
            onContentsHandler={onContentsHandler}
          />
          <Styled.ButtonDiv>
            <button type="submit">게시글 등록하기</button>
          </Styled.ButtonDiv>
        </form>
      </Styled.MainContentsDiv>
    </Styled.MainContainerDiv>
  );
};
export default CommunitiesRegisterForm;
