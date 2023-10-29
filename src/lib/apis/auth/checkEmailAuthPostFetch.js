import { axiosJsonInstance } from '../common';

/**
 * 이메일 인증코드 확인
 */
export const checkEmailAuthPostFetch = (params) =>
  axiosJsonInstance.post('/members/email/confirm', params);
