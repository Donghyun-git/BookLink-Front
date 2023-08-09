import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './Styled';
import BackDrop from './modal/BackDrop';

const Rents = () => {
  const initialState = [
    {
      key: 1,
      image:
        'https://soccerquick.s3.ap-northeast-2.amazonaws.com/1687880142215.jpeg',
      name: '길동아',
      location: '서울 관악구',
      title: '삶의 무기가 되는 한마디',
      author: '발자타르 그라시안',
      publish: '다른상상',
      price: '18,000원',
      max_during_date: 2,
    },
    {
      key: 2,
      image:
        'https://soccerquick.s3.ap-northeast-2.amazonaws.com/1687880142215.jpeg',
      name: '길동아',
      location: '서울 관악구',
      title: '삶의 무기가 되는 한마디',
      author: '발자타르 그라시안',
      publish: '다른상상',
      price: '18,000원',
      max_during_date: 2,
    },
    {
      key: 3,
      image:
        'https://soccerquick.s3.ap-northeast-2.amazonaws.com/1687880142215.jpeg',
      name: '길동아',
      location: '서울 관악구',
      title: '삶의 무기가 되는 한마디',
      author: '발자타르 그라시안',
      publish: '다른상상',
      price: '18,000원',
      max_during_date: 2,
    },
    {
      key: 4,
      image:
        'https://soccerquick.s3.ap-northeast-2.amazonaws.com/1687880142215.jpeg',
      name: '길동아',
      location: '서울 관악구',
      title: '삶의 무기가 되는 한마디',
      author: '발자타르 그라시안',
      publish: '다른상상',
      price: '18,000원',
      max_during_date: 2,
    },
    {
      key: 5,
      image:
        'https://soccerquick.s3.ap-northeast-2.amazonaws.com/1687880142215.jpeg',
      name: '길동아',
      location: '서울 관악구',
      title: '삶의 무기가 되는 한마디',
      author: '발자타르 그라시안',
      publish: '다른상상',
      price: '18,000원',
      max_during_date: 2,
    },
    {
      key: 6,
      image:
        'https://soccerquick.s3.ap-northeast-2.amazonaws.com/1687880142215.jpeg',
      name: '길동아',
      location: '서울 관악구',
      title: '삶의 무기가 되는 한마디',
      author: '발자타르 그라시안',
      publish: '다른상상',
      price: '18,000원',
      max_during_date: 2,
    },
  ];

  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [cards, setCards] = useState(initialState);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openRentsModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeRentsModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const goToMap = useCallback(() => {
    navigate('/books/library-info');
  }, [navigate]);

  return (
    <Styled.RentsComponentDiv>
      <Styled.BooksComponentDiv>
        {cards.map((card) => {
          const {
            key,
            image,
            // name,
            // location,
            title,
            author,
            publish,
            price,
            max_during_date,
          } = card;
          return (
            <Styled.CardDiv key={key}>
              <Styled.RentsCardContainer>
                {/* <Styled.CardHeaderDiv>
                  <div>
                    <Styled.CardProfileImageDiv>
                      <Styled.CardProfileImage
                        src={image}
                        alt="카드 프로필 이미지"
                      />
                    </Styled.CardProfileImageDiv>
                  </div>
                  <Styled.CardProfileInfoDiv>
                    <Styled.CardProfileInfoUl>
                      <Styled.CardProfileInfoLi>
                        {name}
                      </Styled.CardProfileInfoLi>
                      <Styled.CardProfileInfoLi>
                        {location}
                      </Styled.CardProfileInfoLi>
                    </Styled.CardProfileInfoUl>
                  </Styled.CardProfileInfoDiv>
                </Styled.CardHeaderDiv> */}
                <Styled.CardContentsDiv>
                  <Styled.ContentsTitleDiv>{title}</Styled.ContentsTitleDiv>
                  <Styled.ContentsAuthorDiv>
                    <Styled.ContentSpan>저자</Styled.ContentSpan>
                    <Styled.ContentSpanRight>{author}</Styled.ContentSpanRight>
                  </Styled.ContentsAuthorDiv>
                  <Styled.ContentsPublishDiv>
                    <Styled.ContentSpan>출판</Styled.ContentSpan>
                    <Styled.ContentSpanRight>{publish}</Styled.ContentSpanRight>
                  </Styled.ContentsPublishDiv>
                </Styled.CardContentsDiv>
                <Styled.CardImageDiv>
                  <Styled.CardImage src={image} alt="책 이미지" />
                </Styled.CardImageDiv>

                <Styled.CardFooterDiv>
                  <ul>
                    <Styled.RentsLi>
                      <Styled.RentsLiSpan>대여료</Styled.RentsLiSpan>
                      <span>{price}</span>
                    </Styled.RentsLi>
                    <Styled.RentsLi>
                      <Styled.RentsLiSpan>대여 가능 시간</Styled.RentsLiSpan>
                      <span>최대 {max_during_date}개월</span>
                    </Styled.RentsLi>
                  </ul>
                  <Styled.RentsCardFooterButtonDiv>
                    <Styled.RentsCardButton onClick={openRentsModal}>
                      대여정보 확인하기
                    </Styled.RentsCardButton>
                    <Styled.RentsCardButton onClick={goToMap}>
                      내 주변 도서관 찾기
                    </Styled.RentsCardButton>
                  </Styled.RentsCardFooterButtonDiv>
                </Styled.CardFooterDiv>
              </Styled.RentsCardContainer>
            </Styled.CardDiv>
          );
        })}
      </Styled.BooksComponentDiv>
      {isModalOpen && <BackDrop onClose={closeRentsModal} />}
    </Styled.RentsComponentDiv>
  );
};

export default Rents;
