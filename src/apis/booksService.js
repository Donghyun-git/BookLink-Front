import { axiosJsonInstance } from './config/axios';

// [ 모든 책 데이터 ]
export const getAllBooks = async () => {
  try {
    const { status, data } = await axiosJsonInstance('/books/main');

    if (status !== 200) throw new Error(data.message);

    return { status, data };
  } catch (error) {
    throw new Error(error.message);
  }
};
