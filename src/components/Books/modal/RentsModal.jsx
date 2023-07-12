import { useState } from 'react';
import * as Styled from './Styled';

const RentsModal = ({ onClose }) => {
  const initialState = [
    {
      user: '1n2k3',
      name: '길동아',
      distance: 563,
      quality: '상',
      rentFee: 2000,
      rentMonth: 3,
      location: '서울 강남구 청담동',
    },
    {
      user: '2n2k3',
      name: '길동아',
      distance: 563,
      quality: '상',
      rentFee: 2000,
      rentMonth: 3,
      location: '서울 강남구 청담동',
    },
    {
      user: '3n2k3',
      name: '길동아',
      distance: 563,
      quality: '상',
      rentFee: 2000,
      rentMonth: 3,
      location: '서울 강남구 청담동',
    },
    {
      user: '4n2k3',
      name: '길동아',
      distance: 563,
      quality: '상',
      rentFee: 2000,
      rentMonth: 3,
      location: '서울 강남구 청담동',
    },
    {
      user: '5n2k3',
      name: '길동아',
      distance: 563,
      quality: '상',
      rentFee: 2000,
      rentMonth: 3,
      location: '서울 강남구 청담동',
    },
    {
      user: '6n2k3',
      name: '길동아',
      distance: 563,
      quality: '상',
      rentFee: 2000,
      rentMonth: 3,
      location: '서울 강남구 청담동',
    },
    {
      user: '7n2k3',
      name: '길동아',
      distance: 563,
      quality: '상',
      rentFee: 2000,
      rentMonth: 3,
      location: '서울 강남구 청담동',
    },
    {
      user: '8n2k3',
      name: '길동아',
      distance: 563,
      quality: '상',
      rentFee: 2000,
      rentMonth: 3,
      location: '서울 강남구 청담동',
    },
    {
      user: '9n2k3',
      name: '길동아',
      distance: 563,
      quality: '상',
      rentFee: 2000,
      rentMonth: 3,
      location: '서울 강남구 청담동',
    },
    {
      user: '10n2k3',
      name: '길동아',
      distance: 563,
      quality: '상',
      rentFee: 2000,
      rentMonth: 3,
      location: '서울 강남구 청담동',
    },
    {
      user: '11n2k3',
      name: '길동아',
      distance: 563,
      quality: '상',
      rentFee: 2000,
      rentMonth: 3,
      location: '서울 강남구 청담동',
    },
    {
      user: '12n2k3',
      name: '길동아',
      distance: 563,
      quality: '상',
      rentFee: 2000,
      rentMonth: 3,
      location: '서울 강남구 청담동',
    },
  ];

  const [cards, setCards] = useState(initialState);

  return (
    <Styled.RentsModalDiv>
      <Styled.RentsModalRow>
        <Styled.RentsModalCloseButton onClick={onClose}>
          닫기
        </Styled.RentsModalCloseButton>
        <Styled.RentsModalHeader>
          <Styled.RentsModalInfoDiv>
            <div>삶의 무기가 되는 한마디</div>
            <div>
              서울 강남구 청담동 근처 <span>21개</span>
            </div>
            <div>마이페이지에서 주소 변경하기</div>
          </Styled.RentsModalInfoDiv>
          <Styled.RentsModalFilterDiv>
            <ul>
              <li>
                <button>
                  <div>거리순</div>
                </button>
              </li>
              <li>
                <button>
                  <div>대여료순</div>
                </button>
              </li>
            </ul>
          </Styled.RentsModalFilterDiv>
        </Styled.RentsModalHeader>
        <Styled.RentsModalContainer>
          {cards.map((card) => {
            const {
              user,
              name,
              distance,
              quality,
              rentFee,
              rentMonth,
              location,
            } = card;
            return (
              <Styled.RentsModalCardDiv key={user}>
                <Styled.ProfileDiv>
                  <Styled.ProfileImageDiv>
                    {/* <img src="" alt="" /> */}
                  </Styled.ProfileImageDiv>
                  <Styled.UserProfileDiv>
                    <div>{name} 님의 책방</div>
                    <div>{distance} m</div>
                  </Styled.UserProfileDiv>
                </Styled.ProfileDiv>
                <Styled.RentsInfoDiv>
                  <ul>
                    <li>도서품질</li>
                    <li>{quality}</li>
                  </ul>

                  <ul>
                    <li>대여료</li>
                    <li>{rentFee}원 ~</li>
                  </ul>

                  <ul>
                    <li>대여 가능 기간</li>
                    <li>최대 {rentMonth}개월</li>
                  </ul>

                  <ul>
                    <li>대여 장소</li>
                    <li>{location}</li>
                  </ul>
                </Styled.RentsInfoDiv>
              </Styled.RentsModalCardDiv>
            );
          })}
        </Styled.RentsModalContainer>
        <Styled.RentsModalFooter>
          <ul>
            <li>
              <button>1</button>
            </li>
            <li>
              <button>2</button>
            </li>
            <li>
              <button>3</button>
            </li>
          </ul>
        </Styled.RentsModalFooter>
      </Styled.RentsModalRow>
    </Styled.RentsModalDiv>
  );
};

export default RentsModal;
