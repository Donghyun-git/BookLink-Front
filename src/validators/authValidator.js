import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('*유효하지 않는 이메일 형식입니다.')
    .required('*이메일은 필수 항목입니다.'),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      '*비밀번호는 최소 8자 이상이며, 영문 대문자, 영문 소문자, 숫자, 특수 문자를 모두 포함해야 합니다.'
    )
    .required('*비밀번호는 필수 항목입니다.'),
});

const registerSchema = yup.object().shape({
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

export { loginSchema, registerSchema };
