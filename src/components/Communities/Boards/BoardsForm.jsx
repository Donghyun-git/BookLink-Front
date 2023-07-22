//import React from 'react'
import * as Styled from './Styled';
import { frees, bookReports } from '../../../lib/apis/communitiesService';
import { useState, useEffect } from 'react';
import openbook from '../../../images/openbook.png';
const BoardsForm = () => {
  const [freeList, setFreeList] = useState([]);
  const [bookReportList, setBookReportList] = useState([]);
  const [select, setSelect] = useState(0); //상태가 0일시 자유글, 상태가 1일시 독후감
  const getFrees = async () => {
    const { data } = await frees();
    setFreeList(data);
  };
  const getBookReports = async () => {
    const { data } = await bookReports();
    setBookReportList(data);
  };
  useEffect(() => {
    getFrees();
    getBookReports();
  }, []);
  const dateFormat = (localDate) => {
    let [date, time] = localDate.split('T');
    time = time.split(':').slice(0, 2).join(':');
    return date + ' ' + time;
  };

  const onSelectHandler = (e) => {
    if (e.target.value === '자유글') {
      setSelect(0);
    } else if (e.target.value === '독후감') {
      setSelect(1);
    }
  };

  return (
    <Styled.MainContainerDiv>
      <Styled.MainContentsDiv>
        <Styled.TagDiv>
          <Styled.openbookImg src={openbook} />
          <Styled.tag>게시글</Styled.tag>
        </Styled.TagDiv>
        <Styled.SelectDiv>
          <Styled.select onChange={onSelectHandler}>
            <option value="자유글">자유글</option>
            <option value="독후감">독후감</option>
          </Styled.select>

          <Styled.searchInput
            type="search"
            placeholder="검색어를 입력해보세요"
          />
        </Styled.SelectDiv>
        <Styled.ContentsDiv>
          {select
            ? bookReportList.map(({ lastModifiedTime, title, content }) => {
                return (
                  <Styled.CardDiv key={lastModifiedTime}>
                    <p>{dateFormat(lastModifiedTime)}</p>
                    <p>{title}</p>
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                  </Styled.CardDiv>
                );
              })
            : freeList.map(({ lastModifiedTime, title, content }) => {
                return (
                  <Styled.CardDiv key={lastModifiedTime}>
                    <p>{dateFormat(lastModifiedTime)}</p>
                    <p>{title}</p>
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                  </Styled.CardDiv>
                );
              })}
        </Styled.ContentsDiv>
      </Styled.MainContentsDiv>
    </Styled.MainContainerDiv>
  );
};

export default BoardsForm;
