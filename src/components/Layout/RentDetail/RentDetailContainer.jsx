import Profile from '../../Profile/Profile';
import RentDetail from '../../Books/RentDetail/RentDetail';
import { RentContext } from '../../../context/RentContext/rentContext';
import { useReducer } from 'react';
import {
  rentReducer,
  initialState,
} from '../../../context/RentContext/rentReducer';
import * as Styled from './Styled';

const RentDetailContainer = () => {
  const [state, dispatch] = useReducer(rentReducer, initialState);
  const { detail } = state;

  const bookRentInfoDtoList = detail.bookRentInfoDtoList || [];

  const { writer } =
    bookRentInfoDtoList.length > 0 ? bookRentInfoDtoList[0] : {};

  const {
    record_cnt: recordCnt,
    rent_available_cnt: rentAvailableCnt,
    renting_cnt: rentingCnt,
  } = detail;

  return (
    <Styled.RentDetailContainer>
      <RentContext.Provider value={{ state, dispatch }}>
        <Styled.ProfileContainer>
          <Profile
            name={writer}
            recordCnt={recordCnt}
            rentAvailableCnt={rentAvailableCnt}
            rentingCnt={rentingCnt}
          />
        </Styled.ProfileContainer>
        <RentDetail />
      </RentContext.Provider>
    </Styled.RentDetailContainer>
  );
};

export default RentDetailContainer;
