import SelfDevelopCard from './SelfDevelopCard';
import RentInfoCard from './RentInfoCard';
import RelationCard from './RelationCard';
import * as Styled from './Styled';

const BookAside = ({ book }) => {
  return (
    <Styled.BookAside>
      <Styled.BookAsideSection>
        <Styled.AsideCardTitle>
          <h2>자기계발 추천도서</h2>
          <button>
            <div>더보기</div>
          </button>
        </Styled.AsideCardTitle>
        <div>
          <ul>
            <SelfDevelopCard book={book} />
            <SelfDevelopCard book={book} />
            <SelfDevelopCard book={book} />
          </ul>
        </div>
      </Styled.BookAsideSection>
      <Styled.BookAsideSection>
        <Styled.AsideCardTitle>
          <h2>내 주변 대여정보</h2>
          <button>
            <div>더보기</div>
          </button>
        </Styled.AsideCardTitle>

        <div>
          <RentInfoCard />
          <RentInfoCard />
          <RentInfoCard />
        </div>
      </Styled.BookAsideSection>

      <Styled.BookAsideSection>
        <Styled.AsideCardTitle>
          <h2>이 책과 관련된 게시글</h2>
          <button>
            <div>더보기</div>
          </button>
        </Styled.AsideCardTitle>
        <div>
          <RelationCard />
          <RelationCard />
          <RelationCard />
        </div>
      </Styled.BookAsideSection>
    </Styled.BookAside>
  );
};

export default BookAside;
