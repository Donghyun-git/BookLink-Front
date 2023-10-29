import { axiosJsonInstance } from '../common';

export const bookClubList = async () => {
  try {
    const { data: data1 } = await axiosJsonInstance.get(
      `/communities/book-club`
    );
    const { data: data } = data1;
    console.log(data);
    data.reverse();
    return data;
  } catch (error) {
    console.log(error.response);
  }
};

export const freeReports = async () => {
  try {
    const { data: data1, status } = await axiosJsonInstance.get(
      `/communities/board/free`
    );

    const { data: data } = data1;
    console.log(data);
    data.reverse();
    return data;
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
    return data;
  } catch (error) {
    console.log(error.response);
  }
};
