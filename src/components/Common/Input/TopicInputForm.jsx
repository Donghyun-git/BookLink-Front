import styled from 'styled-components';
const Title = styled.input`
  width: 100%;
  height: 4.2rem;
  box-sizing: border-box;
  border-radius: 0.8rem;
`;

const TopicInputForm = ({ register }) => {
  return (
    <div>
      <h2>제목</h2>
      <Title type="text" {...register('title')} />
    </div>
  );
};

export default TopicInputForm;
