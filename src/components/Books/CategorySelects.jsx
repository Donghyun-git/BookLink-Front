import { useState, useEffect, useCallback, useRef } from 'react';
import * as Styled from './Styled';
import { books } from '../../lib/books/books';
import searchIcon from '../../images/search_icon.svg';

const CategorySelects = ({ selectCategory }) => {
  const [isCategoryListOpen, setIsCategoryListOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('전체');
  const [selectedCID, setSelectedCID] = useState(0);

  const searchInputRef = useRef();

  const handleSelectChange = useCallback((e) => {
    setSelectedValue(e.target.value);
  }, []);

  const handleSelectClick = useCallback(() => {
    setIsCategoryListOpen(!isCategoryListOpen);
  }, [isCategoryListOpen]);

  const handleOptionClick = useCallback((category, CID) => {
    setSelectedValue(category);
    setSelectedCID(CID);
    setIsCategoryListOpen(false);
  }, []);

  useEffect(() => {
    selectCategory(selectedValue, selectedCID);
  }, [selectCategory, selectedCID, selectedValue]);

  return (
    <Styled.SelectMain>
      <Styled.SelectContainer>
        <Styled.CategorySelect
          value={selectedValue}
          onChange={handleSelectChange}
        >
          <option value="all">전체</option>
          <option value="1230">가정/요리/뷰티</option>
          <option value="55890">건강/취미/레저</option>
          <option value="170">경제경영</option>
          <option value="76001">고등학교참고서</option>
          <option value="2105">고전</option>
          <option value="987">과학</option>
          <option value="4395">달력/기타</option>
          <option value="8257">대학교재/전문서적</option>
          <option value="2551">만화</option>
          <option value="798">사회과학</option>
          <option value="1">소설/시/희곡</option>
          <option value="1383">수험서/자격증</option>
          <option value="1108">어린이</option>
          <option value="55889">에세이</option>
          <option value="1196">여행</option>
          <option value="74">역사</option>
          <option value="517">예술/대중문화</option>
          <option value="1322">외국어</option>
          <option value="13789">유아</option>
          <option value="656">인문학</option>
          <option value="336">자기계발</option>
          <option value="2913">잡지</option>
          <option value="17195">전집/중고전집</option>
          <option value="1237">종교/역학</option>
          <option value="2030">좋은부모</option>
          <option value="76000">중학교참고서</option>
          <option value="1137">청소년</option>
          <option value="50246">초등학교참고서</option>
          <option value="351">컴퓨터/모바일</option>
        </Styled.CategorySelect>
        <div>
          <Styled.SelectSpan onClick={handleSelectClick}>
            {selectedValue}
          </Styled.SelectSpan>
          {isCategoryListOpen && (
            <Styled.OptionsList>
              {books.map((book) => {
                const { category, CID } = book;
                return (
                  <Styled.OptionItem
                    key={CID}
                    onClick={() => handleOptionClick(category, CID)}
                  >
                    {category}
                  </Styled.OptionItem>
                );
              })}
            </Styled.OptionsList>
          )}
        </div>
        <div>
          <Styled.SearchDiv>
            <Styled.SearchInput
              type="search"
              placeholder="검색어를 입력해보세요."
              ref={searchInputRef}
            />
            <Styled.SearchIcon>
              <img
                src={searchIcon}
                alt="검색 이미지"
                style={{ width: '100%' }}
              />
            </Styled.SearchIcon>
          </Styled.SearchDiv>
        </div>
      </Styled.SelectContainer>
    </Styled.SelectMain>
  );
};

export default CategorySelects;
