import { styled } from 'styled-components';

export const MainTag = styled.div`
  margin: 4.286rem 0 4.286rem 0;
  width: 100%;
  text-align: center;
  font-size: 2.571rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;
export const RegisterChoice = styled.div`
  width: 49.214rem;
  height: 15.286rem;
`;
export const Choice = styled.ul`
  display: flex;
`;
export const Card = styled.li`
  width: 15.714rem;
  height: 6.786rem;
  margin-right: 1.714rem;
  border: 2px solid #d9d9d9;
`;
export const Contents = styled.textarea`
  margin-top: 0.857rem;
  width: 100%;
  font-size: 0.857rem;
  height: 14.286rem;
  color: ${({ theme }) => theme.color.middleGray};
  border: 0.143rem solid ${({ theme }) => theme.color.lightGray};
`;
export const Tag = styled.div`
  margin-top: 4.286rem;
  font-size: 1.714rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;
export const PhotoBtn = styled.label`
  width: 94px;
  height: 36px;
  border: 1px solid #d9d9d9;
  border-radius: 12px;
`;
export const PhotoInput = styled.input`
  display: none;
`;
export const Upload = styled.div`
  width: 100%;
  height: 10rem;
  border: 1px solid #d9d9d9;
`;
export const RentalFee = styled.div`
  display: flex;
`;
export const RentalPriceInput = styled.input`
  margin-top: 3.429rem;
  margin-left: 2.5rem;
  border: 1px solid #d9d9d9;
  width: 18.429rem;
  height: 4.286rem;
`;
export const RentalTime = styled.div`
  display: flex;
`;
export const Select = styled.select`
  margin-top: 3.429rem;
  width: 10rem;
  height: 4.286rem;
`;
export const Address = styled.input`
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
