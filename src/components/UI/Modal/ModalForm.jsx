import { Button, Modal, Box, Typography } from '@mui/material';
//import { CheckCircle } from '@mui/icons-material';
const ModalForm = ({ isModalOpen, closeModal }) => {
  console.log(isModalOpen);
  return (
    <div>
      <Modal open={isModalOpen} onClose={closeModal}>
        <Box
        /*sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}*/
        >
          {/*<CheckCircle sx={{ color: 'green', fontSize: 50 }} />
          <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
            회원가입이 완료되었습니다!
          </Typography>
          <Typography sx={{ mt: 2 }}>환영합니다!</Typography>
          <Button sx={{ mt: 3 }} variant="contained" onClick={closeModal}>
            닫기
          </Button>*/}
        </Box>
      </Modal>
    </div>
  );
};

export default ModalForm;
