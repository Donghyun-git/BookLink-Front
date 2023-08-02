import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as authActions from '../../redux/actions/authActions';
import { persistor } from '../../main';

export const useToggleList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleLogOut = useCallback(() => {
    dispatch(authActions.logout());
    alert('로그아웃 되었습니다!');
    persistor.purge();
    navigate('/');
  }, [dispatch, navigate]);

  const handleNavigateMypage = useCallback(() => {
    navigate('/mybooklink');
  }, [navigate]);

  return {
    handleLogOut,
    handleNavigateMypage,
    handleMouseEnter,
    handleMouseLeave,
    isHovered,
  };
};
