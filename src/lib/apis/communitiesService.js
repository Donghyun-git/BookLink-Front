import { axiosJsonInstance } from './config/axios';

export const freeRegister = async (title, content) => {
  try {
    const { data } = await axiosJsonInstance.post(`/communities/board/free`, {
      title,
      content,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.response);
  }
};

export const reportRegister = async (
  title,
  content,
  book_title,
  authors,
  publisher,
  pud_date
) => {
  try {
    const { data } = await axiosJsonInstance.post(`/communities/board/report`, {
      title,
      contents: content,
      book_title,
      authors,
      publisher,
      pud_date,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.response);
  }
};

export const bookClubRegister = async (title, content, location) => {
  try {
    const { data, status } = await axiosJsonInstance.post(
      `/communities/book-club`,
      {
        title,
        content,
        location,
      }
    );
    console.log(data, status);
    return { data, status };
  } catch (error) {
    console.log(error.response);
  }
};

export const bookClubList = async () => {
  try {
    const { data: data1, status } = await axiosJsonInstance.get(
      `/communities/book-club`
    );
    const { data: data } = data1;
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
    console.log(data1);
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
    console.log(data1);
    const { data: data } = data1;
    console.log(data);
    data.reverse();
    return { data, status };
  } catch (error) {
    console.log(error.response);
  }
};
