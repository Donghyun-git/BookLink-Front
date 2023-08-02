//import React from 'react'
import * as Styled from './Styled';
import {
  frees,
  bookReports,
} from '../../../lib/apis/communities/communitiesService';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import BoardsCardForm from '../../Common/Card/BoardsCard/BoardsCardForm';
import openbook from '../../../images/openbook.png';
const BoardsForm = () => {
  const [freeList, setFreeList] = useState([]);
  const [bookReportList, setBookReportList] = useState([]);
  const [select, setSelect] = useState(0); //상태가 0일시 자유글, 상태가 1일시 독후감
  const navigate = useNavigate();
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
  const onSelectHandler = (e) => {
    if (e.target.value === 0) {
      setSelect(0);
    } else if (e.target.value === 1) {
      setSelect(1);
    }
  };
  useEffect(() => {
    getFrees();
    getBookReports();
  }, [select]);
  useEffect(() => {
    getFrees();
    getBookReports();
  }, [searchWord]);

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
          <Styled.select onClick={onSelectHandler}>
            <Styled.li isClicked={select === 0} value="0">
              자유글
            </Styled.li>
            <Styled.li isClicked={select === 1} value="1">
              독후감
            </Styled.li>
          </Styled.select>
        </Styled.SelectDiv>
        <Styled.MainDiv>
          <Styled.ContentsDiv>
            {(select > 0 ? bookReportList : freeList).map(
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
            )}
          </Styled.ContentsDiv>
          <Styled.AsideDiv>
            <Styled.searchInput
              placeholder="도서명 혹은 키워드를 검색해보세요"
              type="search"
              ref={inputRef}
              onKeyDown={onSearchHandler}
            />
            <Styled.Nav>
              <Styled.NavBtn>인기글</Styled.NavBtn>
              <Styled.NavBtn
                onClick={() => navigate('/communities/book-clubs')}
              >
                독서 모임
              </Styled.NavBtn>
              <Styled.NavBtn>게시판</Styled.NavBtn>
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

export default BoardsForm;
