//import { useState, useEffect } from 'react';
import TopicContentForm from '../../../Common/TopicContent/TopicContentForm';
import CityDistrictSelectorForm from '../../../Common/CityDistrictSelector/CityDistrictSelectorForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { communitiesRegisterSchema } from '../../../../validators/communityValidator';
import { bookClubsModify } from '../../../../lib/apis/communities/modify/communitiesModifyService';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import {
  MainContainerDiv,
  MainContentsDiv,
} from '../../../../styles/globalStyled';
const BookClubsModifyForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { title, location, content } = useLocation().state;
  const [city, district] = location.split(' ');
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
    const { title, content } = data;
    const data1 = await bookClubsModify(title, content, id);
    console.log(data1);
    navigate(`/communities/book-clubs/${id}`);
  };

  const onContentsHandler = (value) => {
    console.log(typeof value);
    setValue('content', value === '<p><br></p>' ? '' : value);
    trigger('content');
  };

  return (
    <MainContainerDiv>
      <MainContentsDiv>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <CityDistrictSelectorForm
              city={city}
              district={district}
              setValue={setValue}
            />
            <TopicContentForm
              title={title}
              content={content}
              register={register}
              onContentsHandler={onContentsHandler}
            />
          </div>
        </form>
      </MainContentsDiv>
    </MainContainerDiv>
  );
};

export default BookClubsModifyForm;
