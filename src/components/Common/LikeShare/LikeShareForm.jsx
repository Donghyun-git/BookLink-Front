import { useContext } from 'react';
import Heart from '../../../images/heart.svg';
import HeartGray from '../../../images/heart_gray.svg';
import Share from '../../../images/share.svg';
import { useParams } from 'react-router-dom';
import {
  bookClubLike,
  bookReportLike,
  freeReportLike,
} from '../../../lib/apis/communities/like/communitiesLikeService';
import { CommunitiesDetailContext } from '../../../context/communitiesDetailContext';
import styled from 'styled-components';

export const LikeShare = styled.div`
  width: 4.286rem;
  height: 13.214rem;
  margin-top: 20rem;
  margin-right: 2.571rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const LikeShareContainer = styled.div`
  font-size: 0.857rem;
  text-align: center;
  width: 100%;
  img {
    width: 100%;
  }
`;
const LikeShareForm = () => {
  const { id } = useParams();
  const { info, setInfo } = useContext(CommunitiesDetailContext);
  console.log(info);
  const { category, liked, like_cnt } = info;
  const onImgHandler = async () => {
    let data1;
    if (category === '독서 모임') {
      const { data } = await bookClubLike(id);
      const { like_cnt } = data;
      data1 = like_cnt;
    } else if (category === '독후감') {
      const { data } = await bookReportLike(id);
      const { like_cnt } = data;
      data1 = like_cnt;
    } else {
      const { data } = await freeReportLike(id);
      const { like_cnt } = data;
      data1 = like_cnt;
    }
    console.log(data1);
    setInfo({ ...info, like_cnt: data1, liked: !liked });
  };

  return (
    <LikeShare>
      <LikeShareContainer>
        <img src={liked ? Heart : HeartGray} onClick={onImgHandler} />
        <span>{like_cnt}</span>
      </LikeShareContainer>
      <LikeShareContainer>
        <img src={Share} />
        <span>공유하기</span>
      </LikeShareContainer>
    </LikeShare>
  );
};

export default LikeShareForm;
