import { axiosJsonInstance } from './config/axios';
import axios from 'axios';

// [ 모든 책 데이터 ]
export const getAllBooks = async () => {
  try {
    const { status, data } = await axiosJsonInstance.get('/books/main');

    return { status, data };
  } catch (error) {
    throw new Error(error.message);
  }
};

// [ 카테고리 선택 책 데이터 ]
export const getCategoryBooks = async (category) => {
  try {
    const { status, data } = await axiosJsonInstance.get(
      `/books/main/${category}`
    );

    return { status, data };
  } catch (error) {
    throw new Error(error.message);
  }
};

//[ 카테고리 및 검색한 책 데이터 ]
export const getSearchBooks = async (keyword, category) => {
  try {
    if (!keyword) {
      const { status, data } = await getCategoryBooks(category);

      return { status, data };
    }
    const { status, data } = await axiosJsonInstance.get(
      `/books/main/${category}?search=${keyword}`
    );

    return { status, data };
  } catch (error) {
    throw new Error(error.message);
  }
};

// [ 책 상세조회 ]
export const getOneBooks = async (isbn) => {
  try {
    const { status, data } = await axiosJsonInstance.get(`/books/${isbn}`);

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

    const { status, data } = await axiosJsonInstance.patch(
      `/books/${isbn}/${id}`,
      payload
    );

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

    return { status, data };
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

//[ 댓글 좋아요 ]
export const addLikeComment = async (isbn, id) => {
  try {
    const { data } = await axiosJsonInstance.post(`/books/${isbn}/${id}/like`);

    return { data };
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

// [ 책 좋아요 ]

export const addLikeBook = async (isbn) => {
  try {
    const { data } = await axiosJsonInstance.post(`/books/${isbn}/like`);

    return { data };
  } catch (error) {
    throw new Error(error.message);
  }
};

//[ 도서관 가져오기 ]
export const getLibraries = async (isbn13) => {
  try {
    console.log(isbn13);
    const uri = 'http://localhost:8800/api/v1/libraries';
    const { data } = await axios.get(`${uri}/${isbn13}`);

    return { data };
  } catch (error) {
    throw new Error(error.message);
  }
};
