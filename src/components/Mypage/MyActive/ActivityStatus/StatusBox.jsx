import * as Styled from './Styled';

const StatusBox = ({ title, count }) => {
  return (
    <Styled.StatusBoxDiv>
      <div>
        <h4>{title}</h4>
      </div>
      <div>
        <span>{count}</span>
      </div>
    </Styled.StatusBoxDiv>
  );
};

export default StatusBox;
