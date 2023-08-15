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

  return (
    <Styled.RentDetailContainer>
      <RentContext.Provider value={{ state, dispatch }}>
        <Styled.ProfileContainer>
          <Profile name={'넌 누구니'} email={'hmm@hmmm.co.kr'} />
        </Styled.ProfileContainer>
        <RentDetail />
      </RentContext.Provider>
    </Styled.RentDetailContainer>
  );
};

export default RentDetailContainer;
