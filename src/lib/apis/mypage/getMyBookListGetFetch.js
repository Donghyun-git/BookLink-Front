import { axiosJsonInstance } from '../common';

/**
 * 마이페이지 나의 소장도서 리스트
 * - 파라미터 없음
 */
export const getMyBookListGetFetch = async () =>
  axiosJsonInstance.get('/mypage/my-book');
