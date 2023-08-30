import { useState } from 'react';

export const useModal = (state) => {
  const [isModalOpen, setIsModalOpen] = useState(state);

  const handleOpenModal = (selectDate) => {
    if (selectDate === 0) return alert('대여신청 기간을 선택해주세요.');
    setIsModalOpen(() => true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(() => false);
  };

  return { isModalOpen, handleOpenModal, handleCloseModal };
};
