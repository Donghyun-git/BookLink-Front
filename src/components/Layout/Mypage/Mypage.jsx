import * as S from './style';
import { useGetMyBookLinkQuery } from '../../../services/mypage/useGetMyBookLinkQuery';
import { useGetMyBookListQuery } from '../../../services/mypage/useGetMyBookListQuery';
import Profile from '../../Profile/Profile';
import NavMenu from '../../Mypage/Menu/NavMenu';
import ActivityStatus from '../../Mypage/MyActive/ActivityStatus';
// import MypageRentCard from '../../Mypage/card/MypageRentCard';
import ContentsLayout from '../../../layout/page/contents/ContentsLayout';

import * as Styled from '../../Books/Styled';

const Mypage = () => {
  const { data } = useGetMyBookLinkQuery();
  const { data: listData } = useGetMyBookListQuery();
  // eslint-disable-next-line no-unused-vars
  const { myBook, myRent, rentHistory, communityHistory } = data;

  const { myRecordBookDtoList: bookList } = listData;
  console.log(bookList);
  return (
    <ContentsLayout>
      <Profile data={data} />
      <S.Wrapper>
        <NavMenu />
        <ActivityStatus myBook={myBook} myRent={myRent} />
        <div className="writed">
          <div className="title">
            <h3>내가 소장한 도서</h3>
          </div>
          <div className="writed-container">
            <Styled.RentsComponentDiv>
              <Styled.BooksComponentDiv>
                {bookList?.map((card, index) => {
                  const {
                    cover,
                    title,
                    authors,
                    publisher,
                    rental_fee,
                    max_date,
                  } = card;
                  return (
                    <Styled.CardDiv
                      key={index}
                      style={{ border: '0.5px solid #00e37d' }}
                    >
                      <Styled.RentsCardContainer>
                        <div>
                          <Styled.CardContentsDiv>
                            <Styled.ContentsTitleDiv>
                              {title}
                            </Styled.ContentsTitleDiv>
                            <Styled.ContentsAuthorDiv>
                              <Styled.ContentSpan>저자</Styled.ContentSpan>
                              <Styled.ContentSpanRight>
                                {authors}
                              </Styled.ContentSpanRight>
                            </Styled.ContentsAuthorDiv>
                            <Styled.ContentsPublishDiv>
                              <Styled.ContentSpan>출판</Styled.ContentSpan>
                              <Styled.ContentSpanRight>
                                {publisher}
                              </Styled.ContentSpanRight>
                            </Styled.ContentsPublishDiv>
                          </Styled.CardContentsDiv>
                          <Styled.CardImageDiv>
                            <Styled.CardImage src={cover} alt="책 이미지" />
                          </Styled.CardImageDiv>
                          <ul>
                            <Styled.RentsLi>
                              <Styled.RentsLiSpan>대여료</Styled.RentsLiSpan>
                              <span>{rental_fee}원</span>
                            </Styled.RentsLi>
                            <Styled.RentsLi>
                              <Styled.RentsLiSpan>
                                대여 가능 시간
                              </Styled.RentsLiSpan>
                              <span>최대 {max_date}일</span>
                            </Styled.RentsLi>
                          </ul>
                        </div>
                      </Styled.RentsCardContainer>
                    </Styled.CardDiv>
                  );
                })}
              </Styled.BooksComponentDiv>
            </Styled.RentsComponentDiv>
          </div>
        </div>
        <div className="message">
          <div className="message-container">
            <div className="title">
              <h3>쪽지 현황</h3>
            </div>
          </div>
        </div>
        {/* <MypageRentCard title="대여" list={rentHistory} />
        <MypageRentCard title="커뮤니티" list={communityHistory} /> */}
      </S.Wrapper>
    </ContentsLayout>
  );
};

export default Mypage;
