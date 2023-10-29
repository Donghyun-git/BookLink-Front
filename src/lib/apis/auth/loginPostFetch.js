import { axiosJsonInstance } from '../common';

/**
 * 로그인
 */
export const loginPostFetch = (params) =>
  axiosJsonInstance.post('/members/login', params);
