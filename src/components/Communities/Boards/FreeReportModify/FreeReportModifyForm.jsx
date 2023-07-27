//import React from 'react'
//import WebEditorForm from '../../../Common/WebEditor/WebEditorForm';
//import TopicInputForm from '../../../Common/Input/TopicInputForm';
import TopicContentForm from '../../../Common/TopicContent/TopicContentForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { communitiesRegisterSchema } from '../../../../validators/communityValidator';
import { freesModify } from '../../../../lib/apis/communities/modify/communitiesModify';
import { useNavigate, useParams } from 'react-router-dom';
import {
  MainContainerDiv,
  MainContentsDiv,
} from '../../../../styles/globalStyled';
const FreeReportModifyForm = () => {
  console.log(1);
  const { id } = useParams();
  const navigate = useNavigate();
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
    const { title, content } = data;
    const { status } = await freesModify(title, content, id);
    console.log(status);
    navigate(`/communities/boards/free-report/${id}`);
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
            <TopicContentForm
              register={register}
              onContentsHandler={onContentsHandler}
            />
            <button type="submit">수정하기</button>
          </div>
        </form>
      </MainContentsDiv>
    </MainContainerDiv>
  );
};

export default FreeReportModifyForm;
