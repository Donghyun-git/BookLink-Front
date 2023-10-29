import { axiosJsonInstance } from '../common';

/**
 * 로그아웃
 */
export const logoutPostFetch = () => axiosJsonInstance.post('/members/logout');
