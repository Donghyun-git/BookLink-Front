import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as authActions from '../../redux/actions/authActions';
import { persistor } from '../../main';

export const useToggleList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  return {
    handleClickProfileList,
    handleLogOut,
    handleNavigateMypage,
    handleMouseEnter,
    handleMouseLeave,
    isProfileListOpen,
    isHovered,
  };
};
