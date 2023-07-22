import * as Styled from './Styled';
import { useState, useEffect } from 'react';
import {
  bookClubList,
  frees,
  bookReports,
} from '../../lib/apis/communitiesService';
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
    setBookClubs(data);
  };
  useEffect(() => {
    getFrees();
    getBookReports();
    getBookClubs();
  }, []);

  const dateFormat = (localDate) => {
    let [date, time] = localDate.split('T');
    time = time.split(':').slice(0, 2).join(':');
    return date + ' ' + time;
  };

  return (
    <Styled.MainContainerDiv>
      <Styled.MainContentsDiv>
        <Styled.PopularDiv>
          <Styled.TagDiv>
            <a href="/communities">🔥주간 인기글</a>
            <a href="/communities/popular">전체보기</a>
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
            <a href="/communities">🔔독서 모임 모집</a>
            <a href="/communities/book-clubs">전체보기</a>
          </Styled.TagDiv>
          <Styled.BookClubsContentSDiv>
            {bookClubs.map(
              ({ location, reply_cnt, writer, date, title, content }) => {
                return (
                  <Styled.BookClubsCardDiv key={date}>
                    <p>{location}</p>
                    <p>{reply_cnt}</p>
                    <p>{writer}</p>
                    <p>{dateFormat(date)}</p>
                    <p>{title}</p>
                    <p>{content}</p>
                  </Styled.BookClubsCardDiv>
                );
              }
            )}
          </Styled.BookClubsContentSDiv>
        </Styled.BookClubsDiv>
        <Styled.BoardsDiv>
          <Styled.TagDiv>
            <a href="/communities">📖게시판</a>
            <a href="/communities/boards">전체보기</a>
          </Styled.TagDiv>
          <Styled.BoardsContentsDiv>
            {[...freeList, ...bookReportList]
              .sort(
                (a, b) =>
                  Date.parse(b.lastModifiedTime) -
                  Date.parse(a.lastModifiedTime)
              )
              .map(({ lastModifiedTime, title, content }) => {
                return (
                  <Styled.CardDiv key={lastModifiedTime}>
                    <p>{dateFormat(lastModifiedTime)}</p>
                    <p>{title}</p>
                    <p>{content}</p>
                  </Styled.CardDiv>
                );
              })}
          </Styled.BoardsContentsDiv>
        </Styled.BoardsDiv>
      </Styled.MainContentsDiv>
    </Styled.MainContainerDiv>
  );
};

export default CommunitiesForm;
