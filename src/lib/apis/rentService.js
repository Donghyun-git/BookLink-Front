import { axiosJsonInstance } from './config/axios';

//[ 대여 정보 ]
export const getAllRent = async () => {
  try {
    const { data } = await axiosJsonInstance.get('/books/rent/0');

    console.log(data);

    return { data };
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

// [ 대여 상세 ]
export const getRentDetail = async (id) => {
  try {
    const { data } = await axiosJsonInstance.get(`/books/rent/detail/${id}`);

    return { data };
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
