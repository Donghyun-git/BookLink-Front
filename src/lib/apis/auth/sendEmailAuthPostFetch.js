import { axiosJsonInstance } from '../common';

/**
 * 이메일 중복 확인
 */
export const sendEmailAuthPostFetch = (params) =>
  axiosJsonInstance.post('/members/email/email-auth', params);
