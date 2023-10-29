import { useState, useCallback } from 'react';
import { logout } from '../../lib/apis/authService';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useUserStore } from '../../store/useUserStore';
import { chatIn } from '../../redux/actions/chatActions';

export const useToggleList = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isChatIn } = useSelector((state) => state.CHAT);

  const removeUserInfo = useUserStore((state) => state.removeUserInfo);

  const [isProfileListOpen, setIsProfileListOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClickProfileList = useCallback(() => {
    setIsProfileListOpen(!isProfileListOpen);
  }, [isProfileListOpen]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleLogOut = async () => {
    await logout();

    handleClickProfileList();

    removeUserInfo();
    useUserStore.persist.clearStorage();

    alert('로그아웃 되었습니다.');

    navigate('/');
    return;
  };

  const handleNavigateMypage = useCallback(() => {
    navigate('/mybooklink');
  }, [navigate]);

  const handleChat = () => {
    dispatch(chatIn(!isChatIn));
  };

  return {
    handleClickProfileList,
    handleLogOut,
    handleNavigateMypage,
    handleMouseEnter,
    handleMouseLeave,
    handleChat,
    isProfileListOpen,
    isHovered,
  };
};
