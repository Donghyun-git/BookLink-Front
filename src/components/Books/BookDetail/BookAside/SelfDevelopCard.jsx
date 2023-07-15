import * as Styled from './Styled';

const SelfDevelopCard = ({ book }) => {
  return (
    <>
      <Styled.AsideCard1>
        <div>
          <Styled.AsideCard1_ImageDiv>
            <img src={book.cover} alt="책 이미지" />
          </Styled.AsideCard1_ImageDiv>
        </div>
        <Styled.AsideCard1_ContentDiv>
          <h3>도파민 네이션</h3>
          <ul>
            <li>
              <span>저자</span>
              <strong>에나 최대 몇글자 헴키</strong>
            </li>
            <li>
              <span>출판사</span> <strong>흐름 몇글자 출한</strong>
            </li>
          </ul>
          <ul>
            <li>
              <span>출판일</span>
              <strong>2023.06.23</strong>
            </li>
            <li>
              <span>정가</span>
              <strong>18,000원</strong>
            </li>
          </ul>
        </Styled.AsideCard1_ContentDiv>
      </Styled.AsideCard1>
    </>
  );
};

export default SelfDevelopCard;
