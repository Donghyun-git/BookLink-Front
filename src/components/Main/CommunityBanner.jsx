import { useNavigatePage } from '../../hooks/useNavigatePage';
import * as Styled from './Styled';

const CommunityBanner = () => {
  const { navigateToPage } = useNavigatePage();
  return (
    <Styled.CommunityBannerDiv>
      <Styled.CommunityBannerTitleDiv>
        <h2>사람들과 함께 독서를 나눠보세요!</h2>
        <div>
          <p>북링크를 통해 더욱 쉽게 모임을 시작할 수 있어요.</p>
          <p>내 주변에서 독서 모임을 모집하거나 찾아볼 수 있습니다.</p>
        </div>
      </Styled.CommunityBannerTitleDiv>
      <Styled.CommunityBannerButtonDiv>
        <button onClick={() => navigateToPage('/books/register')}>
          <span>독서 모임 모집하기</span>
        </button>
      </Styled.CommunityBannerButtonDiv>
    </Styled.CommunityBannerDiv>
  );
};

export default CommunityBanner;
