import { axiosJsonInstance } from './config/axios';

export const HeaderBookSearch = async (keyword, page) => {
  try {
    const { data: data1, status } = await axiosJsonInstance.get(
      `/?search=${keyword}&page=${page}`
    );
    const { data } = data1;
    const { item } = data;

    return item;
  } catch (error) {
    console.log(error.response);
  }
};
export const communitiesBookSearch = async (book_title) => {
  try {
    const { data: data1, status } = await axiosJsonInstance.get(
      `/books/aladdin/search?query=${book_title}`
    );

    const { data: data2 } = data1;
    const { item } = data2;
    console.log(item, status);
    return { item, status };
  } catch (error) {
    console.log(error.response);
  }
};
