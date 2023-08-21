import LoginForm from '../components/Login/LoginForm';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as authActions from '../redux/actions/authActions';
import { login } from '../lib/apis/authService';
import { alertForm } from '../utils/alert';

const LoginFormContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = useCallback(
    async (user) => {
      try {
        const { email, password } = user;

        const { status, data } = await login({ email, password });

        if (status !== 200) throw new Error(data.message);

        dispatch({
          ...authActions.login(),
          payload: { ...data.data, isLoggedIn: true },
        });
        alertForm({
          title: '로그인 완료',
          text: '북링크 이용을 시작해보세요',
          icon: 'success',
          confirmButtonText: '홈으로 이동',
        });

        navigate('/');
      } catch (error) {
        console.error(error);
        console.log(error.message);
      }
    },
    [dispatch, navigate]
  );

  return <LoginForm onSubmit={handleOnSubmit} />;
};
export default LoginFormContainer;
