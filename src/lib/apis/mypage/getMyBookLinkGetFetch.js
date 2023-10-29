import { axiosJsonInstance } from '../common';

/**
 * 마이페이지 데이터 fetch
 * - 파라미터 없음
 */
export const getMyBookLinkGetFetch = async () =>
  axiosJsonInstance.get('/mypage');
