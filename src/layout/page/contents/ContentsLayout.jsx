import * as S from './style';

const ContentsLayout = ({ children }) => {
  return (
    <S.Wrapper>
      <div className="container">{children}</div>
    </S.Wrapper>
  );
};

export default ContentsLayout;
