import Logo from "../../BookLink_Logo.svg";
import * as Styled from "./LoginFormStyled";

//후에 form태그에 onsubmit달기
const LoginForm = () => {
  return (
    <Styled.LoginDiv>
      <Styled.LogoDiv>
        <Styled.Img src={Logo} />
      </Styled.LogoDiv>
      <Styled.LoginFormDiv>
        <Styled.LoginForm>
          <Styled.Label htmlFor="email">아이디</Styled.Label>
          <Styled.LoginInput
            type="email"
            id="email"
            placeholder="example@gmail.com"
          />
          <Styled.LabelWithMargin htmlFor="password">
            패스워드
          </Styled.LabelWithMargin>
          <Styled.LoginInput
            type="password"
            id="password"
            placeholder="8~16자로 입력해주세요."
          />
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
          <Styled.LoginButton>로그인</Styled.LoginButton>
          <Styled.RegisterButton to="/register">
            회원가입 하기
          </Styled.RegisterButton>
        </Styled.LoginForm>
      </Styled.LoginFormDiv>
    </Styled.LoginDiv>
  );
};

export default LoginForm;
