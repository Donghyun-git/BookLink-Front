import { useState, useEffect } from 'react';
import Heart from '../../../images/heart.svg';
import HeartGray from '../../../images/heart_gray.svg';
import Share from '../../../images/share.svg';
import { useParams } from 'react-router-dom';
import { bookClubLike } from '../../../lib/apis/communities/like/communitiesLikeService';

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
const LikeShareForm = ({ liked, like_cnt }) => {
  const [likeStatus, setLikeStatus] = useState(liked);
  const [likeNum, setLikeNum] = useState(like_cnt);
  const { id } = useParams();

  const onImgHandler = async () => {
    const { data } = await bookClubLike(id);
    const { like_cnt } = data;
    console.log(like_cnt);
    setLikeNum(like_cnt);
    setLikeStatus(!likeStatus);
  };
  useEffect(() => {
    setLikeNum(like_cnt);
    setLikeStatus(liked);
  }, [like_cnt]);
  return (
    <LikeShare>
      <LikeShareContainer>
        <img src={likeStatus ? Heart : HeartGray} onClick={onImgHandler} />
        <span>{likeNum}</span>
      </LikeShareContainer>
      <LikeShareContainer>
        <img src={Share} />
        <span>공유하기</span>
      </LikeShareContainer>
    </LikeShare>
  );
};

export default LikeShareForm;
