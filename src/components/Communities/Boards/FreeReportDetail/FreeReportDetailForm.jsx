import { useState } from 'react';

import { freesDetail } from '../../../../lib/apis/communities/detail/communitiesDetailService';

import { useParams } from 'react-router-dom';

import {
  MainContainerDiv,
  CommunitiesDetailContentsDiv,
} from '../../../../styles/globalStyled';
import CommunitiesDetailForm from '../../../Common/CommunitiesDetail/CommunitiesDetailForm';
import LikeShareForm from '../../../Common/LikeShare/LikeShareForm';
import CommunitiesCommentForm from '../../../Common/CommunitiesComment/CommunitiesCommentForm';

import { CommunitiesDetailContext } from '../../../../context/communitiesDetailContext';

import { useQuery } from 'react-query';

const FreeReportDetailForm = () => {
  const { id } = useParams();
  const { data } = useQuery(['frees', id], () => freesDetail(Number(id)));
  const [info, setInfo] = useState(data);

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
