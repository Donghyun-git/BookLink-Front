import * as S from './style';
import { useGetMyBookLinkQuery } from '../../../services/mypage/useGetMyBookLinkQuery';
import Profile from '../../Profile/Profile';
import NavMenu from '../../Mypage/Menu/NavMenu';
import ActivityStatus from '../../Mypage/MyActive/ActivityStatus';
import MypageRentCard from '../../Mypage/card/MypageRentCard';
import ContentsLayout from '../../../layout/page/contents/ContentsLayout';

const Mypage = () => {
  const { data } = useGetMyBookLinkQuery();
  const { myBook, myRent, rentHistory, communityHistory } = data;
  console.log(data);
  return (
    <ContentsLayout>
      <Profile data={data} />
      <S.Wrapper>
        <NavMenu />
        <ActivityStatus myBook={myBook} myRent={myRent} />
        <h2>관리</h2>
        <MypageRentCard title="대여" list={rentHistory} />
        <MypageRentCard title="커뮤니티" list={communityHistory} />
      </S.Wrapper>
    </ContentsLayout>
  );
};

export default Mypage;
