import { useState, useEffect } from 'react';
import * as Styled from './Styled';
import { bookClubList } from '../../../lib/apis/communitiesService';
const BookClubsForm = () => {
  const [bookClubs, setBookClubs] = useState([]);
  const getBookClubs = async () => {
    const { data } = await bookClubList();
    setBookClubs(data);
  };
  useEffect(() => {
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
        <h2>🔔독서 모임 모집</h2>
        <Styled.SelectDiv>
          <div>
            <select>
              <option value="전체보기">전체보기</option>
              <option value="서울">서울</option>
              <option value="인천">인천</option>
              <option value="지역명">지역명</option>
            </select>
          </div>
          <input type="search" placeholder="독서 모임 위치로 검색해 보세요" />
        </Styled.SelectDiv>
        <Styled.ContentsDiv>
          {bookClubs.map(
            ({ location, reply_cnt, writer, date, title, content }) => {
              return (
                <Styled.CardDiv key={date}>
                  <p>{location}</p>
                  <p>{reply_cnt}</p>
                  <p>{writer}</p>
                  <p>{dateFormat(date)}</p>
                  <p>{title}</p>
                  <p>{content}</p>
                </Styled.CardDiv>
              );
            }
          )}

          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
          <Styled.CardDiv></Styled.CardDiv>
        </Styled.ContentsDiv>
      </Styled.MainContentsDiv>
    </Styled.MainContainerDiv>
  );
};

export default BookClubsForm;
