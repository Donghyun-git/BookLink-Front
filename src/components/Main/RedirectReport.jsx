import { useNavigatePage } from '../../hooks/useNavigatePage';
import * as Styled from './Styled';

const RedirectReport = () => {
  const { navigateToPage } = useNavigatePage();
  return (
    <Styled.MainReports>
      <Styled.MainReportTitle>
        <h2>독서 기록하기</h2>
      </Styled.MainReportTitle>
      <p>
        독서 기록하기에서는 내가 읽은 책들을 검색하여 독서를 기록할 수 있으며
        후기 및 추천사, 독후감도 작성하실 수 있습니다.
      </p>
      <p>
        또한 소장하고 계신 책이라면 대여 신청 받기를 통해 다른 이용자에게 나의
        책을 대여해 줄 수 있습니다.
      </p>
      <Styled.MainReportContent>
        <Styled.MainReportImageDiv>
          {/* <img src="" alt="" /> */}
        </Styled.MainReportImageDiv>
        <Styled.MainReportListDiv>
          <ul>
            <li>
              <div>
                <h3>어떤 책을 읽으셨나요?</h3>
                <p>북링크에 독서를 기록하세요!</p>
                <p>회원님이 읽은 책들을 한눈에 볼 수 있습니다.</p>
              </div>
            </li>
            <li>
              <div>
                <h3>책이 재미있었나요?</h3>
                <p>추천사, 후기, 독후감을 작성해 보세요!</p>
                <p>회원님의 글이 책을 좋아하는 분들에게 도움이 될거에요!</p>
              </div>
            </li>
            <li>
              <div>
                <h3>대여 신청을 받아보세요!</h3>
                <p>대여를 원하시는 분에게 대여 신청을 받아</p>
                <p> 대여료를 받고 책들을 대여해 줄 수 있습니다.</p>
              </div>
            </li>
          </ul>
          <Styled.MainReportButtonDiv>
            <button onClick={() => navigateToPage('/communities/write')}>
              <span>독서 기록하기</span>
            </button>
          </Styled.MainReportButtonDiv>
        </Styled.MainReportListDiv>
      </Styled.MainReportContent>
    </Styled.MainReports>
  );
};

export default RedirectReport;
