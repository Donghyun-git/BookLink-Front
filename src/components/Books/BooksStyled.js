import styled from 'styled-components';

//[BooksComponent]

export const BooksComponentDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const CardDiv = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 24.429rem;
  /* height: 40rem; */
  background-color: rgba(255, 255, 255, 1);
  border-left: 0.5px solid #dedede;
  border-right: 0.5px solid #dedede;
  border-top: 0.5px solid #dedede;
  border-radius: 0.857rem;
  margin: 0 0.857rem 0.857rem 0.857rem;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  &:nth-child(4n + 1) {
    margin-left: 0;
  }
  &:nth-child(4n) {
    margin-right: 0;
  }
  &:hover {
    transform: translateY(-8px);
    box-shadow: rgba(0, 0, 0, 0.08) 0px 12px 20px;
  }
`;

export const CardContainderDiv = styled.div`
  padding: 0.857rem 1.714rem 0 0.957rem;
`;

export const CardHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  margin-bottom: 0.71rem;
`;

export const CardHeaderWithFlex = styled.div`
display: flex;
justify-content:center;
align-itemscenter;`;
export const CardHeaderWithMargin = styled.div`
  padding-left: 0.86rem;
`;

export const CardImageDiv = styled.div`
  width: 19.571rem;
  height: 19.571rem;
  overflow: hidden;
  padding: 1.429rem;
  border-radius: 0.857rem;
  background-color: rgba(244, 244, 244, 1);
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardContentsDiv = styled.div`
  margin-top: 1.71rem;
`;

export const ContentsTitleDiv = styled.div`
  overflow: hidden;
  color: #000;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.71429rem;
  font-family: Noto Sans KR;
  font-weight: 500;
`;

export const ContentsAuthorDiv = styled.div``;

export const ContentsPublishDiv = styled.div``;

export const ContentsPriceDiv = styled.div``;

export const ContentSpan = styled.span`
  color: #848484;
  font-size: 1rem;
`;

export const ContentSpanRight = styled(ContentSpan)`
  color: #000;
  font-size: 1rem;
`;

export const CardFooterDiv = styled.div`
  border-top: 0.07143rem solid #d9d9d9;
  padding: 0.57rem 0;
`;

export const FooterSpan = styled.span`
  color: #003c74;
  font-size: 0.85714rem;
  font-weight: 500;
`;

export const CardButtonDiv = styled.div`
  /* position: absolute;
  left: -0.036rem;
  bottom: -0.071rem; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardButton = styled.button`
  width: 12.214rem;
  height: 2.714rem;
  font-size: 0.857rem;
  font-weight: 700;
  padding: 0.714rem 2.357rem;
  border-radius: 0 0 0 0.857rem;
  background-color: #fff;
  transition: all 0.2s;
  &:hover {
    color: #fff;
    background-color: rgba(0, 227, 125, 1);
  }
`;

export const CardButtonRight = styled(CardButton)`
  border-radius: 0 0 0.857rem 0;

  &:hover {
    color: #fff;
    background-color: rgba(0, 227, 125, 1);
  }
`;

//[RentsComponent]

export const RentsComponentDiv = styled.div``;
