import { useState } from 'react';
import { bookClubsDetail } from '../../../../lib/apis/communities/detail/communitiesDetailService';

import LikeShareForm from '../../../Common/LikeShare/LikeShareForm';
import CommunitiesDetailForm from '../../../Common/CommunitiesDetail/CommunitiesDetailForm';
import CommunitiesCommentForm from '../../../Common/CommunitiesComment/CommunitiesCommentForm';

import {
  MainContainerDiv,
  CommunitiesDetailContentsDiv,
} from '../../../../styles/globalStyled';

import { useParams } from 'react-router-dom';

import { CommunitiesDetailContext } from '../../../../context/communitiesDetailContext';

import { useQuery } from 'react-query';

const BookClubsDetailForm = () => {
  const { id } = useParams();
  const { data } = useQuery(['bookClubs', id], () =>
    bookClubsDetail(Number(id))
  );

  console.log(data);
  const [info, setInfo] = useState(data);

  /*const {
    writer,
    image,
    title,
    content,
    category
    location,
    date,
    reply_cnt,
    view_cnt,
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

export default BookClubsDetailForm;
