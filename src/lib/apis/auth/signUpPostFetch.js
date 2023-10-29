import { axiosJsonInstance } from '../common';

/**
 * 회원가입
 */
export const signUpPostFetch = (params) =>
  axiosJsonInstance.post('/members/register', params);
