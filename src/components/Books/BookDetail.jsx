import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import * as bookService from '../../apis/booksService';
import * as Styled from './BookDetail/Styled';

const BookDetail = () => {
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { isbn } = useParams();
  // author: '세이노(SayNo) (지은이)';
  // cover: 'https://image.aladin.co.kr/product/30929/51/coversum/s302832892_1.jpg';
  // description: '2000년부터 발표된 그의 주옥같은 글들. 독자들이 자발적으로 만든 제본서는 물론, 전자책과 앱까지 나왔던 《세이노의 가르침》이 드디어 전국 서점에서 독자들을 마주한다. 여러 판본을 모으고 저자의 확인을 거쳐 최근 생각을 추가로 수록하였다. 정식 출간본에만 추가로 수록된 글들은 목차와 본문에 별도 표시하였다.';
  // isbn13: '9791168473690';
  // like_cnt: 0;
  // owner_cnt: 2;
  // pubDate: '2023-03-02';
  // publisher: '데이원';
  // review_cnt: 0;
  // title: '세이노의 가르침';

  useEffect(() => {
    (async () => {
      try {
        const { data } = await bookService.getOneBooks(isbn);
        console.log(data);
        if (!data) throw new Error('데이터를 불러오는데 실패하였습니다.');

        setBook({ ...data.data.item[0] });
      } catch (error) {
        console.error(error);
        setError('에러 컴포넌트 만들기');
      }
    })();
  }, [isbn]);

  return (
    <Styled.BookDetailDiv>
      {error ? (
        <div>{error}</div>
      ) : (
        <Fragment>
          <Styled.BookInfoWrap>
            <h2>도서 정보</h2>
            <Styled.BookInfoContainer>
              <Styled.BookImageDiv className="book-image">
                <img src={book.cover} alt="책 이미지" />
              </Styled.BookImageDiv>
              <div className="book-info">
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
                <div>
                  <h4>책 소개</h4>
                  <p>{book.description}</p>
                </div>
                <div className="button-area">
                  <button>
                    <div>대여정보 확인하기</div>
                  </button>
                  <button>
                    <div>소장 등록하기</div>
                  </button>
                </div>
              </div>
            </Styled.BookInfoContainer>
            <div className="book-review">
              <h2>도서 후기</h2>
              <form>
                <div>{/* <img src="" alt="프로필 이미지" /> */}</div>
                <div>
                  <label htmlFor="comment" className="hidden">
                    댓글
                  </label>
                  <input type="text" id="comment" />
                  <button>
                    <span>취소</span>
                  </button>
                  <button>
                    <span>작성하기</span>
                  </button>
                </div>
              </form>
              <div className="comment-filter">
                <div>공감순</div>
                <div>최신순</div>
              </div>

              <div className="comment-card">
                <div>{/* <img src="" alt="프로필 이미지" /> */}</div>
                <div>
                  <div>
                    <div>
                      사용자 닉네임 <span>2022.06.21</span>
                    </div>
                    <div>
                      <div className="comment-option">
                        <div>{/* <img src="" alt="옵션 이미지" /> */}</div>
                        <ul>
                          <li>신고하기</li>
                          <li>수정</li>
                          <li>삭제</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    예리한 칼날 같고 냉정하지만 그 안에는 사람을 위하는 진실된
                    마음이있다. 사는동안 수십 번은 더 읽고 싶은 책. 뜬구름 잡는
                    얘기가 아닌 그야말로 현실속에 녹아내리는 체험담이며 질문에
                    대한 응답도 구체적으로 적용할수 있게 해주신다.그저 저렴한
                    값에 이렇게 귀한 책을 접하게 할수있게 해주신 세이노님께
                    감사할 따름이다.
                  </div>
                  <div className="likes-button">
                    <div>{/* <img src="" alt="좋아요 이미지" /> */}</div>
                    <div>1</div>
                    <div>
                      <button>답글 달기</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Styled.BookInfoWrap>
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
                <Styled.AsideCard2>
                  <li>
                    <Styled.AsideCard2_ImageDiv>
                      {/* <img src="" alt="프로필 이미지" /> */}
                    </Styled.AsideCard2_ImageDiv>
                  </li>
                  <li>
                    <Styled.AsideCard2_UserInfoDiv>
                      <span>길동아 님의 책방</span> <span>2.2km</span>
                    </Styled.AsideCard2_UserInfoDiv>
                    <Styled.AsideCard2_RentInfoDiv>
                      <ul>
                        <li>
                          <span>대여 가능 기간</span>
                          <span>최대 14일</span>
                        </li>
                        <li>
                          <span>대여료</span>
                          <span>1000원</span>
                        </li>
                      </ul>
                    </Styled.AsideCard2_RentInfoDiv>
                  </li>
                </Styled.AsideCard2>
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
                <Styled.AsideCard3>
                  <li>
                    <div>
                      <div>{/* <img src="" alt="프로필 이미지" /> */}</div>
                      <div>
                        <span>작성자명</span>
                      </div>
                    </div>
                    <div>
                      <span>2023.06.23</span>
                    </div>
                  </li>
                  <li>
                    <h4>게시글 제목</h4>
                  </li>
                  <li>
                    <p>게시글 내용</p>
                  </li>
                </Styled.AsideCard3>
              </div>
            </Styled.BookAsideSection>
          </Styled.BookAside>
        </Fragment>
      )}
    </Styled.BookDetailDiv>
  );
};

export default BookDetail;
