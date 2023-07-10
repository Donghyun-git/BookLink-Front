import { axiosJsonInstance } from './config/axios';

export const getAllCommnunities = async () => {
  try {
    const { data } = await axiosJsonInstance.get(`/communities`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.response);
  }
};

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

export const bookClubRegister = async (title, content, location) => {
  try {
    const { data } = await axiosJsonInstance.post(`/communities/book-club`, {
      title,
      content,
      location,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.response);
  }
};
