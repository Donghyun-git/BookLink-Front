import { axiosJsonInstance } from '../../config/axios';

export const bookClubLike = async (id) => {
  try {
    const { data: data1, status } = await axiosJsonInstance.post(
      `/communities/book-club/${id}/like`
    );
    const { data } = data1;
    console.log(data);
    return { data, status };
  } catch (error) {
    console.log(error.response);
  }
};
