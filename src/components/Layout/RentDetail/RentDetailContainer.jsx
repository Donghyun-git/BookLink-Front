import Profile from '../../Profile/Profile';
import { useGetMyBookLinkQuery } from '../../../services/mypage/useGetMyBookLinkQuery';
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

  const { record_cnt, rent_available_cnt, renting_cnt, writer } = detail;

  console.log(record_cnt, rent_available_cnt, renting_cnt, writer);

  const { data } = useGetMyBookLinkQuery();

  console.log(data);
  const cleansingData = {
    ...data,
    myBook: {
      ...data.myBook,
      register: rent_available_cnt,
      report: record_cnt,
    },
    myRent: {
      ...data.myRent,
      renting: renting_cnt,
    },
    profile: {
      ...data.profile,
      name: writer,
      email: '',
      address: '',
      image: '',
    },
  };

  return (
    <Styled.RentDetailContainer>
      <RentContext.Provider value={{ state, dispatch }}>
        <Styled.ProfileContainer>
          <Profile data={cleansingData} />
        </Styled.ProfileContainer>
        <RentDetail />
      </RentContext.Provider>
    </Styled.RentDetailContainer>
  );
};

export default RentDetailContainer;
