import { styled } from 'styled-components';

export const MainTag = styled.div`
  margin: 4.286rem 0 4.286rem 0;
  width: 100%;
  text-align: center;
  font-size: 2.571rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;
export const RegisterChoice = styled.div`
  width: 51rem;
  height: 15.286rem;
`;
export const Message = styled.div`
  margin-top: 0.871rem;
  width: 100%;
  height: 3.429rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: 1rem;
`;
export const Choice = styled.ul`
  display: flex;
  margin-top: 1.714rem;
`;
export const Card = styled.li`
  width: 15.714rem;
  height: 6.786rem;
  margin-right: 1.714rem;
  border: ${({ isClicked }) =>
    isClicked ? '0.071rem solid #00e37d' : '0.071rem solid #d9d9d9'};
`;
export const Title = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 1.143rem;
  text-align: center;
`;
export const Content = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: 0.857rem;
  margin: 0.571rem;
`;
export const Contents = styled.textarea`
  margin-top: 0.857rem;
  width: 100%;
  resize: none;
  font-size: 0.857rem;
  height: 14.286rem;
  color: ${({ theme }) => theme.color.middleGray};
  border: 0.143rem solid ${({ theme }) => theme.color.lightGray};
`;
export const Tag = styled.div`
  margin-top: 4.286rem;
  font-size: 1.714rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
export const PhotoBtn = styled.label`
  width: 6.714rem;
  height: 2.571rem;
  font-size: 0.871rem;
  border: 1px solid #d9d9d9;
  border-radius: 12px;
`;
export const PhotoInput = styled.input`
  display: none;
`;
export const Upload = styled.div`
  margin-top: 0.871rem;
  width: 100%;
  height: 10rem;
  border: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
`;
export const img = styled.img`
  width: 6.871rem;
  height: 8.286rem;
  margin-right: 0.871rem;
`;
export const RentalFee = styled.div`
  display: flex;
  margin-top: 3.429rem;
  align-items: center;
`;
export const RentalTag = styled(Tag)`
  margin-top: 0;
  margin-right: 2.5rem;
`;
export const RentalPriceInput = styled.input`
  border: 2px solid #d9d9d9;
  border-radius: 0.871rem;
  width: 18.429rem;
  height: 4.286rem;
`;
export const RentalTime = styled.div`
  display: flex;
  margin-top: 3.429rem;
  align-items: center;
`;
export const Select = styled.select`
  width: 10rem;
  height: 4.286rem;
`;
export const Address = styled.input`
  margin-top: 1.714rem;
  width: 42.587rem;
  height: 4.286rem;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 1.714rem;
`;
export const Recommend = styled(Contents)`
  height: 8.571rem;
`;
export const RegisterBtn = styled.button`
  margin: 4.286rem 30rem;
  width: 42.587rem;
  height: 6rem;
  background: #00e37d;
  border-radius: 1.714rem;
  font-weight: bold;
  font-size: 1.714rem;
  text-align: center;
  color: #ffffff;
`;
