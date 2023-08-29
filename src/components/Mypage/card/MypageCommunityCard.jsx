import { useState, useCallback, Fragment } from 'react';
import * as Styled from './Styled';

const MypageCommunityCard = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickLeftList = useCallback((id) => {
    setActiveIndex(id);
  }, []);
  /*
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
  */

  return (
    <Styled.MypageCard>
      <Styled.MypageCardTitle>
        <h3>커뮤니티</h3>
      </Styled.MypageCardTitle>
      <Styled.ListDiv>
        <Styled.LeftList>
          <ul>
            <li>
              <span>후기</span>
            </li>
            <li>
              <span>자유글</span>
            </li>
            <li>
              <span>독후감</span>
            </li>
            <li>
              <span>독서모임</span>
            </li>
            <li>
              <span>댓글</span>
            </li>
          </ul>
        </Styled.LeftList>
        <Styled.RightList>
          <table>
            <thead>
              <tr>
                {/* {table.map((title, idx) => {
                  return (
                    <Fragment key={idx}>
                      <th
                        className={
                          (title === '내용' || '결제정보') && 'content'
                        }
                      >
                        {title}
                      </th>
                    </Fragment>
                  );
                })} */}
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* {table.map((title, idx) => {
                  return (
                    <Fragment key={idx}>
                      <td
                        className={
                          (title === '내용' || '결제정보') && 'content'
                        }
                      >
                        {title}
                      </td>
                    </Fragment>
                  );
                })} */}
              </tr>

              {/* <tr>
                <td>
                  <strong>1</strong>
                </td>
                <td>
                  <span>후기</span>
                </td>
                <td>
                  <span>세이노의 가르침</span>
                </td>
                <td className="content">
                  <p>
                    내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                  </p>
                </td>
                <td>
                  <span>2023.07.26 16:42</span>
                </td>
                <td>
                  <span>1</span>
                </td>
                <td>
                  <span>2</span>
                </td>
              </tr> */}
            </tbody>
          </table>
        </Styled.RightList>
      </Styled.ListDiv>
      <Styled.Pagination>1</Styled.Pagination>
    </Styled.MypageCard>
  );
};

export default MypageCommunityCard;
