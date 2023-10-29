import { axiosJsonInstance } from '../common';

/**
 * 닉네임 중복 확인
 */
export const nicknameDoubleCheckPostFetch = (params) =>
  axiosJsonInstance.post('/members/nickname/double-check', params);
