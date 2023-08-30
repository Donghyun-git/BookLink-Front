import { useState, useEffect } from 'react';
import * as Styled from './Styled';
import { ko } from 'date-fns/locale';
import BackDrop from '../../../Common/BackDropLayer/BackDrop';
import { useModal } from '../../../../hooks/Modal/useModal';

const AsideRight = ({
  title,
  rentalFee,
  rentLocation,
  rentMethod,
  maxDate,
  minDate,
}) => {
  const [durationOptions, setDurationOptions] = useState([]);
  const [selectDurate, setSelectDurate] = useState(0);
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal(false);

  const handleSelectDurateChange = (e) => {
    setSelectDurate(e.target.value);
  };

  useEffect(() => {
    const durationArray = [];

    let current = maxDate;
    while (current >= minDate) {
      durationArray.unshift(current);
      current -= minDate;
    }

    setDurationOptions(durationArray);
  }, [maxDate, minDate]);

  return (
    <Styled.AsideRightDiv>
      <Styled.RentIntroDiv>
        <div>
          <h3>대여 장소</h3>
          <p>{rentLocation}</p>
        </div>
        <div>
          <h3>대여 방법</h3>
          <p>{rentMethod}</p>
        </div>
      </Styled.RentIntroDiv>
      <Styled.RentSubmitDiv>
        <div>
          <h4>대여 기간 선택</h4>
          <label htmlFor="rentDuration" className="hidden">
            대여 기간 선택
          </label>
          <select
            name="rentDuration"
            id="rentDuration"
            onChange={handleSelectDurateChange}
          >
            <option value="대여 기간 선택">대여 기간 선택</option>
            {durationOptions.map((count) => {
              return (
                <option key={count} value={count}>
                  {count}일
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <h4>대여료</h4>
          <span>{rentalFee.toLocaleString(ko)}원</span>
        </div>
        <div>
          <button onClick={() => handleOpenModal(selectDurate)}>
            <span>대여 신청하기</span>
          </button>
        </div>
      </Styled.RentSubmitDiv>
      {isModalOpen && (
        <BackDrop
          closeModal={handleCloseModal}
          target={'chat'}
          duration={durationOptions}
          title={title}
          rentalFee={rentalFee}
          selectDate={selectDurate}
        />
      )}
    </Styled.AsideRightDiv>
  );
};

export default AsideRight;
