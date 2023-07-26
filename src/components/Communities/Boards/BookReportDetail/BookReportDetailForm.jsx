//import React from 'react'
//import WebEditorForm from '../../../Common/WebEditor/WebEditorForm';
//import TopicInputForm from '../../../Common/Input/TopicInputForm';
import { useState, useEffect } from 'react';
import { bookReportsDetail } from '../../../../lib/apis/communities/detail/communitiesDetailService';
import { dateFormat } from '../../../../utils/date';
import { useNavigate, useParams } from 'react-router-dom';
const BookReportDetailForm = () => {
  const [info, SetInfo] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const getDetail = async () => {
    const { data } = await bookReportsDetail(Number(id));
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
    book_title,
    authors,
    publisher,
    pud_date,
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
          navigate(`/communities/boards/book-report/modify/${id}`);
        }}
      >
        수정하기
      </button>
      <button type="button" onClick={() => {}}>
        삭제
      </button>
      <p>{book_title}</p>
      <p>{authors}</p>
      <p>{publisher}</p>
      <p>{pud_date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>

    /*<div>
      <TopicInputForm />
      <WebEditorForm />
    </div>*/
  );
};

export default BookReportDetailForm;
