import MainContainer from './MainContainer';
import BannerContent from '../../Main/BannerContent';
import * as Styled from './Styled';

const Main = () => {
  return (
    <Styled.MainWrap>
      <Styled.BannerWrap>
        <BannerContent />
      </Styled.BannerWrap>
      <Styled.MainContainerWrap>
        <MainContainer />
      </Styled.MainContainerWrap>
    </Styled.MainWrap>
  );
};

export default Main;
