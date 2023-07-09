import { axiosJsonInstance } from './axios';

// [ 모든 책 데이터 ]
export const getAllBooks = async (category) => {
  try {
    if (category) return await axiosJsonInstance(`/book/main/${category}`);

    return await axiosJsonInstance('/book/main');
  } catch (error) {
    console.error(error);
  }
};
