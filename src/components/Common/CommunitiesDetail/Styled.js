import styled from 'styled-components';

export const LikeShare = styled.div`
  width: 4.286rem;
  height: 13.214rem;
  margin-top: 20rem;
  margin-right: 2.571rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const LikeShareContainer = styled.div`
  font-size: 0.857rem;
  text-align: center;
  width: 100%;
  img {
    width: 100%;
  }
`;

export const Title = styled.div`
  margin-top: 7.286rem;
  width: 100%;
  font-size: 3.428rem;
  font-weight: bold;
`;
export const Sub = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.571rem;
  height: 5rem;
  border-bottom: 0.071rem solid #d9d9d9;
`;
export const SubLeft = styled.div`
  display: flex;
  height: 3.428rem;
  width: 27.786rem;
`;
export const WriterImg = styled.div`
  width: 3.428rem;
  height: 100%;
  border-radius: 3.428rem;
  margin-right: 0.857rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 3.428rem;
  }
`;
export const SubDetail = styled.div`
  height: 100%;
  font-size: 1rem;
`;
export const SubDetailTop = styled.div`
  height: 50%;
  font-weight: bold;
  display: flex;
`;
export const Writer = styled.div`
  border-right: 0.071rem solid #848484;
  padding-right: 0.571rem;
`;
export const Category = styled.div`
  padding: 0 0.571rem;
`;
export const Updated = styled.div`
  border-left: 0.071rem solid #848484;
  padding: 0 0.571rem;
`;

export const SubDetailBottom = styled.div`
  height: 50%;
  color: #848484;
  display: flex;
`;
export const Date = styled.div`
  padding-right: 0.571rem;
`;
export const View = styled(Category)``;
export const Like = styled(Category)``;
export const Reply = styled(Category)``;
export const SubRight = styled.div`
  display: flex;
  height: 4.571rem;
  font-size: 0.857rem;
  color: #3a3a3a;
  div {
    margin-right: 0.286rem;
  }
  img {
    height: 1.286rem;
    margin-top: 0.286rem;
  }
`;

export const Button = styled.div`
  height: 1.857rem;
  width: 4.357rem;
  border: 0.071rem solid #d9d9d9;
  border-radius: 0.286rem 0.286rem 0 0;
  text-align: center;
`;
export const Location = styled.div`
  margin-top: 2.571rem;
  height: 3.429rem;
  font-size: 1.714rem;
  font-weight: bold;
  img {
    margin-right: 1.714rem;
  }
  span {
    padding: 0.857rem 0;
  }
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 2.571rem;
  min-height: 40.071rem;
  border-bottom: 0.071rem solid #d9d9d9;
`;
