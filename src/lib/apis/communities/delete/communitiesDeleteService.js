import { axiosJsonInstance } from '../../common';

export const bookClubsDelete = async (id) => {
  try {
    const { data: data1, status } = await axiosJsonInstance.delete(
      `/communities/book-club/${id}`
    );
    const { data } = data1;
    console.log(data);
    return { data, status };
  } catch (error) {
    console.log(error.response);
  }
};

export const freesDelete = async (id) => {
  try {
    const { data: data1, status } = await axiosJsonInstance.delete(
      `/communities/board/free/${id}`
    );
    const { data } = data1;
    console.log(data);
    return { data, status };
  } catch (error) {
    console.log(error.response);
  }
};

export const bookReportsDelete = async (id) => {
  try {
    const { data: data1, status } = await axiosJsonInstance.delete(
      `/communities/board/report/${id}`
    );
    const { data } = data1;
    console.log(data);
    return { data, status };
  } catch (error) {
    console.log(error.response);
  }
};
