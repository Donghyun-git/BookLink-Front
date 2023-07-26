//import React from 'react'
import WebEditorForm from '../../../Common/WebEditor/WebEditorForm';
import TopicInputForm from '../../../Common/Input/TopicInputForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { communitiesRegisterSchema } from '../../../../validators/communityValidator';
const FreeReportDetailForm = () => {
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
  };
  const onContentsHandler = (value) => {
    console.log(typeof value);
    setValue('content', value === '<p><br></p>' ? '' : value);
    trigger('content');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TopicInputForm register={register} />
        {errors.title && <p>{errors.title.message}</p>}
        <WebEditorForm onContentsHandler={onContentsHandler} />
        <button type="submit">게시글 등록하기</button>
      </div>
    </form>
  );
};

export default FreeReportDetailForm;
