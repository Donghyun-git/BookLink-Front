import * as Styled from './Styled';
import RentsModal from './RentsModal';

const BackDrop = ({ onClose }) => {
  const handleCloseModal = () => {
    onClose();
  };
  return (
    <Styled.BackDropDiv>
      <Styled.BackDropLayer onClick={handleCloseModal} />
      <RentsModal onClose={onClose}></RentsModal>
    </Styled.BackDropDiv>
  );
};

export default BackDrop;
