import { useReducer } from 'react';
import { MypageContext } from '../../../context/MypageContext/mypageContext';
import {
  mypageReducer,
  initialState,
} from '../../../context/MypageContext/mypageReducer';
import MypageContainer from './MypageContainer';
import * as Styled from './Styled';

const MypageMain = () => {
  const [state, dispatch] = useReducer(mypageReducer, initialState);
  return (
    <Styled.MypageMain>
      <MypageContext.Provider value={{ state, dispatch }}>
        <MypageContainer />
      </MypageContext.Provider>
    </Styled.MypageMain>
  );
};

export default MypageMain;
