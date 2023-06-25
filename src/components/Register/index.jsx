import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as Styled from './Styled';
import { useState } from 'react';
import AddressSearchForm from '../AddressSearch/AddressSearchForm';
//import { emailAuth, register} from "../../apis/authService";
//import { emailDoubleCheck, nicknameDoubleCheck} from "../../apis/doubleCheckService";
const schema = yup.object().shape({
  email: yup
    .string()
    .email('이메일형식이 적합하지 않습니다.')
    .required('이메일 입력해주세요'),
  authNum: yup.string().required('인증번호를 입력해주세요'),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*\W)(?!.*\s).{8,16}$/,
      '영문과 숫자,특수문자를 포함하여 8~16자리를 입력해주세요'
    )
    .required('비밀번호를 입력해주세요'),
  checkpw: yup
    .string()
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다'),
  nickname: yup.string().required('닉네임을 입력해주세요'),
  birth: yup.string().required('생년월일을 선택해주세요'),
  basicAddress: yup.string().required('도로명을 검색해주세요'),
  detailAddress: yup.string().required('상세주소를 입력해주세요'),
});
function Register() {
  const {
    register,
    handleSubmit,
    //setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  //const {email /*setEmail*/ } = useState("");
  //const { emailNum /*setEmailNum*/ } = useState("");
  //const { nickname /*setNickname*/ } = useState("");
  const [searchBtnClick, setSearchBtnClick] = useState(false);
  const [basicAddress, setBasicAddress] = useState('');
  console.log(basicAddress);
  const onSubmit = (data) => {
    console.log(data);
  };
  const handleEmailCheck = async (e) => {
    console.log(e.target.previousElementSibling.value);
  };
  const handleAuthNum = async (e) => {
    console.log(e.target.previousElementSibling.value);
  };
  const nicknameCheck = async (e) => {
    console.log(e.target.previousElementSibling.value);
  };
  return (
    <Styled.MainDiv>
      <Styled.RegisterDiv>
        <h1>회원가입</h1>
        <Styled.RegisterForm onSubmit={handleSubmit(onSubmit)}>
          <Styled.buttonIncludedDiv>
            <h4>아이디</h4>
            <Styled.Input
              //value={email}
              placeholder="이메일을 입력해주세요"
              {...register('email')}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <button type="button" onClick={handleEmailCheck}>
              중복확인
            </button>
          </Styled.buttonIncludedDiv>
          <Styled.noTagDiv>
            <Styled.Input /*value={emailNum}*/ {...register('authNum')} />
            {errors.authNum && <p>{errors.authNum.message}</p>}
            <button type="button" onClick={handleAuthNum}>
              인증번호 확인
            </button>
          </Styled.noTagDiv>
          <Styled.Div>
            <h4>비밀번호</h4>
            <Styled.Input type="password" {...register('password')} />
            {errors.password && <p>{errors.password.message}</p>}
          </Styled.Div>
          <Styled.Div>
            <h4>비밀번호 확인</h4>
            <Styled.Input type="password" {...register('checkpw')} />
            {errors.checkpw && <p>{errors.checkpw.message}</p>}
          </Styled.Div>
          <Styled.buttonIncludedDiv>
            <h4>닉네임</h4>
            <Styled.Input
              //value={nickname}
              type="text"
              {...register('nickname')}
            />
            {errors.nickname && <p>{errors.nickname.message}</p>}
            <button type="button" onClick={nicknameCheck}>
              중복확인
            </button>
          </Styled.buttonIncludedDiv>
          <Styled.Div>
            <h4>성별</h4>
            <Styled.genderDiv>
              <input
                type="radio"
                value="남성"
                {...register('gender')}
                checked
              />
              <label htmlFor="male">남성</label>
              <input type="radio" value="여성" {...register('gender')} />
              <label htmlFor="female">여성</label>
            </Styled.genderDiv>
          </Styled.Div>
          <Styled.Div>
            <h4>생년월일</h4>
            <Styled.Input type="date" {...register('birth')} />
            {errors.birth && <p>{errors.birth.message}</p>}
          </Styled.Div>
          <Styled.Div>
            <h4>주소</h4>
            <Styled.searchInput type="search" placeholder="도로명 검색" />
            <button
              type="button"
              onClick={() => {
                setSearchBtnClick(!searchBtnClick);
              }}
            >
              검색하기
            </button>
            {searchBtnClick && (
              <AddressSearchForm setBasicAddress={setBasicAddress} />
            )}
          </Styled.Div>
          <Styled.Div>
            <Styled.Input type="text" {...register('basicAddress')} />
            {errors.basicAddress && <p>{errors.basicAddress.message}</p>}
          </Styled.Div>
          <Styled.Div>
            <Styled.Input
              type="text"
              placeholder="상세 주소 입력하기"
              {...register('detailAddress')}
            />
            {errors.detailAddress && <p>{errors.detailAddress.message}</p>}
          </Styled.Div>
          <Styled.RegisterBtn type="sumbit">가입하기</Styled.RegisterBtn>
        </Styled.RegisterForm>
      </Styled.RegisterDiv>
    </Styled.MainDiv>
  );
}

export default Register;
