//import React from 'react'
//import WebEditorForm from '../../../Common/WebEditor/WebEditorForm';
//import TopicInputForm from '../../../Common/Input/TopicInputForm';
//import { useForm } from 'react-hook-form';
//import { yupResolver } from '@hookform/resolvers/yup';
//import { communitiesRegisterSchema } from '../../../../validators/communityValidator';
import { useState, useEffect } from 'react';
import { freesDetail } from '../../../../lib/apis/communities/detail/communitiesDetailService';
import { dateFormat } from '../../../../utils/date';
import { useNavigate, useParams } from 'react-router-dom';
const FreeReportDetailForm = () => {
  /*const {
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
  };*/
  const [info, SetInfo] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const getDetail = async () => {
    const { data } = await freesDetail(Number(id));
    console.log(data);
    SetInfo(data);
  };
  useEffect(() => {
    getDetail();
  }, []);
  const {
    title,
    writer,
    category,
    localDateTime,
    view_cnt,
    reply_cnt,
    like_cnt,
    content,
  } = info;
  return (
    <>
      <p>{title}</p>
      <p>{writer}</p>
      <p>{category}</p>
      <p>{dateFormat(localDateTime)}</p>
      <p>{view_cnt}</p>
      <p>{like_cnt}</p>
      <p>{reply_cnt}</p>
      <button
        type="button"
        onClick={() => {
          navigate(`/communities/boards/free-report/modify/${id}`);
        }}
      >
        수정하기
      </button>
      <button type="button" onClick={() => {}}>
        삭제
      </button>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
    /*<form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TopicInputForm register={register} />
        {errors.title && <p>{errors.title.message}</p>}
        <WebEditorForm onContentsHandler={onContentsHandler} />
        <button type="submit">게시글 등록하기</button>
      </div>
    </form>*/
  );
};

export default FreeReportDetailForm;
