import * as Styled from './Styled';
import StatusBox from './StatusBox';

const ActivityStatus = () => {
  return (
    <Styled.ActivityStatusDiv>
      <StatusBox title={'대여중'} count={`${1}건`} />
      <StatusBox title={'지연 반납'} count={`${0}회`} />
      <StatusBox title={'미반납'} count={`${0}회`} />
      <StatusBox title={'이용 제한'} count={`${0}회`} />
    </Styled.ActivityStatusDiv>
  );
};

export default ActivityStatus;
