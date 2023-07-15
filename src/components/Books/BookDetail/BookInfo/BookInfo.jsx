import * as Styled from './Styled';
import CommentCard from './CommentCard';

const BookInfo = ({ book }) => {
  return (
    <Styled.BookInfoWrap>
      <Styled.BookInfoContainer>
        <Styled.BookInfoLeftDiv>
          <Styled.BookImageBackgroundDiv>
            <Styled.BookImageDiv className="book-image">
              <img src={book.cover} alt="책 이미지" />
            </Styled.BookImageDiv>
          </Styled.BookImageBackgroundDiv>
          <Styled.BookInfoButtonDiv>
            <button>
              <div>대여정보 확인하기</div>
            </button>
            <button>
              <div>소장 등록하기</div>
            </button>
          </Styled.BookInfoButtonDiv>
        </Styled.BookInfoLeftDiv>

        <Styled.BookInfoRightDiv>
          <h3>{book.title}</h3>
          <div>
            <ul>
              <li>
                <span>저자</span>
                <strong>{book.title}</strong>
              </li>
              <li>
                <span>출판</span>
                <strong>{book.publisher}</strong>
              </li>
              <li>
                <span>출판일</span>
                <strong>{book.pubDate}</strong>
              </li>
            </ul>
          </div>
          <Styled.BookInfoDescriptionDiv>
            <h4>책 소개</h4>
            <p>{book.description}</p>
          </Styled.BookInfoDescriptionDiv>
        </Styled.BookInfoRightDiv>
      </Styled.BookInfoContainer>
      <Styled.BookReviewWrap>
        <h2>도서 후기</h2>
        <span>12개</span>
        <Styled.BookReviewWriteForm>
          <Styled.BookReviewUserProfileDiv>
            {/* <img src="" alt="프로필 이미지" /> */}
          </Styled.BookReviewUserProfileDiv>
          <Styled.BookReviewCommentDiv>
            <label htmlFor="comment" className="hidden">
              댓글
            </label>
            <input
              type="text"
              id="comment"
              placeholder="댓글을 입력해주세요."
            />
            <div>
              <span>취소</span>
              <button>
                <span className="write">작성하기</span>
              </button>
            </div>
          </Styled.BookReviewCommentDiv>
        </Styled.BookReviewWriteForm>
        <Styled.CommentFilterDiv>
          <div>공감순</div>
          <div>최신순</div>
        </Styled.CommentFilterDiv>
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </Styled.BookReviewWrap>
    </Styled.BookInfoWrap>
  );
};

export default BookInfo;
