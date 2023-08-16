import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Styled from './Styled';
import { useState } from 'react';
import AddressSearchForm from '../AddressSearch/AddressSearchForm';
import { registerSchema } from '../../validators/authValidator';
import { useNavigate } from 'react-router-dom';
import {
  emailAuth,
  signUp,
  AuthNumConfirm,
  emailDoubleCheck,
  nicknameDoubleCheck,
} from '../../lib/apis/authService';
import { alertForm } from '../../utils/alert';
const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: 'onChange',
  });

  const navigate = useNavigate();
  console.log(errors);
  const [doubleEmailCheck, setDoubleEmailCheck] = useState(false);
  const [authCheck, setAuthCheck] = useState(false);
  const [searchBtnClick, setSearchBtnClick] = useState(false);

  const onSubmit = async (data) => {
    const { basicAddress, detailAddress, ...rest } = data;
    const address = basicAddress + ' ' + detailAddress;
    const data1 = await signUp({
      ...rest,
      address,
    });
    console.log(data1);
    alertForm({
      title: '회원가입 완료',
      text: '북링크에 오신걸 환영합니다',
      icon: 'success',
      confirmButtonText: '로그인하고 시작하기',
    });
    navigate('/login');
  };
  const handleAddressClick = (address) => {
    setValue('basicAddress', address, { shouldValidate: true });
    setSearchBtnClick(false);
  };
  const handleEmailCheck = async () => {
    if (getValues('email') && !errors.email) {
      const data1 = await emailDoubleCheck(getValues('email'));
      if (data1) setDoubleEmailCheck(true);
      console.log(data1);
    }
  };
  const handleAuthNum = async () => {
    console.log(getValues('email'));
    const data1 = await emailAuth(getValues('email'));
    if (data1) setAuthCheck(true);
    console.log(data1);
  };
  const handleAuthNumConfirm = async () => {
    console.log(getValues('authNum'));
    const data1 = await AuthNumConfirm(
      getValues('email'),
      getValues('authNum')
    );
    console.log(data1);
  };
  const nicknameCheck = async () => {
    if (getValues('nickname')) {
      const data1 = await nicknameDoubleCheck(getValues('nickname'));
      console.log(data1);
    }
  };
  return (
    <Styled.MainContainerDiv>
      <Styled.MainContentsDiv>
        <Styled.MainTag>회원가입</Styled.MainTag>
        <Styled.RegisterForm onSubmit={handleSubmit(onSubmit)}>
          <Styled.buttonIncludedDiv>
            <Styled.Tag>아이디</Styled.Tag>
            <Styled.Input
              type="text"
              {...register('email')}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleEmailCheck();
              }}
              placeholder="이메일을 입력해주세요"
            />
            {errors.email && (
              <Styled.Error>{errors.email.message}</Styled.Error>
            )}
            {doubleEmailCheck ? (
              <Styled.Btn type="button" onClick={handleAuthNum}>
                인증번호 전송
              </Styled.Btn>
            ) : (
              <Styled.Btn type="button" onClick={handleEmailCheck}>
                중복확인
              </Styled.Btn>
            )}
          </Styled.buttonIncludedDiv>
          {authCheck && (
            <Styled.noTagDiv>
              <Styled.Input
                type="text"
                {...register('authNum')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleAuthNumConfirm();
                }}
              />
              {errors.authNum && (
                <Styled.Error>{errors.authNum.message}</Styled.Error>
              )}
              <Styled.Btn type="button" onClick={handleAuthNumConfirm}>
                인증번호 확인
              </Styled.Btn>
            </Styled.noTagDiv>
          )}

          <Styled.Div>
            <Styled.Tag>비밀번호</Styled.Tag>
            <Styled.Input type="password" {...register('password')} />
            {errors.password && (
              <Styled.Error>{errors.password.message}</Styled.Error>
            )}
          </Styled.Div>
          <Styled.Div>
            <Styled.Tag>비밀번호 확인</Styled.Tag>
            <Styled.Input type="password" {...register('checkpw')} />
            {errors.checkpw && (
              <Styled.Error>{errors.checkpw.message}</Styled.Error>
            )}
          </Styled.Div>
          <Styled.buttonIncludedDiv>
            <Styled.Tag>닉네임</Styled.Tag>
            <Styled.Input
              type="text"
              {...register('nickname')}
              onKeyDown={(e) => {
                if (e.key === 'Enter') nicknameCheck();
              }}
            />
            {errors.nickname && (
              <Styled.Error>{errors.nickname.message}</Styled.Error>
            )}
            <Styled.Btn type="button" onClick={nicknameCheck}>
              중복확인
            </Styled.Btn>
          </Styled.buttonIncludedDiv>
          <Styled.Div>
            <Styled.Tag>이름</Styled.Tag>
            <Styled.Input type="text" {...register('name')} />
            {errors.name && <Styled.Error>{errors.name.message}</Styled.Error>}
          </Styled.Div>
          <Styled.Div>
            <Styled.Tag>생년월일</Styled.Tag>
            <Styled.Input type="date" {...register('birth')} />
            {errors.birth && (
              <Styled.Error>{errors.birth.message}</Styled.Error>
            )}
          </Styled.Div>
          <Styled.searchDiv>
            <Styled.Tag>주소</Styled.Tag>
            <Styled.Input type="search" placeholder="도로명 검색" />
            <Styled.Btn
              type="button"
              onClick={() => {
                setSearchBtnClick(!searchBtnClick);
              }}
            >
              검색하기
            </Styled.Btn>
            {searchBtnClick && (
              <AddressSearchForm onAddressClick={handleAddressClick} />
            )}
          </Styled.searchDiv>
          <Styled.Div>
            <Styled.Input {...register('basicAddress')} type="text" />
            {errors.basicAddress && (
              <Styled.Error>{errors.basicAddress.message}</Styled.Error>
            )}
          </Styled.Div>
          <Styled.Div>
            <Styled.Input
              type="text"
              placeholder="상세 주소 입력하기"
              {...register('detailAddress')}
            />
          </Styled.Div>
          <Styled.RegisterBtn type="sumbit">가입하기</Styled.RegisterBtn>
        </Styled.RegisterForm>
      </Styled.MainContentsDiv>
    </Styled.MainContainerDiv>
  );
};

export default RegisterForm;
