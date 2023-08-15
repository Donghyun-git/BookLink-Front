import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useMypageContext } from '../../../context/MypageContext/mypageContext';
import { getMyBookLink } from '../../../lib/apis/mypage/mypageService';
import * as Styled from './Styled';
import Profile from '../../Profile/Profile';
import NavMenu from '../../Mypage/Menu/NavMenu';
import ActivityStatus from '../../Mypage/MyActive/ActivityStatus';
import MypageRentCard from '../../Mypage/card/MypageRentCard';
import MypageCommunityCard from '../../Mypage/card/MypageCommunityCard';

const MypageContainer = () => {
  const { state, dispatch } = useMypageContext();

  const name = useSelector((state) => state.USER.nickname);
  const email = useSelector((state) => state.USER.email);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getMyBookLink();

        console.log('useEffect', data);
        dispatch({ type: 'MYPAGE/MYBOOKLINK', payload: data.data });
      } catch (error) {
        console.error(error);
      }
    })();
  }, [dispatch]);
  console.log(state);
  return (
    <Styled.MypageContainer>
      <Profile name={name} email={email} />
      <NavMenu />
      <ActivityStatus />
      <div>
        <Styled.MypageCardTitle>관리</Styled.MypageCardTitle>
      </div>
      <MypageRentCard />
      <MypageCommunityCard />
    </Styled.MypageContainer>
  );
};

export default MypageContainer;
