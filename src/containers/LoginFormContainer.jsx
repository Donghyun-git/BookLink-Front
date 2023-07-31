import LoginForm from '../components/Login/LoginForm';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as authActions from '../redux/actions/authActions';
import { login } from '../lib/apis/authService';

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

        alert(data.message);
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
