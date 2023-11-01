import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useUserStore } from '../../store/useUserStore';
import { loginPostFetch } from '../../lib/apis/auth/loginPostFetch';
import * as env from '../../../env.config';
import * as Styled from './Styled';
import { loginSchema } from '../../validators/authValidator';
import Logo from '../../images/BookLink_Logo.svg';
import showPasswordImg from '../../images/password_eye.svg';
import kakaoLogo from '../../images/kakao.svg';

const LoginForm = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const { setIsLogin, setUserInfo } = useUserStore();
  console.log(useUserStore());
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = handleSubmit(async () => {
    try {
      const res = await loginPostFetch(getValues());
      setUserInfo(res.data.data);
      setIsLogin(true);
      alert('로그인 성공');
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  });

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Styled.LoginDiv>
      <Styled.LogoDiv>
        <Styled.Img src={Logo} />
      </Styled.LogoDiv>
      <Styled.LoginFormDiv>
        <Styled.LoginForm onSubmit={handleLogin}>
          <Styled.InputDiv>
            <Styled.Label htmlFor="email">아이디</Styled.Label>
            <Styled.LoginInput
              type="email"
              id="email"
              placeholder="example@gmail.com"
              {...register('email')}
            />
            {watch('email') && errors.email && (
              <Styled.ErrorMessage>{errors.email.message}</Styled.ErrorMessage>
            )}
          </Styled.InputDiv>
          <Styled.InputDivWithMargin>
            <Styled.Label htmlFor="password">패스워드</Styled.Label>
            <Styled.LoginInput
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="8~16자로 입력해주세요."
              {...register('password')}
            />
            <Styled.ShowPasswordImg
              src={showPasswordImg}
              onClick={handleShowPassword}
            />
            {watch('password') && errors.password && (
              <Styled.ErrorMessage>
                {errors.password.message}
              </Styled.ErrorMessage>
            )}
          </Styled.InputDivWithMargin>
          <Styled.LoginFormFooterDiv>
            <div>
              <Styled.LoginFormCheckBox type="checkbox" id="checkbox" />
              <Styled.LoginFormFooterLabel htmlFor="checkbox">
                아이디/비밀번호 기억하기
              </Styled.LoginFormFooterLabel>
            </div>
            <div>
              <Styled.StyledLink to="#">아이디/비밀번호 찾기</Styled.StyledLink>
            </div>
          </Styled.LoginFormFooterDiv>
          <Styled.LoginButton type="submit">로그인</Styled.LoginButton>
          <Styled.KakaoLoginButton>
            <a href={env.KAKAO_AUTH_URL}>
              <img src={kakaoLogo} alt="카카오 로고" />
              카카오 로그인
            </a>
          </Styled.KakaoLoginButton>
          <Styled.RegisterButton to="/register">
            회원가입 하기
          </Styled.RegisterButton>
        </Styled.LoginForm>
      </Styled.LoginFormDiv>
    </Styled.LoginDiv>
  );
};

export default LoginForm;
