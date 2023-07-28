import { axiosJsonInstance } from '../../config/axios';
export const bookClubsModify = async (title, content, id) => {
  try {
    const { data: data1, status } = await axiosJsonInstance.patch(
      `/communities/book-club/${id}`,
      { title, content }
    );
    const { data } = data1;
    console.log(data);
    return { data, status };
  } catch (error) {
    console.log(error.response);
  }
};

export const freesModify = async (title, content, id) => {
  try {
    const { data: data1, status } = await axiosJsonInstance.patch(
      `/communities/board/free/${id}`,
      { title, content }
    );
    const { data } = data1;
    console.log(data);
    return { data, status };
  } catch (error) {
    console.log(error.response);
  }
};

export const bookReportsModify = async (title, content, id) => {
  try {
    const { data: data1, status } = await axiosJsonInstance.patch(
      `/communities/board/report/${id}`,
      { title, content }
    );
    const { data } = data1;
    console.log(data);
    return { data, status };
  } catch (error) {
    console.log(error.response);
  }
};
