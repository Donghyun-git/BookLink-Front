import { axiosJsonInstance } from './axios';
import * as env from '../../env.config';

export const emailAuth = async (num) => {
  try {
    const { data } = await axiosJsonInstance.post(`/member/email/confirm`, num);
    return data;
  } catch (error) {
    console.log(error.response);
  }
};

export const signUp = async (user) => {
  try {
    const { data } = await axiosJsonInstance.post(`/member`, user);
    return data;
  } catch (error) {
    console.log(error.response);
  }
};

export const login = async (user) => {
  const { data } = await axiosJsonInstance.post(
    `${env.VITE_SERVER_URL}/auth/login`,
    user
  );
  return data;
};
