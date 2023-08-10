import { useEffect } from 'react';
import { useMypageContext } from '../../../context/MypageContext/mypageContext';
import { getMyBookLink } from '../../../lib/apis/mypage/mypageService';
import * as Styled from './Styled';
import Profile from '../../Mypage/Profile/Profile';
import NavMenu from '../../Mypage/Menu/NavMenu';
import ActivityStatus from '../../Mypage/MyActive/ActivityStatus';
import MypageCard from '../../Mypage/common/MypageCard';

const MypageContainer = () => {
  const { state, dispatch } = useMypageContext();

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
      <Profile />
      <NavMenu />
      <ActivityStatus />
      <div>
        <Styled.MypageCardTitle>관리</Styled.MypageCardTitle>
      </div>
      <MypageCard
        title={'대여'}
        list={['결제내역', '연체된 도서']}
        table={['no', '결제일', '유형', '내용', '금액', '결제정보']}
      />
      <MypageCard
        title={'커뮤니티 활동'}
        list={['후기', '자유글', '독후감', '독서 모임', '댓글']}
        table={['no', '유형', '도서명', '내용', '작성일', '좋아요', '답글']}
      />
    </Styled.MypageContainer>
  );
};

export default MypageContainer;
