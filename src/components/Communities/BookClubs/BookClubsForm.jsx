import * as Styled from './Styled';

import { useQuery } from 'react-query';

import { bookClubList } from '../../../lib/apis/communities/communitiesService';

import bell from '../../../images/bell.png';

import BookClubsCardForm from '../../Common/Card/BookClubsCard/BookClubsCardForm';

import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const BookClubsForm = () => {
  const navigate = useNavigate();

  const inputRef = useRef(null);
  let { data: bookClubData } = useQuery('bookclubs', bookClubList);
  const [bookClubs, setBookClubs] = useState(bookClubData);

  /*if (select && select !== '전체보기') {
      data = data.filter((info) => info.location.split(' ')[0] === select);
    }
  };
  const onSelectHandler = (e) => {
    const { value } = e.target;
    setSelect(value);
  };*/
  const onSearchHandler = (e) => {
    if (e.key === 'Enter') {
      const search = inputRef.current.value;
      const filteredData = bookClubData.filter(
        (info) => info.title.includes(search) || info.location.includes(search)
      );
      setBookClubs(filteredData);
    }
  };
  return (
    <Styled.MainContainerDiv>
      <Styled.MainContentsDiv>
        <Styled.TagDiv>
          <Styled.bellImg src={bell} />
          <Styled.tag>독서 모임 모집</Styled.tag>
        </Styled.TagDiv>
        {/*<Styled.SelectDiv>
          <Styled.select onChange={onSelectHandler}>
            <option value="전체보기">전체보기</option>
            <option value="서울">서울</option>
            <option value="인천">인천</option>
          </Styled.select>
          </Styled.SelectDiv>*/}
        <Styled.MainDiv>
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
          <Styled.AsideDiv>
            <Styled.searchInput
              type="search"
              placeholder="키워드나 장소를 검색해보세요"
              ref={inputRef}
              onKeyDown={onSearchHandler}
            />
            <Styled.Nav>
              <Styled.NavBtn>인기글</Styled.NavBtn>
              <Styled.NavBtn>독서 모임</Styled.NavBtn>
              <Styled.NavBtn onClick={() => navigate('/communities/boards')}>
                게시판
              </Styled.NavBtn>
            </Styled.Nav>
            <Styled.WriteBtn onClick={() => navigate('/communities/write')}>
              글쓰기
            </Styled.WriteBtn>
          </Styled.AsideDiv>
        </Styled.MainDiv>
      </Styled.MainContentsDiv>
    </Styled.MainContainerDiv>
  );
};

export default BookClubsForm;
