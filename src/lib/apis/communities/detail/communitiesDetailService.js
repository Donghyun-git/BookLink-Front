import { axiosJsonInstance } from '../../config/axios';

export const bookClubsDetail = async (id) => {
  try {
    const { data: data1, status } = await axiosJsonInstance.get(
      `/communities/book-club/${id}`
    );
    const { data } = data1;
    return { data, status };
  } catch (error) {
    console.log(error.response);
  }
};
