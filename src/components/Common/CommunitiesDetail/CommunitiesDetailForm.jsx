import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CommunitiesDetailContentsDiv } from '../../../styles/globalStyled';
import Heart from '../../../images/heart.svg';
import HeartGray from '../../../images/heart_gray.svg';
import Share from '../../../images/share.svg';
import {
  bookClubsDelete,
  freesDelete,
  bookReportsDelete,
} from '../../../lib/apis/communities/delete/communitiesDeleteService';

import { bookClubLike } from '../../../lib/apis/communities/like/communitiesLikeService';

const LikeShare = styled.div`
  width: 4.286rem;
  height: 13.214rem;
  margin-top: 20rem;
  margin-right: 2.571rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const LikeShareContainer = styled.div`
  font-size: 0.857rem;
  text-align: center;
  width: 100%;
  img {
    width: 100%;
  }
`;

const Title = styled.div`
  margin-top: 7.286rem;
  width: 100%;
  font-size: 3.428rem;
  font-weight: bold;
`;
const Sub = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.571rem;
  height: 5rem;
  border-bottom: 0.071rem solid #d9d9d9;
`;
const SubLeft = styled.div`
  display: flex;
  height: 3.428rem;
  width: 27.786rem;
`;
const WriterImg = styled.div`
  width: 3.428rem;
  height: 100%;
  border-radius: 3.428rem;
  margin-right: 0.857rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 3.428rem;
  }
`;
const SubDetail = styled.div`
  height: 100%;
  font-size: 1rem;
`;
const SubDetailTop = styled.div`
  height: 50%;
  font-weight: bold;
  display: flex;
`;
const Writer = styled.div`
  border-right: 0.071rem solid #848484;
  padding-right: 0.571rem;
`;
const Category = styled.div`
  padding: 0 0.571rem;
`;

const SubDetailBottom = styled.div`
  height: 50%;
  color: #848484;
  display: flex;
`;
const Date = styled.div`
  padding-right: 0.571rem;
`;
const View = styled(Category)``;
const Like = styled(Category)``;
const Reply = styled(Category)``;
const SubRight = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4.571rem;
`;

const Button = styled.div`
  height:1.286rem
  width:3.214rem
  font-size:0.857rem;
  border: 0.071rem solid #d9d9d9;
  text-align:center;  
`;
const BookInfo = styled.div`
  margin-top: 2.571rem;
  height: 11.286rem;
  border: 1px solid black;
  border-radius: 0.571rem;
  display: flex;
`;
const BookImg = styled.img`
  width: 9.571rem;
  height: 9.571rem;
  margin: 0.857rem;
`;
const BookDetail = styled.div`
  height: 9.571rem;
  border: 1px solid black;
  margin: 0.857rem;
`;
const Location = styled.div`
  margin-top: 2.571rem;
  font-size: 1.714rem;
  font-weight: bold;
`;

const Content = styled.div`
  width: 100%;
  margin-top: 2.571rem;
  min-height: 40.071rem;
  border-bottom: 0.071rem solid #d9d9d9;
`;
const CommunitiesDetailForm = ({
  title,
  image = 'https://soccerquick.s3.ap-northeast-2.amazonaws.com/1689834239634.png',
  writer,
  category,
  date,
  view_cnt,
  reply_cnt,
  like_cnt,
  content,
  bookInfo,
  location,
  liked,
}) => {
  const [likeStatus, setLikeStatus] = useState(liked);
  const [likeNum, setLikeNum] = useState(like_cnt);
  const { id } = useParams();
  const navigate = useNavigate();
  const onImgHandler = async () => {
    const { data } = await bookClubLike(id);
    const { like_cnt } = data;
    console.log(like_cnt);
    setLikeNum(like_cnt);
    setLikeStatus(!likeStatus);
  };
  const onDelete = async () => {
    if (category === '자유글') {
      const { status } = await freesDelete(id);
      console.log(status);
    } else if (category === '독후감') {
      const { status } = await bookReportsDelete(id);
      console.log(status);
    } else {
      const { status } = await bookClubsDelete(id);
      console.log(status);
    }
  };
  const onModify = () => {
    if (category === '자유글') {
      navigate(`/communities/boards/free-report/modify/${id}`, {
        state: { title, content },
      });
    } else if (category === '독후감') {
      navigate(`/communities/boards/book-report/modify/${id}`, {
        state: {
          title,
          content,
          bookInfo,
        },
      });
    } else {
      navigate(`/communities/book-clubs/modify/${id}`, {
        state: { title, location, content },
      });
    }
  };
  useEffect(() => {
    setLikeNum(like_cnt);
    setLikeStatus(liked);
    console.log('초기렌더링');
  }, [like_cnt]);

  return (
    <>
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
      <CommunitiesDetailContentsDiv>
        <Title>{title}</Title>
        <Sub>
          <SubLeft>
            <WriterImg>
              <img src={image} />
            </WriterImg>
            <SubDetail>
              <SubDetailTop>
                <Writer>{writer}</Writer>
                <Category>{category}</Category>
              </SubDetailTop>
              <SubDetailBottom>
                <Date>{date}</Date>
                <View>조회수{view_cnt}</View>
                <Like>좋아요{likeNum}</Like>
                <Reply>댓글{reply_cnt}</Reply>
              </SubDetailBottom>
            </SubDetail>
          </SubLeft>
          <SubRight>
            <div>
              <Button onClick={onModify}>수정</Button>
              <Button onClick={onDelete}>삭제하기</Button>
            </div>
            <div>
              <Button>신고하기</Button>
            </div>
          </SubRight>
        </Sub>
        <div>
          {bookInfo && (
            <BookInfo>
              <BookImg src={bookInfo.cover} />
              <BookDetail>
                <p>{bookInfo.book_title}</p>
                <p>{bookInfo.authors}</p>
                <p>{bookInfo.publisher}</p>
                <p>{bookInfo.pud_date}</p>
              </BookDetail>
            </BookInfo>
          )}
          {location && <Location>{location}</Location>}
          <Content dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </CommunitiesDetailContentsDiv>
    </>
  );
};

export default CommunitiesDetailForm;
