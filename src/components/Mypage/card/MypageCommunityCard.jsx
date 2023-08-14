import { useState, useCallback, Fragment } from 'react';
import * as Styled from './Styled';

const MypageCommunityCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickLeftList = useCallback((id) => {
    setActiveIndex(id);
  }, []);

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
