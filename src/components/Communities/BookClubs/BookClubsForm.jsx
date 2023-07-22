import { useState, useEffect } from 'react';
import * as Styled from './Styled';
import { bookClubList } from '../../../lib/apis/communitiesService';
import bell from '../../../images/bell.png';
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
        <Styled.TagDiv>
          <Styled.bellImg src={bell} />
          <Styled.tag>독서 모임 모집</Styled.tag>
        </Styled.TagDiv>
        <Styled.SelectDiv>
          <Styled.select>
            <option value="전체보기">전체보기</option>
            <option value="서울">서울</option>
            <option value="인천">인천</option>
            <option value="지역명">지역명</option>
          </Styled.select>
          <Styled.searchInput
            type="search"
            placeholder="독서 모임 위치로 검색해 보세요"
          />
        </Styled.SelectDiv>
        <Styled.ContentsDiv>
          {bookClubs.map(
            ({ location, reply_cnt, writer, date, title, content }) => {
              return (
                <Styled.CardDiv key={date}>
                  <Styled.CardContainerDiv>
                    <Styled.CardHeaderDiv>
                      <p>{location}</p>
                      <p>{reply_cnt}</p>
                    </Styled.CardHeaderDiv>
                    <Styled.CardInfoDiv>
                      <Styled.CardInfoWriterDiv>
                        {writer}
                      </Styled.CardInfoWriterDiv>
                      <Styled.CardInfoCategoryDiv>
                        독서모임
                      </Styled.CardInfoCategoryDiv>
                      <Styled.CardInfoDateDiv>
                        {dateFormat(date)}
                      </Styled.CardInfoDateDiv>
                    </Styled.CardInfoDiv>
                    <Styled.CardTitleDiv>{title}</Styled.CardTitleDiv>
                    <Styled.CardContentDiv
                      dangerouslySetInnerHTML={{ __html: content }}
                    />
                  </Styled.CardContainerDiv>
                </Styled.CardDiv>
              );
            }
          )}
        </Styled.ContentsDiv>
      </Styled.MainContentsDiv>
    </Styled.MainContainerDiv>
  );
};

export default BookClubsForm;
