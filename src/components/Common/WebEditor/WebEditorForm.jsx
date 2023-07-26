import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const WebEditorForm = ({ onContentsHandler }) => {
  return (
    <div>
      <ReactQuill
        onChange={onContentsHandler}
        style={{ height: '90.857rem' }}
      />
    </div>
  );
};

export default WebEditorForm;
