import React from 'react';
import * as Styled from './Styled';
import { ko } from 'date-fns/locale';

const RentApplyModal = ({
  title,
  rentalFee,
  duration,
  selectDate,
  closeModal,
}) => {
  const selected = duration.filter((count) => selectDate === count.toString());

  return (
    <Styled.RentApplyModal>
      <Styled.RentApplyContent>
        <Styled.Title>
          <h1>대여 신청 정보를 확인하신 후 1:1 채팅을 개설해 주세요.</h1>
        </Styled.Title>
        <Styled.RentApplyInfo>
          <h2>대여 신청하기 안내사항</h2>
          <Styled.RentApplyInfoImgDiv>
            <Styled.MockImg></Styled.MockImg>
            {/* <img src="#" alt="대여 안내" /> */}
            <Styled.MockImg></Styled.MockImg>
            {/* <img src="#" alt="대여 안내" /> */}
          </Styled.RentApplyInfoImgDiv>
          <Styled.Description>
            <p>
              대여 신청하기 시 책을 소장하고 있는 사용자와의 1:1 채팅이
              개설됩니다.
            </p>
            <p>
              책을 소장하고 있는 이용자가 등록한 대여 장소와 대여 벙법을
              확인하신 후 1:1 채팅을 개설해 주세요.
            </p>
          </Styled.Description>
          <Styled.Description>
            <p>
              반드시 채팅을 통해 대여 시간 및 장소를 협의하신 후에 결제를 진행해
              주시길 바랍니다.
            </p>
            <p>
              협의가 끝난 후 책을 소장하고 있는 사용자가 결제 양식을 보내면 채팅
              내에서 결제하기가 진행됩니다.
            </p>
          </Styled.Description>
        </Styled.RentApplyInfo>
        <Styled.Caution>
          <h3>
            *반드시 대여 신청하기 안내사항을 확인하신 후 1:1 채팅을 개설해
            주세요.
          </h3>
          <p>
            북링크에서는 안내사항 미숙지나 이용자 간 발생한 실수로 인해 발생하는
            피해를 책임지지 않습니다.
          </p>
        </Styled.Caution>
        <Styled.RentInfoBox>
          <ul>
            <li>
              <h4>대여 도서</h4>
              <span>{title}</span>
            </li>
            <li>
              <h4>대여 기간</h4>
              <label htmlFor="rentDuration" className="hidden">
                대여 기간 선택
              </label>
              <select name="rentDuration" id="rentDuration">
                <option key={selected} value={selected}>
                  {selected}일
                </option>
                {duration.map((count, index) => {
                  if (selectDate === count.toString()) {
                    return <React.Fragment key={index} />;
                  } else {
                    return (
                      <option key={index} value={count}>
                        {count}일
                      </option>
                    );
                  }
                })}
              </select>
            </li>
            <li>
              <h4>대여료</h4>
              <span>{rentalFee.toLocaleString(ko)}원</span>
            </li>
          </ul>
        </Styled.RentInfoBox>
        <Styled.RentApplyButtonBox>
          <button onClick={() => closeModal()}>
            <span>취소하기</span>
          </button>
          <button>
            <span>1 : 1 채팅하기</span>
          </button>
        </Styled.RentApplyButtonBox>
      </Styled.RentApplyContent>
    </Styled.RentApplyModal>
  );
};

export default RentApplyModal;
