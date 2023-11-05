import { axiosJsonInstance } from '../common';

/**
 * 메인 페이지 베스트 셀러
 * - 파라미터 없음
 */
export const bestSellerGetFetch = () => axiosJsonInstance.get('/books/main');
