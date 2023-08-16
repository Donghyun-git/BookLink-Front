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
  const [click, setClick] = useState([1, 0, 0]); // [자유글,독후감,독서모임] 선택 순서 1일때:선택 0일때:선택x
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
      isbn,
      cover,
      book_title,
      authors,
      publisher,
      pud_date,
    } = data;
    if (click[2]) {
      const location = city + ' ' + district;
      console.log(location);
      const data1 = await bookClubRegister(title, content, location);
      console.log(data1);
      navigate('/communities/book-clubs');
    } else if (click[1]) {
      console.log(cover);
      const data1 = await reportRegister(
        title,
        content,
        isbn,
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
    console.log(e.target.checked);
    if (e.target.value === '2') {
      setClick(() => [0, 0, 1]);
    } else if (e.target.value === '1') {
      setClick(() => [0, 1, 0]);
    } else {
      setClick(() => [1, 0, 0]);
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
        <Styled.SelectDiv>
          <Styled.SelectContainerDiv isClicked={click[0] === 1}>
            <Styled.SelectContentDiv>
              <Styled.Input
                type="radio"
                name="writing"
                value="0"
                onChange={onSelectHandler}
                checked={click[0] === 1}
              />
              <label htmlFor="0">자유글 작성하기</label>
              <p>자유롭게 글을 작성해보세요</p>
            </Styled.SelectContentDiv>
          </Styled.SelectContainerDiv>
          <Styled.SelectContainerDiv isClicked={click[1] === 1}>
            <Styled.SelectContentDiv>
              <Styled.Input
                type="radio"
                name="writing"
                value="1"
                onChange={onSelectHandler}
                checked={click[1] === 1}
              />
              <label htmlFor="1">독후감 작성하기</label>
              <p>책에 대한 독후감을 작성하여 의견을 나눠보세요!</p>
            </Styled.SelectContentDiv>
          </Styled.SelectContainerDiv>
          <Styled.SelectContainerDiv isClicked={click[2] === 1}>
            <Styled.SelectContentDiv>
              <Styled.Input
                type="radio"
                name="writing"
                value="2"
                onChange={onSelectHandler}
                checked={click[2] === 1}
              />
              <label htmlFor="2">독서 모임 모집글 작성하기</label>
              <p>게시글을 통해 직접 독서 모임을 만들어보세요!</p>
            </Styled.SelectContentDiv>
          </Styled.SelectContainerDiv>
        </Styled.SelectDiv>

        <form onSubmit={handleSubmit(onSubmit)}>
          {click[1] > 0 && (
            <div>
              <BookSearchForm setValue={setValue} />
            </div>
          )}
          {click[2] > 0 && (
            <div>
              <CityDistrictSelectorForm setValue={setValue} />
              {/*errors.location && <p>{errors.location.message}</p>*/}
            </div>
          )}
          <TopicContentForm
            register={register}
            onContentsHandler={onContentsHandler}
          />
        </form>
      </Styled.MainContentsDiv>
    </Styled.MainContainerDiv>
  );
};
export default CommunitiesRegisterForm;
