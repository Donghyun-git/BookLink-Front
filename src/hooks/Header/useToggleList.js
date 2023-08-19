import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../../redux/actions/authActions';
import { chatIn } from '../../redux/actions/chatActions';
import { persistor } from '../../main';

export const useToggleList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isChatIn } = useSelector((state) => state.CHAT);

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
  const handleLogOut = useCallback(() => {
    dispatch(authActions.logout());
    handleClickProfileList();
    alert('로그아웃 되었습니다!');
    persistor.purge();
    navigate('/');
  }, [dispatch, handleClickProfileList, navigate]);

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
