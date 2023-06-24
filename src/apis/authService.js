import axios from "axios";
import * as env from "../../env.config";

export const register = async (user) => {
  const { data } = await axios.post(
    `${env.VITE_SERVER_URL}/auth/register`,
    user
  );
  return data;
};

export const logIn = async (user) => {
  const { data } = await axios.post(`${env.VITE_SERVER_URL}/auth/login`, user);
  return data;
};
