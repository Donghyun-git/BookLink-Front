import { Fragment } from 'react';
import { useDetailContext } from '../context/detailContext';
import SelfDevelopCard from './SelfDevelopCard';
import RentInfoCard from './RentInfoCard';
import RelationCard from './RelationCard';
import * as Styled from './Styled';

const BookAside = () => {
  const { state } = useDetailContext();

  const recommended = state.book.recommended_books;
  const relatedPosts = state.book.related_posts;

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
            {recommended.map((book) => {
              return (
                <Fragment key={book.isbn13}>
                  <SelfDevelopCard book={book} />
                </Fragment>
              );
            })}
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
          {relatedPosts.length === 0 ? (
            <div>아직 관련된 게시글이 없어요.</div>
          ) : (
            relatedPosts.map((post, idx) => {
              return (
                // 일단 idx
                <Fragment key={idx}>
                  <RelationCard post={post} />
                </Fragment>
              );
            })
          )}
        </div>
      </Styled.BookAsideSection>
    </Styled.BookAside>
  );
};

export default BookAside;
