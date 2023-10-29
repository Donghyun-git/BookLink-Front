import * as Styled from './Styled';
import StatusBox from './StatusBox';

const ActivityStatus = ({ myBook, myRent }) => {
  const { register, rent, like, report } = myBook;
  const { renting, lending, rentTotal, lendTotal } = myRent;

  return (
    <Styled.ActivityStatusDiv>
      <Styled.ActivityDiv>
        <Styled.Tag>도서</Styled.Tag>
        <Styled.Activity>
          <StatusBox title={'내가 기록한 도서'} count={`${register ?? 0}권`} />
          <StatusBox title={'대여 등록된 도서'} count={`${rent ?? 0}권`} />
          <StatusBox title={'좋아요한 도서'} count={`${like ?? 0}권`} />
          <StatusBox
            title={'독후감을 작성한 도서'}
            count={`${report ?? 0}권`}
          />
        </Styled.Activity>
      </Styled.ActivityDiv>
      <Styled.ActivityDiv>
        <Styled.Tag>대여</Styled.Tag>
        <Styled.Activity>
          <StatusBox title={'빌린 도서 근황'} count={`${renting ?? 0}건`} />
          <StatusBox title={'빌려준 도서 근황'} count={`${lending ?? 0}건`} />
          <StatusBox title={'받은 횟수'} count={`총 ${rentTotal ?? 0}건`} />
          <StatusBox title={'빌려준 횟수'} count={`총 ${lendTotal ?? 0}건`} />
        </Styled.Activity>
      </Styled.ActivityDiv>
    </Styled.ActivityStatusDiv>
  );
};

export default ActivityStatus;
