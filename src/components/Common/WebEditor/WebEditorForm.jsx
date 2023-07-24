import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const WebEditorForm = ({ onContentsHandler }) => {
  return (
    <div>
      <h2>내용</h2>
      <ReactQuill
        onChange={onContentsHandler}
        /*style={{ height: '10rem' }}*/
      />
    </div>
  );
};

export default WebEditorForm;
