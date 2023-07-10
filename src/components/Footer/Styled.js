import styled from 'styled-components';
import { Link } from 'react-router-dom';

// [ 푸터 컨텐츠 영역 ]

export const FooterContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 6.43rem;
`;

export const FooterHeaderNavDiv = styled.div``;

export const FooterHeaderNavUl = styled.ul`
  display: flex;
  align-items: center;
  font-size: 1.14286rem;
  font-weight: 700;
`;

export const FooterHeaderNavLi = styled.li`
  margin-right: 2.57rem;

  &:last-child {
    margin-right: 0;
  }
`;

export const FooterHeaderNavLink = styled(Link)`
  color: #d9d9d9;
`;

export const FooterContentDiv = styled.div`
  width: 48rem;
  color: #848484;
  font-size: 1.14286rem;
  margin: 1.71rem 0 4.29rem 0;
  letter-spacing: 0.05rem;
`;

export const FooterContentUl = styled.ul`
  color: #d9d9d9;
  font-size: 1.14286rem;
  display: flex;
  align-items: center;
`;

export const FooterContentLi = styled.li`
  margin-right: 1.71rem;

  &:last-child {
    margin-right: 0;
  }
`;

export const FooterContentLiSpan = styled.span`
  color: #848484;
  margin-right: 0.86rem;
`;

export const FooterAddressDiv = styled.div`
  margin-top: 2.57rem;
  display: flex;
  align-items: center;
`;

export const FooterAddress = styled.address`
  color: #fff;
  font-size: 1.14286rem;
  font-weight: 500;
`;

export const FooterAddressUl = styled.ul`
  margin-left: 1.71rem;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.14286rem;
`;

export const FooterAddressLi = styled.li`
  color: #848484;

  &:nth-child(2) {
    padding: 0 1.71rem;
  }
`;

export const FooterServices = styled(Link)`
  text-decoration: underline;
`;

// [ 푸터 이메일 영역 ]
export const FooterEmailDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EmailTitleDiv = styled.div`
  color: #d9d9d9;
  font-size: 1.14286rem;
  font-weight: 700;
  margin-bottom: 0.86rem;
`;

export const EmailFormDiv = styled.div`
  overflow: hidden;
  margin-bottom: 2.21rem;
`;

export const EmailForm = styled.form``;

export const EmailFormInputDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const EmailFormLabel = styled.label`
  padding: 0.29rem 0.86rem;
  flex-shrink: 0;
  background: #848484;
  color: #d9d9d9;
  font-size: 0.85714rem;
  font-weight: 500;
  border-top-left-radius: 0.286rem;
`;

export const EmailFormInput = styled.input`
  width: 26.35714rem;
  height: 1.981rem;
  flex-shrink: 0;
  border: 1px solid #848484 !important;
  border-top-right-radius: 0.286rem;
  background: #404040 !important;
  font-size: 0.85714rem;
  color: #fff !important;

  &::placeholder {
    color: #848484 !important;
    font-size: 0.85714rem;
  }

  &:focus {
    outline: none !important;
  }
`;

export const EmailFormTextInputDiv = styled.input`
  width: 30.31614rem;
  height: 8.36rem;
  margin-top: -1px;
  border: 1px solid #848484 !important;
  border-bottom-right-radius: 0.286rem;
  border-bottom-left-radius: 0.286rem;
  background: #404040 !important;
  color: #fff !important;
  font-size: 0.65714rem;
  &::placeholder {
    color: #848484 !important;
    font-size: 0.85714rem;
  }

  &:focus {
    outline: none !important;
  }
`;

export const EmailFormSubmit = styled.button`
  float: right;
  border-radius: 0.286rem;
  margin-top: 0.86rem;
  padding: 0.29rem 0.57rem;
  background: #848484;
  color: #404040;
  font-size: 0.85714rem;
  font-weight: 700;
`;

export const SocialSharingDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialSharing = styled.div`
  margin-right: 1.71rem;
  width: 3.42857rem;
  height: 3.42857rem;
  flex-shrink: 0;
  border-radius: 3.429rem;
  background: #848484;
`;
