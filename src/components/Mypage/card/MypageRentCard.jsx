import { useState, useCallback, Fragment } from 'react';
import * as Styled from './Styled';

const MypageRentCard = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickLeftList = useCallback((id) => {
    setActiveIndex(id);
  }, []);
  /*"rentHistory": [
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
        ], */

  return (
    <Styled.MypageCard>
      <Styled.MypageCardTitle>
        <h3>대여</h3>
      </Styled.MypageCardTitle>
      <Styled.ListDiv>
        <Styled.LeftList>
          <ul>
            <li>
              <span>결제 내역</span>
            </li>
            <li>
              <span>연체된 도서</span>
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

export default MypageRentCard;
