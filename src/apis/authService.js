import axios from "axios";

export const regiser = async (user) => {
  const { data } = await axios.post("/auth/register", user);
  return data;
};
