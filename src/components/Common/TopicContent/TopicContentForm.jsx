import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const Container = styled.div``;
const Tag = styled.div`
  margin-top: 2.571rem;
  margin-bottom: 0.571rem;
  font-size: 1.714rem;
  font-weight: bold;
`;
const Title = styled.input`
  margin-top: 1.143rem;
  width: 100%;
  height: 4.286rem;
  box-sizing: border-box;
  border-radius: 0.571rem;
`;
const Content = styled.div`
  & {
    .ql-container,
    .ql-editor {
      height: 95.5%;
    }
  }
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2.071rem;
  button {
    box-sizing: border-box;
    font-weight: bold;
    width: 13rem;
    background-color: #ffffff;
    height: 3.857rem;
    border: 0.143rem solid #00e37d;
    border-radius: 0.571rem;
  }
`;

const TopicContentForm = ({
  title = '',
  content = '',
  register,
  onContentsHandler,
}) => {
  return (
    <Container>
      <Tag>제목</Tag>
      <Title type="text" defaultValue={title} {...register('title')} />
      <Tag>내용</Tag>
      <Content>
        <ReactQuill
          defaultValue={content}
          onChange={onContentsHandler}
          style={{ height: '90.587rem' }}
        />
      </Content>
      <ButtonDiv>
        <button type="submit">게시글 등록하기</button>
      </ButtonDiv>
    </Container>
  );
};

export default TopicContentForm;
