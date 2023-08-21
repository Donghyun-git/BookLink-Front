import { useState, useCallback } from 'react';
import { logout } from '../../lib/apis/authService';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../../redux/actions/authActions';
import { chatIn } from '../../redux/actions/chatActions';
import { persistor } from '../../main';
import { alertForm } from '../../utils/alert';
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
  const handleLogOut = useCallback(async () => {
    const { data } = await logout();
    console.log(data);
    dispatch(authActions.logout());
    handleClickProfileList();
    alertForm({
      title: '로그아웃 완료',
      text: '로그아웃이 정상적으로 완료됐습니다',
      icon: 'success',
      confirmButtonText: '다른 계정으로 로그인 하기',
    });
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
