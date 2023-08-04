import styled from 'styled-components';
export const TopicResultTag = styled.div`
  margin-top: 4.286rem;
  font-weight: bold;
  display: flex;
`;
export const TopicResult = styled.div`
  font-size: 1.714rem;
`;
export const Cnt = styled.div`
  margin: 0.643rem 0 0 1.714rem;
`;
export const ResultTag = styled.div`
  margin-top: 4.857rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`;
export const Result = styled.div`
  font-size: 1.143rem;
`;
export const Sort = styled.ul`
  display: flex;
  font-size: 0.857rem;
  > li {
    margin-left: 0.571rem;
    color: #848484;
  }
`;
export const InfoDiv = styled.div`
  display: flex;
  margin-top: 1.143rem;
  width: 100%;
  font-size: 0.857rem;
  text-align: center;
  > div:not(:last-child) {
    box-sizing: border-box;
    border-right: 0.071rem solid #d9d9d9;
  }
`;
export const InfoContent = styled.div`
  display: flex;
  border-top: 0.071rem solid #d9d9d9;
  height: 6.857rem;
`;
const Content = styled.div`
  height: 100%;
  display: flex;
  font-size: 0.571rem;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
export const Cover = styled.div`
  width: 6.857rem;
`;

export const CoverContent = styled(Content)`
  width: 6.857rem;
  img {
    height: 66.7%;
    width: 66.7%;
  }
`;
export const Category = styled.div`
  width: 7.786rem;
`;
export const CategoryContent = styled(Content)`
  width: 7.786rem;
`;
export const Topic = styled.div`
  width: 17.429rem;
`;
export const TopicContent = styled(Content)`
  width: 17.429rem;
`;
export const Author = styled.div`
  width: 9.929rem;
`;
export const AuthorContent = styled(Content)`
  width: 9.929rem;
`;
export const Publish = styled.div`
  width: 9.929rem;
`;
export const PublishContent = styled(Content)`
  width: 9.929rem;
`;
export const Price = styled.div`
  width: 6.286rem;
`;
export const PriceContent = styled(Content)`
  width: 6.286rem;
`;

export const Introduce = styled.div`
  width: 19.5rem;
`;
export const IntroduceContent = styled(Content)`
  width: 19.5rem;
`;
export const DetailCnt = styled.div`
  width: 4rem;
`;
export const DetailCntContent = styled(Content)`
  width: 4rem;
`;
export const Register = styled.div`
  width: 9.071rem;
`;
export const RegisterContent = styled(Content)`
  flex-direction: column;
  width: 9.071rem;
`;
export const Btn = styled.div`
  height: 2rem;
  width: 8.5rem;
  border: 0.071rem solid #848484;
  border-radius: 0.857rem;
  text-align: center;
  color: #848484;
`;
