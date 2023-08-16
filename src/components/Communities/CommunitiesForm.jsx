import * as Styled from './Styled';

import { useQuery } from 'react-query';

import {
  bookClubList,
  freeReports,
  bookReports,
} from '../../lib/apis/communities/communitiesService';

import fire from '../../images/fire.png';
import bell from '../../images/bell.png';
import openbook from '../../images/openbook.png';

import BookClubsCardForm from '../Common/Card/BookClubsCard/BookClubsCardForm';
import BoardsCardForm from '../Common/Card/BoardsCard/BoardsCardForm';

import moment from 'moment';

const CommunitiesForm = () => {
  const { data: bookClubData } = useQuery('bookclubs', bookClubList);
  const { data: bookData } = useQuery('books', bookReports);
  const { data: freeData } = useQuery('frees', freeReports);
  const boardData = [...bookData, ...freeData];

  return (
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
            {boardData
              .filter(
                ({ date }) =>
                  Date.parse(moment().startOf('week')) <= Date.parse(date) &&
                  Date.parse(date) <= Date.parse(moment().endOf('week'))
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
                  date,
                  title,
                  content,
                }) => {
                  return (
                    <BoardsCardForm
                      key={date}
                      category={category}
                      writer={writer}
                      like_cnt={like_cnt}
                      reply_cnt={reply_cnt}
                      date={date}
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
            {bookClubData
              .slice(0, 4)
              .map(
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
            {boardData
              .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
              .map(
                ({
                  id,
                  writer,
                  category,
                  like_cnt,
                  reply_cnt,
                  date,
                  title,
                  content,
                }) => {
                  return (
                    <BoardsCardForm
                      key={date}
                      category={category}
                      writer={writer}
                      like_cnt={like_cnt}
                      reply_cnt={reply_cnt}
                      date={date}
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
  );
};

export default CommunitiesForm;
