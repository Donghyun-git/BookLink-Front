//import React from 'react'
//import WebEditorForm from '../../../Common/WebEditor/WebEditorForm';
//import TopicInputForm from '../../../Common/Input/TopicInputForm';
import TopicContentForm from '../../../Common/TopicContent/TopicContentForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { communitiesRegisterSchema } from '../../../../validators/communityValidator';
import { bookReportsModify } from '../../../../lib/apis/communities/modify/communitiesModify';
import { useNavigate, useParams } from 'react-router-dom';
import {
  MainContainerDiv,
  MainContentsDiv,
} from '../../../../styles/globalStyled';
const BookReportModifyForm = () => {
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
    const { status } = await bookReportsModify(title, content, id);
    console.log(status);
    navigate(`/communities/boards/book-report/${id}`);
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
          <TopicContentForm
            register={register}
            onContentsHandler={onContentsHandler}
          />
          <button type="submit">수정하기</button>
        </form>
      </MainContentsDiv>
    </MainContainerDiv>
  );
};

export default BookReportModifyForm;
