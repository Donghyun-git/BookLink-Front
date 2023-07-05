//import axios from "axios";
import { axiosJsonInstance } from './axios';
export const emailDoubleCheck = async (email) => {
  try {
    const { data } = await axiosJsonInstance.post(
      'member/double-check/email',
      email
    );
    return data;
  } catch (error) {
    console.log(error.response);
  }
};

export const nicknameDoubleCheck = async (nickname) => {
  try {
    const { data } = await axiosJsonInstance.post(
      'member/double-check/nickname',
      nickname
    );
    return data;
  } catch (error) {
    console.log(error.response);
  }
};
