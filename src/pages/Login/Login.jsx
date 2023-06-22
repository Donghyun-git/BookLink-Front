import AuthMain from "../../components/Layout/Login/LoginMain";
import AuthMainContainer from "../../components/Layout/Login/LoginMainContainer";
import LoginForm from "../../components/Login/LoginForm";

const Login = () => {
  return (
    <AuthMain>
      <AuthMainContainer>
        <LoginForm></LoginForm>
      </AuthMainContainer>
    </AuthMain>
  );
};

export default Login;
