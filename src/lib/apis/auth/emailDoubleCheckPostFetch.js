import { axiosJsonInstance } from '../common';

/**
 * 이메일 중복 확인
 */
export const emailDoubleCheckPostFetch = (params) =>
  axiosJsonInstance.post('/members/email/double-check', params);
