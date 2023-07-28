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
    </Container>
  );
};

export default TopicContentForm;
