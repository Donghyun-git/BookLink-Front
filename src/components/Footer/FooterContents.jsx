import * as Styled from './Styled';

const FooterContents = () => {
  return (
    <Styled.FooterContents>
      <Styled.FooterHeaderNavDiv>
        <Styled.FooterHeaderNavUl>
          <Styled.FooterHeaderNavLi>
            <Styled.FooterHeaderNavLink to="/books">
              홈
            </Styled.FooterHeaderNavLink>
          </Styled.FooterHeaderNavLi>
          <Styled.FooterHeaderNavLi>
            <Styled.FooterHeaderNavLink to="/books">
              책방
            </Styled.FooterHeaderNavLink>
          </Styled.FooterHeaderNavLi>
          <Styled.FooterHeaderNavLi>
            <Styled.FooterHeaderNavLink to="/book-meetings">
              커뮤니티
            </Styled.FooterHeaderNavLink>
          </Styled.FooterHeaderNavLi>
          <Styled.FooterHeaderNavLi>
            <Styled.FooterHeaderNavLink to="#">
              로그인/마이페이지
            </Styled.FooterHeaderNavLink>
          </Styled.FooterHeaderNavLi>
          <Styled.FooterHeaderNavLi>
            <Styled.FooterHeaderNavLink to="#">
              북링크란?
            </Styled.FooterHeaderNavLink>
          </Styled.FooterHeaderNavLi>
          <Styled.FooterHeaderNavLi>
            <Styled.FooterHeaderNavLink to="#">
              이용문의
            </Styled.FooterHeaderNavLink>
          </Styled.FooterHeaderNavLi>
        </Styled.FooterHeaderNavUl>
      </Styled.FooterHeaderNavDiv>
      <Styled.FooterContentDiv>
        북링크는 책으로 연결한다는 의미로 현대사회에서 독서에 관한 정보를
        디지털화 할 수 있도록 도우며 <br />
        이를 통해 독서문화를 장려하고자 하는 목적으로 시작된 프로젝트입니다.
      </Styled.FooterContentDiv>
      <div>
        <Styled.FooterContentUl>
          <Styled.FooterContentLi>
            <Styled.FooterContentLiSpan>
              사업자등록번호
            </Styled.FooterContentLiSpan>
            012-34-56789
          </Styled.FooterContentLi>
          <Styled.FooterContentLi>
            <Styled.FooterContentLiSpan>
              통신판매업신고
            </Styled.FooterContentLiSpan>
            2023-서울관악-0000
          </Styled.FooterContentLi>
        </Styled.FooterContentUl>
        <Styled.FooterContentUl>
          <Styled.FooterContentLi>
            <Styled.FooterContentLiSpan>대표자</Styled.FooterContentLiSpan>
            김손정정이
          </Styled.FooterContentLi>
          <Styled.FooterContentLi>
            <Styled.FooterContentLiSpan>대표자번호</Styled.FooterContentLiSpan>
            010-0000-0000
          </Styled.FooterContentLi>
          <Styled.FooterContentLi>
            <Styled.FooterContentLiSpan>이메일</Styled.FooterContentLiSpan>
            FooterContentLink12@gmail.com
          </Styled.FooterContentLi>
        </Styled.FooterContentUl>
        <Styled.FooterContentUl>
          <Styled.FooterContentLi>
            <Styled.FooterContentLiSpan>주소</Styled.FooterContentLiSpan>
            서울 관악구 관악로 165 홍빌딩 9층, 캐치카페
          </Styled.FooterContentLi>
        </Styled.FooterContentUl>
      </div>
      <Styled.FooterAddressDiv>
        <Styled.FooterAddress>COPYRIGHT@BOOKLINK</Styled.FooterAddress>
        <Styled.FooterAddressUl>
          <Styled.FooterAddressLi>
            <Styled.FooterServices to="#">
              개인정보 처리 방침
            </Styled.FooterServices>
          </Styled.FooterAddressLi>
          <Styled.FooterAddressLi>
            <Styled.FooterServices to="#">이용약관</Styled.FooterServices>
          </Styled.FooterAddressLi>
          <Styled.FooterAddressLi>
            <Styled.FooterServices to="#">회원약관</Styled.FooterServices>
          </Styled.FooterAddressLi>
        </Styled.FooterAddressUl>
      </Styled.FooterAddressDiv>
    </Styled.FooterContents>
  );
};

export default FooterContents;
