import * as Styled from './Styled';
import { useState, useEffect } from 'react';
import {
  bookClubList,
  frees,
  bookReports,
} from '../../lib/apis/communities/communitiesService';
import fire from '../../images/fire.png';
import bell from '../../images/bell.png';
import openbook from '../../images/openbook.png';
import BookClubsCardForm from '../Common/Card/BookClubsCard/BookClubsCardForm';
import BoardsCardForm from '../Common/Card/BoardsCard/BoardsCardForm';
const CommunitiesForm = () => {
  const [freeList, setFreeList] = useState([]);
  const [bookReportList, setBookReportList] = useState([]);
  const [bookClubs, setBookClubs] = useState([]);
  const getFrees = async () => {
    const { data } = await frees();
    setFreeList(data);
  };
  const getBookReports = async () => {
    const { data } = await bookReports();
    setBookReportList(data);
  };

  const getBookClubs = async () => {
    const { data } = await bookClubList();
    setBookClubs(data.slice(0, 4));
  };
  useEffect(() => {
    getFrees();
    getBookReports();
    getBookClubs();
  }, []);

  return (
    <Styled.MainContainerDiv>
      <Styled.MainContentsDiv>
        <Styled.PopularDiv>
          <Styled.TagDiv>
            <Styled.fireImg src={fire} />
            <Styled.tag>주간 인기글</Styled.tag>
            <Styled.link href="/communities/popular">전체보기</Styled.link>
          </Styled.TagDiv>
          <Styled.PopularContentSDiv>
            <Styled.CardDiv></Styled.CardDiv>
            <Styled.CardDiv></Styled.CardDiv>
            <Styled.CardDiv></Styled.CardDiv>
            <Styled.CardDiv></Styled.CardDiv>
          </Styled.PopularContentSDiv>
        </Styled.PopularDiv>
        <Styled.BookClubsDiv>
          <Styled.TagDiv>
            <Styled.bellImg src={bell} />
            <Styled.tag>독서 모임 모집</Styled.tag>
            <Styled.link href="/communities/book-clubs">전체보기</Styled.link>
          </Styled.TagDiv>
          <Styled.BookClubsContentSDiv>
            {bookClubs.map(
              ({ id, location, reply_cnt, writer, date, title, content }) => {
                return (
                  <BookClubsCardForm
                    key={date}
                    location={location}
                    reply_cnt={reply_cnt}
                    writer={writer}
                    date={date}
                    title={title}
                    content={content}
                    id={id}
                  />
                );
              }
            )}
          </Styled.BookClubsContentSDiv>
        </Styled.BookClubsDiv>
        <Styled.BoardsDiv>
          <Styled.TagDiv>
            <Styled.openbookImg src={openbook} />
            <Styled.tag>게시판</Styled.tag>
            <Styled.link href="/communities/boards">전체보기</Styled.link>
          </Styled.TagDiv>
          <Styled.BoardsContentsDiv>
            {[...freeList, ...bookReportList]
              .sort(
                (a, b) =>
                  Date.parse(b.lastModifiedTime) -
                  Date.parse(a.lastModifiedTime)
              )
              .map(({ id, lastModifiedTime, title, content }) => {
                return (
                  <BoardsCardForm
                    key={lastModifiedTime}
                    lastModifiedTime={lastModifiedTime}
                    title={title}
                    content={content}
                    id={id}
                  />
                );
              })}
          </Styled.BoardsContentsDiv>
        </Styled.BoardsDiv>
      </Styled.MainContentsDiv>
    </Styled.MainContainerDiv>
  );
};

export default CommunitiesForm;
