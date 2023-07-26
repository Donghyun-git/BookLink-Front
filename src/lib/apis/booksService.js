import { axiosJsonInstance } from './config/axios';

// [ 모든 책 데이터 ]
export const getAllBooks = async () => {
  try {
    const { status, data } = await axiosJsonInstance.get('/books/main');

    if (status !== 200) throw new Error(data.message);

    return { status, data };
  } catch (error) {
    throw new Error(error.message);
  }
};

// [ 책 상세조회 ]
export const getOneBooks = async (isbn) => {
  try {
    const { status, data } = await axiosJsonInstance.get(`/books/${isbn}`);

    if (status !== 200) throw new Error(data.message);

    return { status, data };
  } catch (error) {
    throw new Error(error.message);
  }
};

// [ 댓글 등록 ]
export const addComment = async ({ isbn, content, parentId }) => {
  try {
    const payload = {
      content,
      parentId,
    };
    console.log(payload);
    const { status, data } = await axiosJsonInstance.post(
      `/books/${isbn}`,
      payload
    );

    if (status !== 200) throw new Error(status);

    return { status, data };
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

//[ 댓글 수정 ]
export const updateComment = async (isbn, id, content) => {
  try {
    const payload = {
      content: content,
    };
    console.log(payload);
    const { status, data } = await axiosJsonInstance.patch(
      `/books/${isbn}/${id}`,
      payload
    );

    if (status !== 200) throw new Error(data.message);

    return { status, data };
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

//[ 댓글 삭제 ]
export const deleteComment = async (isbn, id) => {
  try {
    const { status, data } = await axiosJsonInstance.delete(
      `/books/${isbn}/${id}`
    );

    if (status !== 204) throw new Error(data.message);

    return { status, data };
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

//[ 댓글 좋아요 ]
export const addLikeComment = async (isbn, id) => {
  try {
    const { status, data } = await axiosJsonInstance.post(
      `/books/${isbn}/${id}/like`
    );

    if (status !== 200) throw new Error(data.message);

    return { data };
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

// [ 책 좋아요 ]

export const addLikeBook = async (isbn) => {
  try {
    const { status, data } = await axiosJsonInstance.post(
      `/books/${isbn}/like`
    );

    if (status !== 200) throw new Error(data.message);

    return { data };
  } catch (error) {
    throw new Error(error.message);
  }
};
