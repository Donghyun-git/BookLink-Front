import { useState, useEffect, useRef } from 'react';
import * as Styled from './Styled';
import { bookClubList } from '../../../lib/apis/communities/communitiesService';
import bell from '../../../images/bell.png';
import BookClubsCardForm from '../../Common/Card/BookClubsCard/BookClubsCardForm';
const BookClubsForm = () => {
  const [bookClubs, setBookClubs] = useState([]);
  const [select, setSelect] = useState('전체보기');
  const inputRef = useRef(null);
  const getBookClubs = async () => {
    let { data } = await bookClubList();
    if (select && select !== '전체보기') {
      data = data.filter((info) => info.location.split(' ')[0] === select);
    }
    setBookClubs(data);
  };
  useEffect(() => {
    getBookClubs();
  }, [select]);
  const onSelectHandler = (e) => {
    const { value } = e.target;
    setSelect(value);
  };
  const onSearchHandler = (e) => {
    if (e.key === 'Enter') {
      setSelect(inputRef.current.value);
    }
  };
  return (
    <Styled.MainContainerDiv>
      <Styled.MainContentsDiv>
        <Styled.TagDiv>
          <Styled.bellImg src={bell} />
          <Styled.tag>독서 모임 모집</Styled.tag>
        </Styled.TagDiv>
        <Styled.SelectDiv>
          <Styled.select onChange={onSelectHandler}>
            <option value="전체보기">전체보기</option>
            <option value="서울">서울</option>
            <option value="인천">인천</option>
          </Styled.select>
          <Styled.searchInput
            type="search"
            placeholder="독서 모임 위치로 검색해 보세요"
            ref={inputRef}
            onKeyDown={onSearchHandler}
          />
        </Styled.SelectDiv>
        <Styled.ContentsDiv>
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
        </Styled.ContentsDiv>
      </Styled.MainContentsDiv>
    </Styled.MainContainerDiv>
  );
};

export default BookClubsForm;
