import * as Styled from './Styled';
import logoImage from '../../images/BookLink_Logo.svg';
import bannerLogoImage from '../../images/banner_logo.png';

const BannerContent = () => {
  return (
    <Styled.BannerContent>
      <Styled.BannerLeft>
        <div>
          <img src={logoImage} alt="logo_image" />
        </div>

        <h1>책과 나를 연결하다</h1>

        <p>독서 기록부터 나의 도서 대여까지!</p>
        <p>책과 나를 잇는 북링크 서비스를 경험해 보세요.</p>
        <Styled.BannerFooterDiv>
          <Styled.LastChildOfP>
            여러분의 독서 북링크와 함께 하세요!
          </Styled.LastChildOfP>
          <div>
            <Styled.BannerButtonDiv>
              <button>
                <span>북링크 알아보기</span>
              </button>
              <button>
                <span>회원 가입하기</span>
              </button>
            </Styled.BannerButtonDiv>
            <Styled.BannerLinkDiv>
              <ul>
                <li>
                  <span>이미 함께하고 계신가요?</span>
                </li>
                <li>
                  <span>로그인 바로가기</span>
                </li>
              </ul>
            </Styled.BannerLinkDiv>
          </div>
        </Styled.BannerFooterDiv>
      </Styled.BannerLeft>
      <Styled.BannerRight>
        <div>
          <img src={bannerLogoImage} alt="banner_logo_image" />
        </div>
      </Styled.BannerRight>
    </Styled.BannerContent>
  );
};

export default BannerContent;
