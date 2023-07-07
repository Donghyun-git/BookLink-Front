import { axiosJsonInstance } from './axios';

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
  try {
    return await axiosJsonInstance.post(`/member/login`, user);
  } catch (error) {
    console.error(error);
    return error.response;
  }
};
