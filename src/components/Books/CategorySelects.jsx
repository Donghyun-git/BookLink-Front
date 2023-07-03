import { useState, useCallback } from 'react';
import * as Styled from './BooksStyled';

const CategorySelects = () => {
  const [isCategoryListOpen, setIsCategoryListOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('카테고리 선택');

  const handleSelectChange = useCallback((e) => {
    setSelectedValue(e.target.value);
  }, []);

  const handleSelectClick = useCallback(() => {
    setIsCategoryListOpen(!isCategoryListOpen);
  }, [isCategoryListOpen]);

  const handleOptionClick = useCallback((value) => {
    setSelectedValue(value);
    setIsCategoryListOpen(false);
  }, []);

  return (
    // <Styled.SearchDiv>
    //     <Styled.SearchInput type="search" placeholder="책을 검색해보세요!" />
    //   </Styled.SearchDiv>
    <Styled.SelectMain>
      <Styled.SelectContainer>
        <Styled.CategorySelect
          value={selectedValue}
          onChange={handleSelectChange}
        >
          <option value="경제/경영">경제/경영</option>
          <option value="시/에세이">시/에세이</option>
          <option value="인문/사회">인문/사회</option>
          <option value="자연과학/기술">자연과학/기술</option>
          <option value="컴퓨터">컴퓨터</option>
          <option value="카테고리">카테고리</option>
          <option value="카테고리">카테고리</option>
          <option value="카테고리">카테고리</option>
          <option value="카테고리">카테고리</option>
          <option value="카테고리">카테고리</option>
        </Styled.CategorySelect>
        <Styled.SelectSpan onClick={handleSelectClick}>
          {selectedValue}
        </Styled.SelectSpan>
        {isCategoryListOpen && (
          <Styled.OptionsList>
            <Styled.OptionItem onClick={() => handleOptionClick('경제/경영')}>
              경제/경영
            </Styled.OptionItem>
            <Styled.OptionItem onClick={() => handleOptionClick('시/에세이')}>
              시/에세이
            </Styled.OptionItem>
            <Styled.OptionItem onClick={() => handleOptionClick('인문/사회')}>
              인문/사회
            </Styled.OptionItem>
            <Styled.OptionItem
              onClick={() => handleOptionClick('자연과학/기술')}
            >
              자연과학/기술
            </Styled.OptionItem>
            <Styled.OptionItem onClick={() => handleOptionClick('컴퓨터')}>
              컴퓨터
            </Styled.OptionItem>
            <Styled.OptionItem onClick={() => handleOptionClick('카테고리')}>
              카테고리
            </Styled.OptionItem>
            <Styled.OptionItem onClick={() => handleOptionClick('카테고리')}>
              카테고리
            </Styled.OptionItem>
            <Styled.OptionItem onClick={() => handleOptionClick('카테고리')}>
              카테고리
            </Styled.OptionItem>
            <Styled.OptionItem onClick={() => handleOptionClick('카테고리')}>
              카테고리
            </Styled.OptionItem>
            <Styled.OptionItem onClick={() => handleOptionClick('카테고리')}>
              카테고리
            </Styled.OptionItem>
          </Styled.OptionsList>
        )}
      </Styled.SelectContainer>
    </Styled.SelectMain>
  );
};

export default CategorySelects;
