import { useState, useEffect } from 'react';
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

  const [profile, setProfile] = useState({});
  const [myBook, setMyBook] = useState({});
  const [myRent, setMyRent] = useState({});
  const [rentHistory, setRentHistory] = useState([]);
  const [communityHistory, setCommunityHistory] = useState([]);

  const { myInfo } = state || {};
  const { address, canRent, image, renting, likedBooks } = myInfo || {};

  const getData = async () => {
    const { data } = await getMyBookLink();
    const { profile, myBook, myRent, rentHistory, communityHistory } = data;
    setProfile(profile);
    setMyBook(myBook);
    setMyRent(myRent);
    setRentHistory(rentHistory);
    setCommunityHistory(communityHistory);
  };

  useEffect(() => {
    getData();
  }, [getMyBookLink]);

  /*useEffect(() => {
    (async () => {
      try {
        const { data } = await getMyBookLink();

        dispatch({ type: 'MYPAGE/MYBOOKLINK', payload: data.data });
      } catch (error) {
        console.error(error);
      }
    })();
  }, [dispatch]);*/

  /*{
    "status": "OK",
    "message": "성공",
    "data": {
        "profile": {
            "image": "https://booklink-bucket.s3.ap-northeast-2.amazonaws.com/%EC%9C%A0%EB%A6%AC.png",
            "name": "손채영",
            "nickname": "하이",
            "email": "cyson@naver.com",
            "birth": "2005-12-25",
            "address": "서울 마포구"
        },
        "myBook": {
            "register": 5,
            "rent": 3,
            "like": 9,
            "report": 2
        },
        "myRent": {
            "renting": 1,
            "lending": 1,
            "rentTotal": 1,
            "lendTotal": 2
        },
        "rentHistory": [
            {
                "date": "2023-07-26T16:42:00",
                "type": "결제",
                "content": "대여료 결제",
                "price": 3000,
                "info_title": "피프티 피플",
                "info_author": "정세랑",
                "info_publisher": "창비",
                "info_owner": "길동아",
                "info_rent_from": "2023-07-26",
                "info_rent_to": "2023-08-25",
                "info_card_name": "초록현대카드",
                "return_location": null
            }
        ],
        "communityHistory": [
            {
                "type": null,
                "postId": 6,
                "title": "test",
                "content": "<p>test</p>",
                "date": "2023-08-07T18:32:52.598783",
                "location": null,
                "like_cnt": 0,
                "reply_cnt": 2,
                "view_cnt": 31
            },
            {
                "type": null,
                "postId": 5,
                "title": "서버 시간 변경",
                "content": "<p><strong>서버 시간 변경 테스트 ‼️</strong></p>",
                "date": "2023-08-07T18:15:35.563622",
                "location": null,
                "like_cnt": 0,
                "reply_cnt": 0,
                "view_cnt": 8
            },
            {
                "type": null,
                "postId": 2,
                "title": "로그아웃 구현해주세요...............",
                "content": "<h1>로그아웃 구현해주세요...............</h1><h2>로그아웃 구현해주세요...............</h2><p><br></p><h3>로그아웃 구현해주세요...............</h3><p><br></p><p>로그아웃 구현해주세요...............</p><p><br></p><p>우와 신기하다</p><p><br></p><p>우와</p><p><br></p><p>우</p><p>와</p>",
                "date": "2023-08-03T17:14:37.180422",
                "location": null,
                "like_cnt": 1,
                "reply_cnt": 4,
                "view_cnt": 3
            }
        ]
    }
}*/

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
      <ActivityStatus myBook={myBook} myRent={myRent} />
      <div>
        <Styled.MypageCardTitle>관리</Styled.MypageCardTitle>
      </div>
      <MypageRentCard data={rentHistory} />
      <MypageCommunityCard data={communityHistory} />
    </Styled.MypageContainer>
  );
};

export default MypageContainer;
