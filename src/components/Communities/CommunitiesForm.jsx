import * as Styled from './Styled';
import { useState, useEffect, Suspense } from 'react';
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
import moment from 'moment';
import Loading from '../Loading/Loading';
const CommunitiesForm = () => {
  const [boardList, setBoardList] = useState([]);
  const [bookClubs, setBookClubs] = useState([]);

  const getList = async () => {
    const [freeData, bookReportData, bookClubData] = await Promise.all([
      frees(),
      bookReports(),
      bookClubList(),
    ]);

    setBoardList([...freeData.data, ...bookReportData.data]);
    setBookClubs(bookClubData.data.slice(0, 4));
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <Styled.MainContainerDiv>
        <Styled.MainContentsDiv>
          <Styled.PopularDiv>
            <Styled.TagDiv>
              <Styled.fireImg src={fire} alt="불" />
              <Styled.tag>주간 인기글</Styled.tag>
              <Styled.week>
                {moment().startOf('week').format('MM.DD')}~
                {moment().endOf('week').format('MM.DD')}
              </Styled.week>
              {/*<Styled.link href="/communities/popular">전체보기</Styled.link>*/}
            </Styled.TagDiv>
            <Styled.PopularContentSDiv>
              {boardList
                .filter(
                  (date) =>
                    Date.parse(moment().startOf('week')) <=
                      Date.parse(date.localDateTime) &&
                    Date.parse(date.localDateTime) <=
                      Date.parse(moment().endOf('week'))
                )
                .slice(0, 4)
                .sort(
                  (a, b) =>
                    b.view_cnt + 2 * b.like_cnt - (a.view_cnt + 2 * a.like_cnt)
                )
                .map(
                  ({
                    id,
                    writer,
                    category,
                    like_cnt,
                    reply_cnt,
                    localDateTime,
                    title,
                    content,
                  }) => {
                    return (
                      <BoardsCardForm
                        key={localDateTime}
                        category={category}
                        writer={writer}
                        like_cnt={like_cnt}
                        reply_cnt={reply_cnt}
                        localDateTime={localDateTime}
                        title={title}
                        content={content}
                        id={id}
                      />
                    );
                  }
                )}
            </Styled.PopularContentSDiv>
          </Styled.PopularDiv>
          <Styled.BookClubsDiv>
            <Styled.TagDiv>
              <Styled.bellImg src={bell} alt="벨" />
              <Styled.tag>독서 모임 모집</Styled.tag>
              <Styled.link href="/communities/book-clubs">전체보기</Styled.link>
            </Styled.TagDiv>
            <Styled.BookClubsContentSDiv>
              {bookClubs.map(
                ({
                  id,
                  location,
                  reply_cnt,
                  like_cnt,
                  writer,
                  date,
                  title,
                  content,
                }) => {
                  return (
                    <BookClubsCardForm
                      key={date}
                      location={location}
                      like_cnt={like_cnt}
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
              <Styled.openbookImg src={openbook} alt="책" />
              <Styled.tag>게시판</Styled.tag>
              <Styled.link href="/communities/boards">전체보기</Styled.link>
            </Styled.TagDiv>
            <Styled.BoardsContentsDiv>
              {boardList
                .sort(
                  (a, b) =>
                    Date.parse(b.localDateTime) - Date.parse(a.localDateTime)
                )
                .map(
                  ({
                    id,
                    writer,
                    category,
                    like_cnt,
                    reply_cnt,
                    localDateTime,
                    title,
                    content,
                  }) => {
                    return (
                      <BoardsCardForm
                        key={localDateTime}
                        category={category}
                        writer={writer}
                        like_cnt={like_cnt}
                        reply_cnt={reply_cnt}
                        localDateTime={localDateTime}
                        title={title}
                        content={content}
                        id={id}
                      />
                    );
                  }
                )}
            </Styled.BoardsContentsDiv>
          </Styled.BoardsDiv>
        </Styled.MainContentsDiv>
      </Styled.MainContainerDiv>
    </Suspense>
  );
};

export default CommunitiesForm;
