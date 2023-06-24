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

export { loginSchema };
