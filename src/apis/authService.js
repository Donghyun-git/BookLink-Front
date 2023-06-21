import axios from "axios";

export const register = async (user) => {
  const { data } = await axios.post("/auth/register", user);
  return data;
};

export const logIn = async (user) => {
  const { data } = await axios.post("/auth/login", user);
  return data;
};
