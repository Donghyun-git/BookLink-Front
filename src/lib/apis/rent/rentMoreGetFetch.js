import { axiosJsonInstance } from '../common';

/**
 * 대여 정보 더 보기
 * - 쿼리파라미터 - title
 */
export const rentMoreGetFetch = async (queryParams) =>
  axiosJsonInstance.get(`/books/rent/books/${queryParams}`);
