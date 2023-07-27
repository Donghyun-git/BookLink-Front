import { axiosJsonInstance } from '../../config/axios';

export const bookClubsDetail = async (id) => {
  try {
    const { data: data1, status } = await axiosJsonInstance.get(
      `/communities/book-club/${id}`
    );
    const { data } = data1;
    console.log(data);
    return { data, status };
  } catch (error) {
    console.log(error.response);
  }
};

export const freesDetail = async (id) => {
  try {
    const { data: data1, status } = await axiosJsonInstance.get(
      `/communities/board/free/${id}`
    );
    const { data } = data1;
    console.log(data);
    return { data, status };
  } catch (error) {
    console.log(error.response);
  }
};

export const bookReportsDetail = async (id) => {
  try {
    const { data: data1, status } = await axiosJsonInstance.get(
      `/communities/board/report/${id}`
    );
    const { data } = data1;
    console.log(data);
    return { data, status };
  } catch (error) {
    console.log(error.response);
  }
};
