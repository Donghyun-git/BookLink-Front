import { useState, useEffect } from 'react';
import { freesDetail } from '../../../../lib/apis/communities/detail/communitiesDetailService';
import { dateFormat } from '../../../../utils/date';
import { useParams } from 'react-router-dom';
import {
  MainContainerDiv,
  CommunitiesDetailContentsDiv,
} from '../../../../styles/globalStyled';
import CommunitiesDetailForm from '../../../Common/CommunitiesDetail/CommunitiesDetailForm';
import LikeShareForm from '../../../Common/LikeShare/LikeShareForm';
import CommunitiesCommentForm from '../../../Common/CommunitiesComment/CommunitiesCommentForm';
import { CommunitiesDetailContext } from '../../../../context/communitiesDetailContext';
const FreeReportDetailForm = () => {
  const [info, setInfo] = useState({});
  const { id } = useParams();
  const getDetail = async () => {
    const { data } = await freesDetail(Number(id));
    console.log(data);
    const { localDateTime, ...data1 } = data;
    setInfo({ ...data1, date: dateFormat(localDateTime) });
  };
  useEffect(() => {
    getDetail();
  }, []);
  /*const {
    writer,
    title,
    content,
    category,
    localDateTime,
    view_cnt,
    reply_cnt,
    like_cnt,
    liked,
    replies,
  } = info;*/
  return (
    <MainContainerDiv>
      <CommunitiesDetailContext.Provider value={{ info, setInfo }}>
        <LikeShareForm />
        <CommunitiesDetailContentsDiv>
          <CommunitiesDetailForm />
          <CommunitiesCommentForm />
        </CommunitiesDetailContentsDiv>
      </CommunitiesDetailContext.Provider>
    </MainContainerDiv>
  );
};

export default FreeReportDetailForm;
