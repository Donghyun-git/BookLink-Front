import { Wrapper } from './style';

const LoginLayout = ({ children }) => {
  return (
    <Wrapper>
      <div className="container">{children}</div>
    </Wrapper>
  );
};

export default LoginLayout;
