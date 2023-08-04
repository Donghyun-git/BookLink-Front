import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { HeaderBookSearch } from '../../lib/apis/searchService/';
import * as Styled from './Styled';
import { MainContainerDiv, MainContentsDiv } from '../../styles/globalStyled';
const SearchResultForm = () => {
  const navigate = useNavigate();
  const [searchParams /*setSearchParams*/] = useSearchParams();
  const topic = searchParams.get('query');
  console.log(topic);
  const [results, setResults] = useState([]);
  const getResults = async () => {
    const { item } = await HeaderBookSearch(topic);
    setResults(item);
  };
  useEffect(() => {
    getResults(); //카테고리,책소개가 필요
  }, []);

  return (
    <MainContainerDiv>
      <MainContentsDiv>
        <Styled.TopicResultTag>
          <Styled.TopicResult>{topic} 관련 도서 검색 결과</Styled.TopicResult>
          <Styled.Cnt>{results.length}개</Styled.Cnt>
        </Styled.TopicResultTag>
        <Styled.ResultTag>
          <Styled.Result>도서 검색 결과 </Styled.Result>
          <Styled.Sort>
            <li>정확도순</li>
            <li>최신순</li>
          </Styled.Sort>
        </Styled.ResultTag>
        <Styled.InfoDiv>
          <Styled.Cover>표지</Styled.Cover>
          <Styled.Category>카테고리</Styled.Category>
          <Styled.Topic>제목</Styled.Topic>
          <Styled.Author>저자</Styled.Author>
          <Styled.Publish>출판</Styled.Publish>
          <Styled.Price>정가</Styled.Price>
          <Styled.Introduce>책 소개</Styled.Introduce>
          <Styled.DetailCnt>후기</Styled.DetailCnt>
          <Styled.DetailCnt>좋아요</Styled.DetailCnt>
          <Styled.DetailCnt>조회수</Styled.DetailCnt>
          <Styled.DetailCnt>소장</Styled.DetailCnt>
          <Styled.Register>등록</Styled.Register>
        </Styled.InfoDiv>
        {results.map(
          ({
            isbn13,
            cover,
            title,
            author,
            publisher,
            priceStandard,
            reply_cnt,
            like_cnt,
            owner_cnt,
          }) => {
            return (
              <Styled.InfoContent key={isbn13}>
                <Styled.CoverContent>
                  <img
                    src={cover}
                    alt="책이미지"
                    onClick={() => navigate(`/books/${isbn13}`)}
                  />
                </Styled.CoverContent>
                <Styled.CategoryContent>카테고리</Styled.CategoryContent>
                <Styled.TopicContent>{title}</Styled.TopicContent>
                <Styled.AuthorContent>{author}</Styled.AuthorContent>
                <Styled.PublishContent>{publisher}</Styled.PublishContent>
                <Styled.PriceContent>{priceStandard}</Styled.PriceContent>
                <Styled.IntroduceContent>책소개</Styled.IntroduceContent>
                <Styled.DetailCntContent>{reply_cnt}</Styled.DetailCntContent>
                <Styled.DetailCntContent>{like_cnt}</Styled.DetailCntContent>
                <Styled.DetailCntContent>{owner_cnt}</Styled.DetailCntContent>
                <Styled.DetailCntContent>소장된수</Styled.DetailCntContent>
                <Styled.RegisterContent>
                  <Styled.Btn>소장 등록하기</Styled.Btn>
                  <Styled.Btn>대여정보 확인하기</Styled.Btn>
                </Styled.RegisterContent>
              </Styled.InfoContent>
            );
          }
        )}
      </MainContentsDiv>
    </MainContainerDiv>
  );
};

export default SearchResultForm;
