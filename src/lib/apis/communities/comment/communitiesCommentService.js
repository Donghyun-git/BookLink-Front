import { axiosJsonInstance } from '../../config/axios';

export const bookClubsCommentRegister = async (content, id, parentId) => {
  try {
    const { data: data1, status } = await axiosJsonInstance.post(
      `/communities/book-club/${id}`,
      { content, parentId }
    );
    const { data } = data1;
    console.log(data);
    return { data, status };
  } catch (error) {
    console.log(error.response);
  }
};

export const bookClubsCommentModify = async (content, id, replyId) => {
  console.log(content, id, replyId);
  try {
    const { data: data1, status } = await axiosJsonInstance.patch(
      `/communities/book-club/${id}/${replyId}`,
      { content }
    );
    const { data } = data1;
    console.log(data);
    return { data, status };
  } catch (error) {
    console.log(error.response);
  }
};

export const bookClubsCommentDelete = async (id, replyId) => {
  try {
    const { data: data1, status } = await axiosJsonInstance.delete(
      `/communities/book-club/${id}/${replyId}`
    );
    const { data } = data1;
    console.log(data);
    return { data, status };
  } catch (error) {
    console.log(error.response);
  }
};

export const bookClubsCommentLike = async (id, replyId) => {
  try {
    const { data: data1, status } = await axiosJsonInstance.post(
      `/communities/book-club/${id}/${replyId}/like`
    );
    console.log(data1);
    const { data } = data1;
    console.log(data);
    return { data, status };
  } catch (error) {
    console.log(error.response);
  }
};
