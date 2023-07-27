import { axiosJsonInstance } from '../config/axios';

export const bookClubList = async () => {
  try {
    const { data: data1, status } = await axiosJsonInstance.get(
      `/communities/book-club`
    );
    const { data: data } = data1;
    console.log(data);
    data.reverse();
    return { data, status };
  } catch (error) {
    console.log(error.response);
  }
};

export const frees = async () => {
  try {
    const { data: data1, status } = await axiosJsonInstance.get(
      `/communities/board/free`
    );

    const { data: data } = data1;
    console.log(data);
    data.reverse();
    return { data, status };
  } catch (error) {
    console.log(error.response);
  }
};

export const bookReports = async () => {
  try {
    const { data: data1, status } = await axiosJsonInstance.get(
      `/communities/board/report`
    );

    const { data: data } = data1;
    console.log(data);
    data.reverse();
    return { data, status };
  } catch (error) {
    console.log(error.response);
  }
};
