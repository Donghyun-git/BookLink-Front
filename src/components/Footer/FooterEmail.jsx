import * as Styled from './FooterStyled';

const FooterEmail = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Styled.FooterEmailDiv>
      <Styled.EmailTitleDiv>CONTECT US</Styled.EmailTitleDiv>
      <Styled.EmailFormDiv>
        <Styled.EmailForm action="">
          <Styled.EmailFormInputDiv>
            <Styled.EmailFormLabel htmlFor="email">
              E-mail
            </Styled.EmailFormLabel>
            <Styled.EmailFormInput
              type="email"
              placeholder="이메일을 작성해주세요"
              id="email"
            />
          </Styled.EmailFormInputDiv>
          <Styled.EmailFormTextInputDiv
            type="text"
            placeholder="내용을 입력해주세요."
          />
          <Styled.EmailFormSubmit onClick={(e) => handleSubmit(e)}>
            Send E-mail
          </Styled.EmailFormSubmit>
        </Styled.EmailForm>
      </Styled.EmailFormDiv>
      <Styled.SocialSharingDiv>
        <Styled.SocialSharing>
          <p className="hidden">sociallink1</p>
        </Styled.SocialSharing>
        <Styled.SocialSharing>
          <p className="hidden">sociallink2</p>
        </Styled.SocialSharing>
        <Styled.SocialSharing>
          <p className="hidden">sociallink3</p>
        </Styled.SocialSharing>
        <Styled.SocialSharing>
          <p className="hidden">sociallink4</p>
        </Styled.SocialSharing>
      </Styled.SocialSharingDiv>
    </Styled.FooterEmailDiv>
  );
};

export default FooterEmail;
