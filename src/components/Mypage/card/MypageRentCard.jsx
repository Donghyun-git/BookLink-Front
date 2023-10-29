import { useState } from 'react';
import * as S from './style';

import { ListGroup } from '../ListGroup';
import { ListButton } from '../ListButton';
import { ListInfo } from '../ListInfo';

const MypageRentCard = ({ title, list }) => {
  const [rentListValue, setRentListValue] = useState('1');
  const [communityListValue, setCommunityListValue] = useState('1');

  const handleChangeRentListValue = (value) => {
    setRentListValue(value);
  };

  const handleChangeCommunityListValue = (value) => {
    setCommunityListValue(value);
  };

  return (
    <S.Wrapper>
      <S.Contents>
        <S.MypageCardTitle>
          <h3>{title}</h3>
        </S.MypageCardTitle>
        <S.ListDiv>
          <S.LeftList>
            {title === '대여' ? (
              <ListGroup
                name="rent"
                value={rentListValue}
                onChange={handleChangeRentListValue}
              >
                <ListButton label="결제 내역" value="1" />
                <ListButton label="연체된 도서" value="2" />
              </ListGroup>
            ) : (
              <ListGroup
                name="rent"
                value={communityListValue}
                onChange={handleChangeCommunityListValue}
              >
                <ListButton label="후기" value="1" />
                <ListButton label="자유글" value="2" />
                <ListButton label="독후감" value="3" />
                <ListButton label="독서모임" value="4" />
                <ListButton label="댓글" value="5" />
              </ListGroup>
            )}
          </S.LeftList>
          <S.RightList>
            {title === '대여' && rentListValue === '1' ? (
              <ListInfo count={6} list={list}>
                <li>
                  <span>no</span>
                </li>
                <li>
                  <span>결제일</span>
                </li>
                <li>
                  <span>유형</span>
                </li>
                <li>
                  <span>내용</span>
                </li>
                <li>
                  <span>금액</span>
                </li>
                <li className="price-info">
                  <span>결제정보</span>
                </li>
              </ListInfo>
            ) : title === '대여' && rentListValue === '2' ? (
              <ListInfo count={7}>
                <li>
                  <span>no</span>
                </li>
                <li>
                  <span>상태</span>
                </li>
                <li>
                  <span>도서명</span>
                </li>
                <li>
                  <span>대여한 책방</span>
                </li>
                <li>
                  <span>도서 반납일</span>
                </li>
                <li>
                  <span>추가 대여로</span>
                </li>
                <li>
                  <span>반납 장소</span>
                </li>
              </ListInfo>
            ) : null}
          </S.RightList>
        </S.ListDiv>
      </S.Contents>
    </S.Wrapper>
  );
};

export default MypageRentCard;
