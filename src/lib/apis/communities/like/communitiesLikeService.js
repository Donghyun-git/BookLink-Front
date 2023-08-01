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

export const bookReportLike = async (id) => {
  try {
    const { data: data1, status } = await axiosJsonInstance.post(
      `/communities/board/report/${id}/like`
    );
    const { data } = data1;
    console.log(data);
    return { data, status };
  } catch (error) {
    console.log(error.response);
  }
};

export const freeReportLike = async (id) => {
  try {
    const { data: data1, status } = await axiosJsonInstance.post(
      `/communities/board/free/${id}/like`
    );
    const { data } = data1;
    console.log(data);
    return { data, status };
  } catch (error) {
    console.log(error.response);
  }
};
