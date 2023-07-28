//import React from 'react'
import * as Styled from './Styled';
import {
  frees,
  bookReports,
} from '../../../lib/apis/communities/communitiesService';
import { useState, useEffect, useRef } from 'react';
import BoardsCardForm from '../../Common/Card/BoardsCard/BoardsCardForm';
import openbook from '../../../images/openbook.png';
const BoardsForm = () => {
  const [freeList, setFreeList] = useState([]);
  const [bookReportList, setBookReportList] = useState([]);
  const [select, setSelect] = useState(0); //상태가 0일시 자유글, 상태가 1일시 독후감
  const [searchWord, setSearchWord] = useState('');
  const inputRef = useRef(null);
  const getFrees = async () => {
    let { data } = await frees();
    if (searchWord) {
      data = data.filter((info) => info.title.includes(searchWord));
    }
    setFreeList(data);
  };
  const getBookReports = async () => {
    let { data } = await bookReports();
    if (searchWord) {
      data = data.filter((info) => info.title.includes(searchWord));
    }
    setBookReportList(data);
  };
  useEffect(() => {
    getFrees();
    getBookReports();
  }, [searchWord]);

  const onSelectHandler = (e) => {
    if (e.target.value === '자유글') {
      setSelect(0);
    } else if (e.target.value === '독후감') {
      setSelect(1);
    }
  };
  const onSearchHandler = (e) => {
    if (e.key === 'Enter') {
      setSearchWord(inputRef.current.value);
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
            ref={inputRef}
            onKeyDown={onSearchHandler}
          />
        </Styled.SelectDiv>
        <Styled.ContentsDiv>
          {select
            ? bookReportList.map(
                ({
                  category,
                  reply_cnt,
                  like_cnt,
                  writer,
                  id,
                  localDateTime,
                  title,
                  content,
                }) => {
                  return (
                    <BoardsCardForm
                      key={localDateTime}
                      category={category}
                      reply_cnt={reply_cnt}
                      like_cnt={like_cnt}
                      writer={writer}
                      localDateTime={localDateTime}
                      title={title}
                      content={content}
                      id={id}
                    />
                  );
                }
              )
            : freeList.map(
                ({
                  category,
                  reply_cnt,
                  like_cnt,
                  writer,
                  id,
                  localDateTime,
                  title,
                  content,
                }) => {
                  return (
                    <BoardsCardForm
                      category={category}
                      reply_cnt={reply_cnt}
                      like_cnt={like_cnt}
                      writer={writer}
                      key={localDateTime}
                      localDateTime={localDateTime}
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

export default BoardsForm;
