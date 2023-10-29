import { Fragment } from 'react';
import styled from 'styled-components';

const ListInfo = ({ count, list, children }) => {
  return (
    <Wrapper count={count}>
      <ul>{children}</ul>
      <ul>
        {list?.map((li, index) =>
          li.type === '결제' ? (
            <Fragment key={index}>
              <li>
                <span>{index + 1} </span>
              </li>
              <li>
                <span>{li.date.split('T').join(' ')}</span>
              </li>
              <li>
                <span>{li.type}</span>
              </li>
              <li>
                <span>{li.content}</span>
              </li>
              <li>
                <span>{li.price}</span>
              </li>
              <li>
                <span>
                  &quot;도서명, 저자, 출판사&quot; {li.info_owner} 님의 책/{' '}
                  {li.info_rent_from} ~ {li.info_rent_to} 대여 -
                  {li.date.split('T').join(' ')} &quot;{li.info_card_name}{' '}
                  결제완료
                </span>
              </li>
            </Fragment>
          ) : null
        )}
      </ul>
    </Wrapper>
  );
};

export default ListInfo;

const Wrapper = styled.div`
  & ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.75rem;

    &:first-child {
      & span {
        color: #767676;
      }
    }

    & li {
      width: ${({ count }) => `calc(65% - ${count * count - 1}%)`};
      text-align: center;

      &:last-child {
        width: 40%;

        & .price-info {
          width: 50%;
        }
      }

      & span {
        font-size: 1rem;
        font-weight: 400;
        text-align: center;
      }
    }
  }
`;
