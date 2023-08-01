import { useState, useEffect } from 'react';
import { bookClubsDetail } from '../../../../lib/apis/communities/detail/communitiesDetailService';
import LikeShareForm from '../../../Common/LikeShare/LikeShareForm';
import CommunitiesDetailForm from '../../../Common/CommunitiesDetail/CommunitiesDetailForm';
import CommunitiesCommentForm from '../../../Common/CommunitiesComment/CommunitiesCommentForm';
import {
  MainContainerDiv,
  CommunitiesDetailContentsDiv,
} from '../../../../styles/globalStyled';
import { dateFormat } from '../../../../utils/date';
import { useParams } from 'react-router-dom';
import { CommunitiesDetailContext } from '../../../../context/communitiesDetailContext';
const BookClubsDetailForm = () => {
  const [info, setInfo] = useState({});
  const { id } = useParams();
  const getDetail = async () => {
    const { data } = await bookClubsDetail(Number(id));
    data.category = '독서 모임';
    data.date = dateFormat(data.date);
    setInfo(data);
  };
  useEffect(() => {
    getDetail();
  }, []);
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
