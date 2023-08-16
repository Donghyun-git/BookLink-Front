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

  const { myInfo } = state || {};
  const { address, canRent, image, renting, likedBooks } = myInfo || {};

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getMyBookLink();

        dispatch({ type: 'MYPAGE/MYBOOKLINK', payload: data.data });
      } catch (error) {
        console.error(error);
      }
    })();
  }, [dispatch]);

  return (
    <Styled.MypageContainer>
      <Profile
        name={name}
        email={email}
        address={address}
        image={image}
        rentAvailableCnt={canRent}
        rentingCnt={renting}
        recordCnt={likedBooks}
      />
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
