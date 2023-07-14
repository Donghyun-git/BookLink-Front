import styled from 'styled-components';
import ToggleLogo from '../../images/select_arrow.png';

//[BooksComponent]

export const BooksComponentDiv = styled.div`
  min-height: 86rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const CardDiv = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 24.429rem;
  background-color: rgba(255, 255, 255, 1);
  /* border-left: 0.5px solid #dedede;
  border-right: 0.5px solid #dedede;
  border-top: 0.5px solid #dedede; */
  border-radius: 0.857rem;
  margin: 0 0.857rem 1.71rem 0.857rem;
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
    /* box-shadow: rgba(0, 0, 0, 0.08) 0px 12px 20px; */
    box-shadow: 0px 0px 6px 0px #00e37d;
  }
`;

export const CardContainerDiv = styled.div`
  padding: 0.64rem 1.71rem 0 1.71rem;
  cursor: pointer;
`;

export const CardHeaderDiv = styled.div`
  display: flex;
  justify-content: ${({ isbooks }) =>
    isbooks === 'true' ? 'space-between' : 'flex-start'};
  align-items: center;
  flex-wrap: nowrap;
  margin-bottom: 0.71rem;
`;

export const CardHeaderWithFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardHeaderNumberSpan = styled.span`
  margin-left: 0.25rem;
`;

export const CardHeaderWithMargin = styled.div`
  padding-left: 0.86rem;
`;

export const CardImageDiv = styled.div`
  height: 19.571rem;
  overflow: hidden;
  margin-top: 0.86rem;
  padding: 1.429rem;
  border-radius: 0.857rem;
  background-color: rgba(244, 244, 244, 1);
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CardContentsDiv = styled.div`
  padding: ${({ isbooks }) =>
    isbooks === 'true' ? '1.71rem 0 0.57rem 0' : '0 0 0.57rem 0'};
  border-bottom: 0.07143rem solid #d9d9d9;
`;

export const ContentsTitleDiv = styled.div`
  overflow: hidden;
  color: #000;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.71429rem;
  font-weight: 500;
`;

export const ContentsAuthorDiv = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ContentsPublishDiv = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ContentsPriceDiv = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ContentSpan = styled.span`
  color: #848484;
  font-size: 1rem;
  margin-right: 0.64rem;
`;

export const ContentSpanRight = styled(ContentSpan)`
  color: #000;
  font-size: 1rem;
`;

export const CardFooterDiv = styled.div`
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
  font-size: 0.85714rem;
  font-weight: 500;
  color: #d9d9d9;
  padding: 0.714rem 2.357rem;
  border-radius: 0 0 0 0.857rem;
  background-color: #fff;
  transition: all 0.2s;
  &:hover {
    color: #fff;
    background-color: rgba(0, 227, 125, 1);
  }
  &:active {
    color: #fff;
    background-color: #00723f;
  }
`;

export const CardButtonRight = styled(CardButton)`
  border-radius: 0 0 0.857rem 0;

  &:hover {
    color: #fff;
    background-color: rgba(0, 227, 125, 1);
  }

  &:active {
    color: #fff;
    background-color: #00723f;
  }
`;

//[RentsComponent]

export const RentsComponentDiv = styled.div`
  min-height: 86rem;
`;

export const RentsCardContainer = styled.div`
  padding: 1.71rem;
`;

export const CardProfileImageDiv = styled.div`
  width: 3.71429rem;
  height: 3.71429rem;
  clip-path: circle(50%);
`;

export const CardProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardProfileInfoDiv = styled.div`
  margin-left: 0.86rem;
`;

export const CardProfileInfoUl = styled.ul``;

export const CardProfileInfoLi = styled.li`
  color: #000;
  font-size: 1.42857rem;
  font-style: normal;
  font-weight: 500;

  &:last-child {
    color: #000;
    font-size: 0.85714rem;
    font-style: normal;
    font-weight: 400;
  }
`;

export const RentsLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #000;
  font-size: 1.14286rem;
  font-style: normal;
  font-weight: 400;

  margin: 0.86rem 0;

  & > span:last-child {
    font-weight: 500;
  }
`;

export const RentsLiSpan = styled.span`
  color: #000;
  font-size: 1.14286rem;
  font-weight: 400;
`;

export const RentsCardFooterButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const RentsCardButton = styled.button`
  border-radius: 0.28571rem;
  border: 1px solid #d9d9d9;
  padding: 0.86rem 3.5rem;
  color: #848484;
  background-color: #fff;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  width: 21rem;
  height: 3.21429rem;
  transition: all 0.2s;

  &:last-child {
    margin-top: 0.57rem;
  }
  &:hover {
    color: #000;
    background-color: #f5f5f5;
  }
`;

// -----------

// [CategorySelects]
export const SelectMain = styled.div`
  width: 100%;
  margin: 3rem 0;
`;
export const SelectContainer = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const CategorySelect = styled.select`
  display: none;
  position: absolute;
  bottom: 0;
  left: -0.7rem;
  && {
    width: 6.86rem;
    height: 2.57143rem;
    padding: 0;
    margin: 0;
    border: 0;
    color: #000;
    text-align: center;
    font-size: 0.714rem;
    font-weight: 500;
    background-repeat: no-repeat;
    background-position: right 0.48rem center;
    background-size: 0.85714rem auto;
    &:focus {
      outline: none;
    }
  }
`;
export const SelectSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #000;
  text-align: center;
  font-size: 0.85714rem;
  font-weight: 500;
  cursor: pointer;
  width: 11.92857rem;
  height: 2.57143rem;
  min-width: 3rem;

  && {
    border: 2px solid transparent;
    border-radius: 0.571rem;
    background-image: linear-gradient(#fff, #fff),
      linear-gradient(to right, rgba(0, 227, 125, 1), rgba(0, 60, 116, 1));
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0.87rem;
    transform: translateY(-50%);
    width: 0.45714rem;
    height: 0.45714rem;
    background-image: url(${ToggleLogo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

export const OptionsList = styled.ul`
  && {
    border: 2px solid transparent;
    border-radius: 0.571rem;
    background-image: linear-gradient(#fff, #fff),
      linear-gradient(to right, rgba(0, 227, 125, 1), rgba(0, 60, 116, 1));
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  position: absolute;
  top: 3.464rem;
  left: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  width: 11.92857rem;
  background-color: #fff;
  cursor: pointer;
  z-index: 9999;
`;

export const OptionItem = styled.li`
  padding: 0.57rem 1.15rem;
  margin: 0 0.61rem;
  border-bottom: 1px solid rgba(217, 217, 217, 1);
  color: #848484;
  text-align: center;
  font-size: 0.85714rem;
  font-weight: 500;

  &:hover {
    color: #000;
  }

  &:last-child {
    border: 0;
  }
`;

export const SearchDiv = styled.div`
  position: relative;
  margin-left: 1.71rem;
`;

export const SearchInput = styled.input`
  && {
    padding-left: 0;
    padding-right: 0;
    width: 25.71429rem;
    height: 2.93143rem;
    border: 2px solid transparent;
    border-radius: 0.571rem;
    text-indent: 1.071rem;
    font-size: 0.714rem;
    background-image: linear-gradient(#fff, #fff),
      linear-gradient(to right, rgba(0, 227, 125, 1), rgba(0, 60, 116, 1));
    background-origin: border-box;
    background-clip: content-box, border-box;
  }
  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 0.214rem;
  right: 0.67rem;
  cursor: pointer;
`;

//[ Book Detail ]

// 댓글 인풋 css
// outline: none;
// border-bottom: 3px solid #72dede;
// border-left: none;
// border-right: none;
// border-top: none;
// transition: 0.2s;
// padding-top: 35px;
